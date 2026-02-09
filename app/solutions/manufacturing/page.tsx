import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    Factory,
    Settings,
    Speed,
    Security,
    Home,
    ChevronRight,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Manufacturing Solutions | Shop Floor Automation",
    description: "Transform manufacturing operations with AI-powered shop floor automation, real-time monitoring, and intelligent process control for paperless production.",
    keywords: [
        "manufacturing automation",
        "shop floor automation",
        "production recording system",
        "paperless manufacturing",
        "manufacturing workflow automation",
        "production line digitization",
        "manufacturing AI solutions",
        "smart manufacturing",
    ],
    alternates: {
        canonical: "/solutions/manufacturing",
    },
    openGraph: {
        title: "Manufacturing Solutions",
        description: "Transform your manufacturing operations with intelligent automation and real-time quality control.",
        images: [{ url: "/images/manufacturing-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Manufacturing Solutions | CannyMinds",
    "description": "Digital transformation solutions for manufacturing including shop floor automation, production recording, and workflow management.",
    "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
        }
    },
    "author": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function ManufacturingOverviewPage() {
    const solutions = [
        {
            title: "Shop Floor Automation",
            description: "Transform manufacturing operations with AI-powered shop floor automation, real-time monitoring, and intelligent process control.",
            href: "/solutions/manufacturing/shop-floor-automation",
            icon: Settings,
            color: "orange",
        },
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white">
                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-primary flex items-center gap-1">
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Manufacturing Solutions</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <Factory sx={{ fontSize: 18 }} />
                                    Manufacturing Industry
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    AI-Powered Manufacturing Solutions
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Transform your manufacturing operations with intelligent automation, predictive maintenance, and real-time quality control powered by AI.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder className="aspect-[4/3] rounded-2xl" text="Manufacturing Solutions" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Our Manufacturing Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {solutions.map((solution, index) => (
                                <Link
                                    key={index}
                                    href={solution.href}
                                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                                >
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                                        <solution.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {solution.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                                        Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-orange-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Manufacturing?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss how our AI-powered solutions can optimize your production operations.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                        >
                            Schedule Consultation
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
