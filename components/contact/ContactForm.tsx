"use client";

import { useState } from 'react';
import {
  Send as SendIcon,
  CheckCircle as CheckIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

// Country codes list
const countryCodes = [
  { code: '+91', label: 'India', short: 'IN', flag: '🇮🇳' },
  { code: '+1', label: 'United States', short: 'US', flag: '🇺🇸' },
  { code: '+44', label: 'United Kingdom', short: 'UK', flag: '🇬🇧' },
  { code: '+234', label: 'Nigeria', short: 'NG', flag: '🇳🇬' },
  { code: '+971', label: 'UAE', short: 'AE', flag: '🇦🇪' },
  { code: '+65', label: 'Singapore', short: 'SG', flag: '🇸🇬' },
  { code: '+61', label: 'Australia', short: 'AU', flag: '🇦🇺' },
  { code: '+49', label: 'Germany', short: 'DE', flag: '🇩🇪' },
  { code: '+33', label: 'France', short: 'FR', flag: '🇫🇷' },
  { code: '+81', label: 'Japan', short: 'JP', flag: '🇯🇵' },
  { code: '+86', label: 'China', short: 'CN', flag: '🇨🇳' },
  { code: '+82', label: 'South Korea', short: 'KR', flag: '🇰🇷' },
  { code: '+55', label: 'Brazil', short: 'BR', flag: '🇧🇷' },
  { code: '+27', label: 'South Africa', short: 'ZA', flag: '🇿🇦' },
  { code: '+966', label: 'Saudi Arabia', short: 'SA', flag: '🇸🇦' },
  { code: '+974', label: 'Qatar', short: 'QA', flag: '🇶🇦' },
  { code: '+60', label: 'Malaysia', short: 'MY', flag: '🇲🇾' },
  { code: '+63', label: 'Philippines', short: 'PH', flag: '🇵🇭' },
  { code: '+62', label: 'Indonesia', short: 'ID', flag: '🇮🇩' },
  { code: '+66', label: 'Thailand', short: 'TH', flag: '🇹🇭' },
  { code: '+7', label: 'Russia', short: 'RU', flag: '🇷🇺' },
  { code: '+39', label: 'Italy', short: 'IT', flag: '🇮🇹' },
  { code: '+34', label: 'Spain', short: 'ES', flag: '🇪🇸' },
  { code: '+31', label: 'Netherlands', short: 'NL', flag: '🇳🇱' },
  { code: '+46', label: 'Sweden', short: 'SE', flag: '🇸🇪' },
  { code: '+47', label: 'Norway', short: 'NO', flag: '🇳🇴' },
  { code: '+41', label: 'Switzerland', short: 'CH', flag: '🇨🇭' },
  { code: '+353', label: 'Ireland', short: 'IE', flag: '🇮🇪' },
  { code: '+64', label: 'New Zealand', short: 'NZ', flag: '🇳🇿' },
  { code: '+94', label: 'Sri Lanka', short: 'LK', flag: '🇱🇰' },
  { code: '+880', label: 'Bangladesh', short: 'BD', flag: '🇧🇩' },
  { code: '+92', label: 'Pakistan', short: 'PK', flag: '🇵🇰' },
  { code: '+977', label: 'Nepal', short: 'NP', flag: '🇳🇵' },
  { code: '+254', label: 'Kenya', short: 'KE', flag: '🇰🇪' },
  { code: '+233', label: 'Ghana', short: 'GH', flag: '🇬🇭' },
  { code: '+20', label: 'Egypt', short: 'EG', flag: '🇪🇬' },
];

const services = [
  "Enterprise Content Management",
  "Enterprise Document Management",
  "Business Process Automation",
  "Workflow Automation",
  "Onsite Document Scanning",
  "GenAI Solutions",
  "Custom Software Development",
  "Physical Record Management",
  "Document Issuance Software",
  "eBMR for Pharmaceutical Manufacturing",
  "eBMR for FMCG",
  "API Integration Services",
  "Digital Transformation Consulting",
  "Other Services",
  "Product Inquiry",
  "Partnership Opportunities",
  "Careers",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showSuccessView, setShowSuccessView] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === 'email') {
      setEmailError('');
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const FREE_EMAIL_DOMAINS = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'mail.com', 'yandex.com', 'protonmail.com', 'zoho.com',
      'live.com', 'msn.com', 'yahoo.co.in', 'yahoo.co.uk', 'googlemail.com'
    ];

    const emailDomain = formData.email.split('@')[1]?.toLowerCase();
    if (emailDomain && FREE_EMAIL_DOMAINS.includes(emailDomain)) {
      setEmailError('Please provide a valid work email address (e.g., name@company.com)');
      setIsSubmitting(false);
      return;
    }

    const fullPhone = formData.phone ? `${selectedCountry.code}${formData.phone}` : '';
    if (formData.phone && formData.phone.length < 7) {
      setPhoneError('Please enter a valid phone number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: fullPhone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setShowSuccessView(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      setErrorMessage(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetToForm = () => {
    setShowSuccessView(false);
    setErrorMessage('');
    setEmailError('');
    setPhoneError('');
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden max-w-2xl mx-auto min-h-[650px] flex flex-col">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 via-primary/10 to-transparent rounded-full blur-3xl -z-10" />

      {!showSuccessView ? (
        /* FORM VIEW */
        <div key="form" className="animate-fade-in">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <SendIcon sx={{ fontSize: 18, color: 'white' }} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-xs text-gray-600 mt-0.5">We&apos;ll get back to you within 24 hours</p>
            </div>
          </div>

          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 animate-fade-in">
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Work Email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setEmailError('');
                  handleChange(e as React.ChangeEvent<HTMLInputElement>);
                }}
                autoComplete="email"
                error={!!emailError}
                helperText={emailError || ''}
              />

              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={(e) => {
                  setPhoneError('');
                  const val = e.target.value.replace(/\D/g, '');
                  setFormData({ ...formData, phone: val });
                }}
                autoComplete="tel"
                error={!!phoneError}
                helperText={phoneError || ''}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start" sx={{ mr: 0 }}>
                        <Autocomplete
                          disableClearable
                          value={selectedCountry}
                          onChange={(_, newValue) => {
                            if (newValue) setSelectedCountry(newValue);
                          }}
                          options={countryCodes}
                          getOptionLabel={(option) => option.code}
                          renderOption={(props, option) => {
                            const { key, ...rest } = props as React.HTMLAttributes<HTMLLIElement> & { key: string };
                            return (
                              <Box component="li" key={key} {...rest} sx={{ fontSize: '1rem', py: 0.5, whiteSpace: 'nowrap' }}>
                                {option.short} ({option.code})
                              </Box>
                            );
                          }}
                          slotProps={{
                            paper: {
                              sx: {
                                width: 'max-content',
                                minWidth: 90,
                              },
                            },
                          }}
                          sx={{
                            width: 100,
                            '& .MuiOutlinedInput-root': {
                              padding: '0 !important',
                              paddingRight: '20px !important',
                              fontSize: '1rem',
                              '& fieldset': { border: 'none' },
                            },
                            '& .MuiAutocomplete-input': {
                              padding: '2px 4px !important',
                              minWidth: '40px !important',
                              fontSize: '1rem',
                            },
                          }}
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" />
                          )}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    paddingLeft: 0,
                  },
                }}
              />
            </div>

            <TextField
              fullWidth
              id="company"
              name="company"
              label="Company Name (Optional)"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
            />

            <TextField
              fullWidth
              required
              select
              id="service"
              name="service"
              label="Service Interested In"
              value={formData.service}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  disableScrollLock: true,
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  PaperProps: {
                    style: {
                      maxHeight: 48 * 4.5 + 8,
                      marginTop: '8px',
                    },
                  },
                },
                sx: {
                  '& .MuiSelect-select': {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }
                }
              }}
            >
              {services.map((service, idx) => (
                <MenuItem key={idx} value={service} sx={{ fontSize: '1rem' }}>
                  {service}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              required
              multiline
              rows={3}
              id="message"
              name="message"
              label="Your Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:from-blue-600 hover:to-primary shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <SendIcon sx={{ fontSize: 18 }} />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 pt-0.5">
              <CheckIcon sx={{ fontSize: 14, color: '#22c55e' }} />
              <span>Your information is secure and confidential</span>
            </div>
          </form>

        </div>
      ) : (
        /* SUCCESS VIEW */
        <div key="success" className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in px-4">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-scale-in">
            <CheckIcon sx={{ fontSize: 64, color: '#22c55e' }} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Message Sent Successfully!
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Thank you for contacting us. We&apos;ve received your message and will get back to you within 24 hours.
          </p>

          <button
            onClick={resetToForm}
            className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-primary transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <SendIcon sx={{ fontSize: 18 }} />
            Submit Another Form
          </button>
        </div>
      )}

      {/* Follow Us Section */}
      <div className="pt-3 mt-3 border-t border-gray-100 mt-auto">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">Follow Us</h3>
        <div className="flex gap-2.5 justify-center">
          <a
            href="https://in.linkedin.com/company/cannyminds-technology-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#0a66c2] hover:bg-[#004182] rounded-lg flex items-center justify-center text-white transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <LinkedInIcon sx={{ fontSize: 20 }} />
          </a>
          <a
            href="https://x.com/cannyminds"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#1DA1F2] hover:bg-[#1a8cd8] rounded-lg flex items-center justify-center text-white transition-colors shadow-sm"
            aria-label="Twitter"
          >
            <TwitterIcon sx={{ fontSize: 20 }} />
          </a>
          <a
            href="https://www.facebook.com/p/CannyMinds-Technology-Solutions-100063646614219/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#1877f2] hover:bg-[#0c63d4] rounded-lg flex items-center justify-center text-white transition-colors shadow-sm"
            aria-label="Facebook"
          >
            <FacebookIcon sx={{ fontSize: 20 }} />
          </a>
          <a
            href="https://www.instagram.com/cannyminds_technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center justify-center text-white transition-colors shadow-sm"
            aria-label="Instagram"
          >
            <InstagramIcon sx={{ fontSize: 20 }} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}
