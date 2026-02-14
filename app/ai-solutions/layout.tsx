import type { Metadata } from "next";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
  title: "AI Solutions & Generative AI for Enterprise | CannyMinds",
  description: "Industry-specific Generative AI solutions for Healthcare, Manufacturing, Finance, Insurance, and more. Transform your business with intelligent automation, document processing, and predictive analytics.",
  keywords: "generative AI, enterprise AI, AI automation, machine learning, document processing AI, healthcare AI, manufacturing AI, insurance AI, NBFC AI solutions, business intelligence",
  openGraph: {
    title: "AI Solutions & Generative AI for Enterprise | CannyMinds",
    description: "Industry-specific Generative AI solutions that automate processes, extract insights, and drive measurable ROI across your organization.",
    url: "https://www.cannymindstech.com/ai-solutions",
    images: [{ url: "https://www.cannymindstech.com/og-image.jpg", width: 1200, height: 630, alt: "CannyMinds AI Solutions" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Generative AI for Enterprise | CannyMinds",
    description: "Industry-specific Generative AI solutions that automate processes, extract insights, and drive measurable ROI.",
  },
  alternates: {
    canonical: "https://www.cannymindstech.com/ai-solutions",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "AI Solutions & Generative AI for Enterprise | CannyMinds",
      "description": "Industry-specific Generative AI solutions for Healthcare, Manufacturing, Finance, Insurance, and more.",
      "url": `${baseUrl}/ai-solutions`,
      "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        }
      },
      "about": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Thing",
            "position": 1,
            "name": "Healthcare AI Solutions",
            "url": `${baseUrl}/ai-solutions/healthcare`
          },
          {
            "@type": "Thing",
            "position": 2,
            "name": "Pharmaceutical AI Solutions",
            "url": `${baseUrl}/ai-solutions/pharmaceutical`
          },
          {
            "@type": "Thing",
            "position": 3,
            "name": "Insurance AI Solutions",
            "url": `${baseUrl}/ai-solutions/insurance`
          },
          {
            "@type": "Thing",
            "position": 4,
            "name": "NBFC AI Solutions",
            "url": `${baseUrl}/ai-solutions/nbfc`
          },
          {
            "@type": "Thing",
            "position": 5,
            "name": "Manufacturing AI Solutions",
            "url": `${baseUrl}/ai-solutions/manufacturing`
          },
          {
            "@type": "Thing",
            "position": 6,
            "name": "Textile AI Solutions",
            "url": `${baseUrl}/ai-solutions/textile`
          },
          {
            "@type": "Thing",
            "position": 7,
            "name": "E-Commerce AI Solutions",
            "url": `${baseUrl}/ai-solutions/ecommerce`
          },
          {
            "@type": "Thing",
            "position": 8,
            "name": "Real Estate AI Solutions",
            "url": `${baseUrl}/ai-solutions/real-estate`
          },
          {
            "@type": "Thing",
            "position": 9,
            "name": "Marketing AI Solutions",
            "url": `${baseUrl}/ai-solutions/marketing`
          },
          {
            "@type": "Thing",
            "position": 10,
            "name": "Professional Services AI Solutions",
            "url": `${baseUrl}/ai-solutions/professional-services`
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${baseUrl}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Solutions"
        }
      ]
    }
  ]
};

export default function AISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
