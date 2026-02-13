import type { Metadata } from 'next';
import AllProductsShowcase from '@/components/solutions/AllProductsShowcase';

export const metadata: Metadata = {
    title: 'All Products | Enterprise Software by CannyMinds',
    description: 'Explore our complete suite of enterprise software products including CannyECM, CannyRMS, CannyScan, CannyTrack, and CannyHR. Built for scalability and compliance.',
    keywords: [
        'enterprise software',
        'CannyECM',
        'CannyRMS',
        'CannyScan',
        'CannyTrack',
        'CannyHR',
        'document management',
        'records management',
        'productivity tracking',
        'HRMS'
    ],
    openGraph: {
        title: 'All Products | Enterprise Software by CannyMinds',
        description: 'Explore our complete suite of enterprise software products. ISO-certified, FDA-compliant systems trusted by global organizations.',
        url: 'https://www.cannymindstech.com/products',
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: 'https://www.cannymindstech.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'CannyMinds Enterprise Software Products',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'All Products | Enterprise Software by CannyMinds',
        description: 'Explore our complete suite of enterprise software products. ISO-certified, FDA-compliant systems trusted by global organizations.',
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
    alternates: {
        canonical: 'https://www.cannymindstech.com/products',
    },
};

export default function AllProductsPage() {
    return (
        <main>
            <AllProductsShowcase />
        </main>
    );
}
