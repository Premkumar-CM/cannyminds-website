import type { Metadata } from 'next';
import AllIndustriesShowcase from '@/components/solutions/AllIndustriesShowcase';

export const metadata: Metadata = {
    title: 'Industry Solutions | CannyMinds',
    description: 'Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and more. ISO-certified compliance and automation.',
    keywords: [
        'industry solutions',
        'pharmaceutical software',
        'manufacturing automation',
        'healthcare it solutions',
        'financial technology',
        'legal tech',
        'cannyminds industries'
    ],
    openGraph: {
        title: 'Industry Solutions | CannyMinds',
        description: 'Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and more.',
        url: 'https://www.cannymindstech.com/solutions',
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: 'https://www.cannymindstech.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'CannyMinds Industry Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Industry Solutions | CannyMinds',
        description: 'Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and more.',
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
    alternates: {
        canonical: 'https://www.cannymindstech.com/solutions',
    },
};

export default function AllSolutionsPage() {
    return (
        <main>
            <AllIndustriesShowcase />
        </main>
    );
}
