import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { caseStudies, caseStudyBySlug } from '@/data/caseStudies';
import { breadcrumbListSchema, personSchema } from '@/lib/schema';
import { owner } from '@/data/site';
import CaseStudyClient from './CaseStudyClient';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudyBySlug(params.slug);
  if (!c) return {};
  const title = `${c.name} local SEO case study | Local Miami SEO`;
  const url = `${siteConfig.url}/case-studies/${c.slug}/`;
  return {
    title,
    description: c.summary,
    alternates: { canonical: url },
    openGraph: { title, description: c.summary, url, type: 'article', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title, description: c.summary },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudyBySlug(params.slug);
  if (!study) notFound();

  const url = `${siteConfig.url}/case-studies/${study.slug}/`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': `${url}#case-study`,
      name: `${study.name} local SEO case study`,
      headline: study.summary,
      about: study.vertical,
      locationCreated: study.location,
      url,
      inLanguage: 'en-US',
      author: { '@id': `${siteConfig.url}/#owner` },
      publisher: { '@id': `${siteConfig.url}/#organization` },
    },
    personSchema({ name: owner.name, jobTitle: owner.jobTitle, description: owner.bio }),
    breadcrumbListSchema([
      { name: 'Home', path: '/' },
      { name: 'Case studies', path: '/case-studies/' },
      { name: study.name, path: `/case-studies/${study.slug}/` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CaseStudyClient study={study} />
    </>
  );
}
