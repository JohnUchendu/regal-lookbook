import Hero from '@/components/Hero';
import CollectionCard from '@/components/CollectionCard';
import { collections } from '@/data/collections';

export const metadata = {
  title: 'Lookbook Home',
  description: 'Explore our premium collections',
};

export default function Home() {
  const featuredCollections = collections.filter(col => col.featured);

  return (
    <>
      <Hero 
        image="/images/hero.jpg" // Local image path
        title="Your Brand Lookbook" 
        subtitle="Elevating Fashion Through Storytelling" 
      />
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-serif mb-8 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCollections.map((col) => (
            <CollectionCard key={col.slug} collection={col} />
          ))}
        </div>
      </section>
    </>
  );
}