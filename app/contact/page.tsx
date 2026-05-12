import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ContactPageClient from './ClientPage';

const title = 'Contact';
const description =
  'How to reach Local Miami SEO. Free matching with vetted local SEO specialists across Brickell, Wynwood, South Beach, Coral Gables, and the wider Miami metro.';
const canonical = `${siteConfig.url}/contact/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <ContactPageClient />;
}
