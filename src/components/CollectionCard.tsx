'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Collection } from '@/data/collections';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }} 
      className="border rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="relative h-80">
        <Image 
          src={collection.images[0]} 
          alt={collection.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif mb-2">{collection.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{collection.mood}</p>
        {collection.season && (
          <p className="text-xs text-gray-500 mb-3">{collection.season}</p>
        )}
        <Link 
          href={`/collections/${collection.slug}`} 
          className="text-black hover:text-gray-700 font-medium transition-colors"
        >
          View Collection →
        </Link>
      </div>
    </motion.div>
  );
}