import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/solutions/pharmaceutical/ebmr',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/predictive-maintenance',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/process-optimization',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/quality-inspection',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/deviation-capa',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/ppe-monitoring',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/cleaning-validation',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/regulatory-assistant',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/sop-assistant',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/training-compliance',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/production',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/quality',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/regulatory',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/digitization',
        destination: '/product/scanning-solution',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/records',
        destination: '/product/rms',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/sop-management',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/stp-protocol',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/license-management',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/change-control',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      // Fix 404 redirects - redirect old paths to new /product/ structure
      {
        source: '/solutions/rms',
        destination: '/product/rms',
        permanent: true,
      },
      {
        source: '/solutions/hr-management',
        destination: '/product/hr-management',
        permanent: true,
      },
      {
        source: '/solutions/scanning-solution',
        destination: '/product/scanning-solution',
        permanent: true,
      },
      {
        source: '/solutions/tracking-system',
        destination: '/product/tracking-system',
        permanent: true,
      },
      {
        source: '/solutions/document-management',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/solutions/product/ai-solutions',
        destination: '/ai-solutions',
        permanent: true,
      },
      {
        source: '/solutions/product/cms',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/solutions/product/invoice-management',
        destination: '/product/document-management',
        permanent: true,
      },
      // Redirect old /solutions/product/ paths to new /product/ paths
      {
        source: '/solutions/product/rms',
        destination: '/product/rms',
        permanent: true,
      },
      {
        source: '/solutions/product/hr-management',
        destination: '/product/hr-management',
        permanent: true,
      },
      {
        source: '/solutions/product/scanning-solution',
        destination: '/product/scanning-solution',
        permanent: true,
      },
      {
        source: '/solutions/product/tracking-system',
        destination: '/product/tracking-system',
        permanent: true,
      },
      {
        source: '/solutions/product/document-management',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/solutions/product/ebmr',
        destination: '/product/ebmr',
        permanent: true,
      },
      // Use cases redirects
      {
        source: '/use-cases/pharmaceutical',
        destination: '/solutions/pharmaceutical',
        permanent: true,
      },
      {
        source: '/use-cases/fmcg',
        destination: '/solutions/manufacturing',
        permanent: true,
      },
      {
        source: '/use-cases/manufacturing-engineering',
        destination: '/solutions/manufacturing',
        permanent: true,
      },
      // BPM redirects (pages removed)
      {
        source: '/bpm/safety-compliance',
        destination: '/solutions/manufacturing',
        permanent: true,
      },
      {
        source: '/bpm/legal-management',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/bpm/invoice-management',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/bpm/procurement',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/bpm/custom-workflows',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/product/invoice-management',
        destination: '/product/document-management',
        permanent: true,
      },
      {
        source: '/product/ai-solutions',
        destination: '/ai-solutions',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
