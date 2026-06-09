import type { Metadata } from 'next';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';
import GuidesIndexClient from './GuidesIndexClient';

const TITLE = 'Miami Local SEO Guides | Local Miami SEO';
const DESCRIPTION = 'Plain-English local SEO guides for Miami businesses: Google Business Profile, the map pack, citations, reviews, on-page, links, content, and choosing an agency.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}/guides/` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${siteConfig.url}/guides/`, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function GuidesIndexPage() {
  const items = guides.map(g => ({
    slug: g.slug,
    title: g.title,
    heroEyebrow: g.heroEyebrow,
    metaDescription: g.metaDescription,
  }));

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/guides/#collection`,
    name: 'Miami Local SEO Guides',
    description: DESCRIPTION,
    url: `${siteConfig.url}/guides/`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    inLanguage: 'en-US',
    hasPart: guides.map(g => ({
      '@type': 'Article',
      headline: g.title,
      url: `${siteConfig.url}/guides/${g.slug}/`,
      datePublished: g.publishDate,
      dateModified: g.updatedDate,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <GuidesIndexClient items={items} />
    </>
  );
}
