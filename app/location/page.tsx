import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import LocationIndexClient from './ClientPage';

const title = 'Local SEO by Miami Neighborhood';
const description =
  'Local SEO matching across ten Miami sub-markets: Brickell, Downtown, Wynwood, South Beach, Coconut Grove, Coral Gables, Little Havana, Doral, Aventura, Pinecrest.';
const canonical = `${siteConfig.url}/location/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <LocationIndexClient />;
}
