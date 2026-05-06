import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import HomeClient from './ClientPage';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Get Matched with a Vetted Local SEO Specialist`,
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    title: `${siteConfig.name} | Get Matched with a Vetted Local SEO Specialist`,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    type: 'website',
  },
};

export default function Page() {
  return <HomeClient />;
}
