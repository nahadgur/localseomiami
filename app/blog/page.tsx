import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import BlogIndexClient from './ClientPage';

const title = 'Local SEO Blog: Miami Edition';
const description =
  'Practical local SEO guidance for Miami SMBs: Google Business Profile, citations, reviews, neighborhood ranking, and how to evaluate a Miami SEO agency.';
const canonical = `${siteConfig.url}/blog/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <BlogIndexClient />;
}
