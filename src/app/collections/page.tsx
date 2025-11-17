import CollectionCard from '@/components/CollectionCard';
import { collections } from '@/data/collections';

export const metadata = {
  title: 'All Collections',
  description: 'Browse our seasons, capsules, and editorials',
};

export default function Collections() {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((col) => (
          <CollectionCard key={col.slug} collection={col} />
        ))}
      </div>
    </section>
  );
}