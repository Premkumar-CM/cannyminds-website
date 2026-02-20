import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // Max 5 submissions per hour per IP

function checkRateLimit(ip: string): boolean {


  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    console.log('--- Contact Form API Called ---');

    // 1. Rate Limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    if (!checkRateLimit(ip)) {
      console.warn(`Rate limit hit for IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Parse Body
    let body;
    try {
      body = await request.json();
    } catch (e) {
      console.error('JSON Parse Error:', e);
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { name, email, phone, company, service, message } = body;

    // 3. Validation
    if (!name || !email || !message || !service) {
      console.warn('Missing required fields:', { name: !!name, email: !!email, message: !!message, service: !!service });
      return NextResponse.json(
        { error: 'Name, email, service, and message are required.' },
        { status: 400 }
      );
    }

    // Checking for work email
    const FREE_EMAIL_DOMAINS = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'mail.com', 'yandex.com', 'protonmail.com', 'zoho.com',
      'live.com', 'msn.com', 'yahoo.co.in', 'yahoo.co.uk', 'googlemail.com'
    ];

    const emailDomain = email.split('@')[1]?.toLowerCase();
    if (emailDomain && FREE_EMAIL_DOMAINS.includes(emailDomain)) {
      return NextResponse.json(
        { error: 'Please provide a valid work email address.' },
        { status: 400 }
      );
    }

    // 4. SMTP Configuration Check
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
      to: process.env.COMPANY_EMAIL,
    };

    // Masked logging for verification
    const mask = (str: string | undefined) => {
      if (!str) return 'MISSING';
      if (str.length <= 4) return '****';
      return `${str[0]}***${str[str.length - 1]} (${str.length} chars)`;
    };

    console.log('Environment Debug:', {
      host: smtpConfig.host,
      port: smtpConfig.port,
      user: mask(smtpConfig.user),
      pass: mask(smtpConfig.pass),
      to: smtpConfig.to
    });

    if (!smtpConfig.host || !smtpConfig.user || !smtpConfig.pass || !smtpConfig.to) {
      console.error('Mising SMTP Environment Variables:', {
        host: !!smtpConfig.host,
        user: !!smtpConfig.user,
        pass: !!smtpConfig.pass,
        to: !!smtpConfig.to
      });
      return NextResponse.json(
        { error: 'Server SMTP configuration is incomplete.' },
        { status: 500 }
      );
    }

    // 5. Create Transporter
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port, // Use port from config
      secure: smtpConfig.port === 465, // True for 465, false for other ports
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
      tls: {
        rejectUnauthorized: false
      },
      // Increase timeouts for reliability (helps with cold starts)
      connectionTimeout: 20000, // 20 seconds
      greetingTimeout: 20000,   // 20 seconds
      socketTimeout: 20000,     // 20 seconds
      debug: true, // Enable debug logging
      logger: true // Enable internal logger
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('✅ SMTP Connection Verified');
    } catch (verifyError) {
      console.error('❌ SMTP Connection Verification Failed:', verifyError);
      return NextResponse.json(
        { error: 'Failed to connect to email server.', details: verifyError },
        { status: 500 }
      );
    }

    // 6. Send Admin Notification Email
    console.log(`Attempting to send admin notification to ${smtpConfig.to}...`);

    const adminMailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'CannyMinds Website'}" <${smtpConfig.user}>`,
      to: smtpConfig.to,
      replyTo: email,
      subject: `Contact Inquiry: ${name} (${service})`,
      text: `
        New Contact Form Submission
        ---------------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${company || 'N/A'}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 140px;">NAME:</td>
              <td style="padding: 10px 0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">EMAIL:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">PHONE:</td>
              <td style="padding: 10px 0;"><a href="tel:${phone.replace(/\D/g, '')}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
            </tr>
            ` : ''}
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">ORGANIZATION:</td>
              <td style="padding: 10px 0; vertical-align: middle;">
                ${company} 
                <a href="https://www.google.com/search?q=${encodeURIComponent(company)}" target="_blank" style="margin-left: 10px; font-size: 11px; color: #64748b; text-decoration: none; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">🔍 Search</a>
              </td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">SERVICE:</td>
              <td style="padding: 10px 0; color: #1e293b;">${service}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; font-weight: bold; color: #1e3a8a; margin-bottom: 10px;">Message:</p>
            <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;">
            Sent via CannyMinds Website Submisson Utility
          </div>
        </div>
      `
    };

    const adminInfo = await transporter.sendMail(adminMailOptions);

    console.log('✅ Admin Notification Sent:', {
      messageId: adminInfo.messageId,
      accepted: adminInfo.accepted
    });

    // 7. Send Auto-Reply to User
    console.log(`Attempting to send auto-reply to user ${email}...`);

    const autoReplyMailOptions = {
      from: `"CannyMinds (No-Reply)" <${smtpConfig.user}>`,
      to: email, // Send to the user
      replyTo: 'no-reply@cannymindstech.com',
      subject: `We've received your message - CannyMinds`,
      text: `
        Hi ${name},

        Thank you for contacting CannyMinds. We have received your inquiry regarding "${service}".

        Our team will review your message and get back to you within 24 hours.

        Best regards,
        The CannyMinds Team
        https://www.cannymindstech.com
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e3a8a; margin-bottom: 10px;">Thank You for Reaching Out!</h1>
            <p style="color: #64748b; font-size: 16px;">We have received your message.</p>
          </div>
          
          <div style="padding: 20px; background-color: #f8fafc; border-radius: 8px; margin-bottom: 30px;">
            <p style="color: #334155; line-height: 1.6; margin-bottom: 15px;">Hi <strong>${name}</strong>,</p>
            <p style="color: #334155; line-height: 1.6; margin-bottom: 15px;">
              Thank you for contacting CannyMinds Technology Solutions. We appreciate your interest in our <strong>${service}</strong> services.
            </p>
            <p style="color: #334155; line-height: 1.6;">
              Our team usually responds within 24 hours to schedule a detailed discussion about your requirements.
            </p>
          </div>

          <div style="text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 5px;">Best regards,</p>
            <p style="color: #1e3a8a; font-weight: bold; font-size: 16px; margin: 0;">The CannyMinds Team</p>
            <a href="https://www.cannymindstech.com" style="color: #3b82f6; text-decoration: none; font-size: 14px; display: inline-block; margin-top: 5px;">www.cannymindstech.com</a>

            <div style="margin-top: 20px;">
              <p style="color: #64748b; font-size: 12px; margin-bottom: 10px;">Connect with us:</p>
              <a href="https://in.linkedin.com/company/cannyminds-technology-solutions" style="text-decoration: none; margin: 0 5px;">
                <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" width="24" height="24" style="display: inline-block; vertical-align: middle;">
              </a>
              <a href="https://x.com/cannyminds" style="text-decoration: none; margin: 0 5px;">
                <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="X (Twitter)" width="24" height="24" style="display: inline-block; vertical-align: middle;">
              </a>
              <a href="https://www.facebook.com/p/CannyMinds-Technology-Solutions-100063646614219/" style="text-decoration: none; margin: 0 5px;">
                <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" width="24" height="24" style="display: inline-block; vertical-align: middle;">
              </a>
              <a href="https://www.instagram.com/cannyminds_technology/" style="text-decoration: none; margin: 0 5px;">
                <img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram" width="24" height="24" style="display: inline-block; vertical-align: middle;">
              </a>
            </div>
          </div>
        </div>
      `
    };

    // Send auto-reply asynchronously (don't block response on it, but log error if fails)
    try {
      await transporter.sendMail(autoReplyMailOptions);
      console.log('✅ Auto-reply sent successfully');
    } catch (replyError) {
      console.error('⚠️ Failed to send auto-reply:', replyError);
      // We don't fail the request if auto-reply fails, as the admin notification is more important
    }

    return NextResponse.json({ success: true, message: 'Message sent!' }, { status: 200 });

  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        details: error.message,
        code: error.code
      },
      { status: 500 }
    );
  }
}
