import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import HeroGenZ from "@/components/sections/HeroGenZ";
import ProductsNew from "@/components/sections/ProductsNew";
import AboutNew from "@/components/sections/AboutNew";
import GlobalOfficesNew from "@/components/sections/GlobalOfficesNew";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "CannyMinds - Enterprise Software & AI Solutions",
  description: "Leading IT solutions with 20+ years in digital transformation, AI automation, and enterprise software. ISO certified. Offices in India, USA, Nigeria.",
  keywords: [
    "IT solutions India",
    "digital transformation",
    "AI automation",
    "enterprise software development",
    "document management software",
    "HR management system",
    "scanning solutions",
    "tracking systems",
    "business process automation",
    "ISO certified IT company",
    "CannyMinds",
    "CannyECM",
    "CannyHR",
    "CannyScan",
    "CannyTrack",
  ].join(", "),
  openGraph: {
    title: "CannyMinds - Enterprise Software & AI Solutions",
    description: "Leading IT solutions with 20+ years in digital transformation, AI automation, and enterprise software. ISO certified. Offices in India, USA, Nigeria.",
    type: "website",
    url: "https://www.cannymindstech.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyMinds Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CannyMinds - Enterprise Software & AI Solutions",
    description: "Leading IT solutions with 20+ years in digital transformation, AI automation, and enterprise software. ISO certified. Offices in India, USA, Nigeria.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.cannymindstech.com",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "CannyMinds Technology Solutions",
      "url": "https://www.cannymindstech.com",
      "logo": "https://www.cannymindstech.com/logo.png",
      "description": "Leading IT solutions with 20+ years in digital transformation, AI automation, and enterprise software.",
      "foundingDate": "2003",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "No 88 Ram Nagar 6th St, Velachery",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600042",
          "addressCountry": "IN"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-93618-01926",
        "contactType": "customer service",
        "email": "info@cannymindstech.com",
        "availableLanguage": ["en", "hi", "ta"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/cannyminds",
        "https://twitter.com/cannyminds",
        "https://www.facebook.com/cannyminds"
      ]
    },
    {
      "@type": "WebSite",
      "url": "https://www.cannymindstech.com",
      "name": "CannyMinds Technology Solutions",
      "description": "Enterprise Software & AI Solutions",
      "publisher": {
        "@id": "https://www.cannymindstech.com#organization"
      }
    },
    {
      "@type": "ItemList",
      "name": "Products",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "position": 1,
          "name": "CannyECM",
          "applicationCategory": "BusinessApplication",
          "description": "Enterprise Content Management System",
          "url": "https://www.cannymindstech.com/solutions/document-management"
        },
        {
          "@type": "SoftwareApplication",
          "position": 2,
          "name": "CannyHR",
          "applicationCategory": "BusinessApplication",
          "description": "HR & Payroll Management Software",
          "url": "https://www.cannymindstech.com/solutions/hr-management"
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "CannyScan",
          "description": "Professional Document Scanning Services",
          "url": "https://www.cannymindstech.com/solutions/scanning-solution"
        },
        {
          "@type": "SoftwareApplication",
          "position": 4,
          "name": "CannyTrack",
          "applicationCategory": "BusinessApplication",
          "description": "Employee Productivity Monitoring Software",
          "url": "https://www.cannymindstech.com/solutions/tracking-system"
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <section id="home">
          <HeroGenZ />
        </section>
        <section id="solutions">
          <ProductsNew />
        </section>
        <section id="about">
          <AboutNew />
        </section>
        <section id="offices">
          <GlobalOfficesNew />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
