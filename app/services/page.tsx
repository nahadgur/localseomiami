import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ServicesIndexClient from './ClientPage';

const title = 'Local SEO Services for Miami Businesses';
const description =
  'Seven local SEO service pillars for Miami SMBs: Google Business Profile, citations, reviews, on-page, links, Map Pack, and content. Vetted specialist matching.';
const canonical = `${siteConfig.url}/services/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <ServicesIndexClient />;
}
