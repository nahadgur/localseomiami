import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { caseStudies } from '@/data/caseStudies';
import { breadcrumbListSchema } from '@/lib/schema';
import CaseStudiesIndexClient from './CaseStudiesIndexClient';

const TITLE = 'Case studies | Local Miami SEO';
const DESCRIPTION =
  'Real local-SEO results from the operator who runs the matching service, every figure pulled straight from Google Search Console. US local sites taken from launch to page-one rankings across different niches.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}/case-studies/` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${siteConfig.url}/case-studies/`, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function CaseStudiesIndexPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${siteConfig.url}/case-studies/#collection`,
      name: 'Case studies',
      description: DESCRIPTION,
      url: `${siteConfig.url}/case-studies/`,
      isPartOf: { '@id': `${siteConfig.url}/#website` },
      inLanguage: 'en-US',
      hasPart: caseStudies.map((c) => ({
        '@type': 'CreativeWork',
        name: `${c.name} local SEO case study`,
        url: `${siteConfig.url}/case-studies/${c.slug}/`,
      })),
    },
    breadcrumbListSchema([
      { name: 'Home', path: '/' },
      { name: 'Case studies', path: '/case-studies/' },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CaseStudiesIndexClient />
    </>
  );
}
