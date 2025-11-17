// app/collections/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { collections } from '@/data/collections';
import Gallery from '@/components/Gallery';

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  
  if (!collection) {
    return {
      title: 'Collection Not Found',
    };
  }

  return {
    title: collection.title,
    description: collection.description,
    openGraph: {
      title: collection.title,
      description: collection.description,
      images: collection.images.slice(0, 1),
    },
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return notFound();

  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-serif mb-4">{collection.title}</h1>
      <p className="mb-8">{collection.description}</p>
      <p className="mb-4">Mood: {collection.mood}</p>
      <Gallery images={collection.images} />
    </section>
  );
}

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}