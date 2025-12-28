import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import {
  LocalHospital,
  Security,
  CloudDone,
  VerifiedUser,
  Description,
  People,
  ArrowForward,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Healthcare & Pharmaceuticals IT Solutions | CannyMinds",
  description: "HIPAA-compliant digital solutions for healthcare, hospitals, and pharmaceutical companies. Secure patient records, compliance management, and workflow automation.",
  alternates: {
    canonical: "https://www.cannymindstech.com/industries/healthcare",
  },
};

export default function HealthcareIndustryPage() {
  const solutions = [
    {
      title: "CannyECM for Healthcare",
      description: "HIPAA-compliant document management for patient records, medical reports, and compliance documentation.",
      icon: Description,
      link: "/solutions/document-management",
    },
    {
      title: "CannyHR for Hospitals",
      description: "Manage healthcare staff, scheduling, payroll, and credentials with specialized HR automation.",
      icon: People,
      link: "/solutions/hr-management",
    },
  ];

  const benefits = [
    {
      title: "HIPAA Compliance",
      description: "Built-in security controls and audit trails to meet healthcare regulations",
      icon: VerifiedUser,
    },
    {
      title: "Patient Data Security",
      description: "End-to-end encryption and role-based access controls",
      icon: Security,
    },
    {
      title: "Cloud & On-Premise",
      description: "Flexible deployment options to meet your infrastructure needs",
      icon: CloudDone,
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <LocalHospital className="text-primary" sx={{ fontSize: 48 }} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Healthcare & Pharmaceuticals IT Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                HIPAA-compliant digital solutions designed specifically for hospitals, clinics,
                pharmaceutical companies, and healthcare providers. Secure patient data, streamline
                workflows, and ensure regulatory compliance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                    Request Demo
                    <ArrowForward fontSize="small" />
                  </button>
                </Link>
                <Link href="/#solutions">
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-primary transition-colors">
                    View Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Healthcare Organizations Choose CannyMinds
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Purpose-built solutions for the unique challenges of healthcare IT
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                    <IconComponent className="text-primary mx-auto mb-4" sx={{ fontSize: 48 }} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Healthcare Solutions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {solutions.map((solution) => {
                const IconComponent = solution.icon;
                return (
                  <Link key={solution.title} href={solution.link}>
                    <div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-primary transition-colors h-full">
                      <IconComponent className="text-primary mb-4" sx={{ fontSize: 40 }} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <span className="text-primary font-semibold inline-flex items-center gap-2">
                        Learn More <ArrowForward fontSize="small" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare IT?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our healthcare IT specialists to discuss your specific needs.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Contact Us Today
                <ArrowForward fontSize="small" />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
