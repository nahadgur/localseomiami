// lib/schema.ts
// Shared JSON-LD builders for hubs and spokes. The editorial author is the
// brand acronym "LMS" (Local Miami SEO), an editorial Organization entity, not
// an invented person. Pages reference it by @id.
import { siteConfig } from '@/data/site';

const ORG_ID = `${siteConfig.url}/#organization`;
export const AUTHOR_ID = `${siteConfig.url}/#editorial`;

export function editorialAuthorJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': AUTHOR_ID,
    name: 'LMS',
    alternateName: `${siteConfig.name} editorial team`,
    url: siteConfig.url,
    parentOrganization: { '@id': ORG_ID },
    description:
      'Editorial team for Local Miami SEO. Guidance is checked against Google Business Profile Help, Google Search documentation, and the FTC rules on reviews. We are a matching service, not an SEO agency.',
  };
}

interface ArticleOpts {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export function buildArticleSchema(opts: ArticleOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@id': AUTHOR_ID },
    reviewedBy: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: opts.url,
    inLanguage: 'en-US',
  };
}

// Named operator (Vim) for the about + case-study pages. A real person, used
// for E-E-A-T alongside the editorial Organization.
const PERSON_ID = `${siteConfig.url}/#owner`;

export function personSchema(opts: { name: string; jobTitle: string; description?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: opts.name,
    jobTitle: opts.jobTitle,
    ...(opts.description ? { description: opts.description } : {}),
    worksFor: { '@id': ORG_ID },
    url: `${siteConfig.url}/about/`,
  };
}

export function breadcrumbListSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${siteConfig.url}${c.path}`,
    })),
  };
}

export function buildFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/<[^>]+>/g, '') },
    })),
  };
}
