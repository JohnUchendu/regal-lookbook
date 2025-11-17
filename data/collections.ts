// data/collections.ts
export interface Collection {
  slug: string;
  title: string;
  description: string;
  mood: string;
  season?: string;
  featured?: boolean;
  images: string[];
}

export const collections: Collection[] = [
  {
    slug: 'urban-elegance',
    title: 'Urban Elegance',
    description: 'Sophisticated urban fashion collection blending modern aesthetics with timeless elegance.',
    mood: 'Sophisticated, Modern',
    season: 'Fall/Winter 2025',
    featured: true,
    images: [
      '/images/collections/urban-elegance/outfit-1.jpg',
      '/images/collections/urban-elegance/outfit-2.jpg',
      '/images/collections/urban-elegance/outfit-3.jpg',
      '/images/collections/urban-elegance/detail-stitching.jpg',
      '/images/collections/urban-elegance/detail-fabric.jpg',
      '/images/collections/urban-elegance/styling-1.jpg'
    ]
  },
  {
    slug: 'coastal-minimalism',
    title: 'Coastal Minimalism',
    description: 'Light and breezy coastal fashion inspired by serene beach landscapes.',
    mood: 'Relaxed, Airy',
    season: 'Spring/Summer 2025',
    featured: true,
    images: [
      '/images/collections/coastal-minimalism/beach-outfit-1.jpg',
      '/images/collections/coastal-minimalism/resort-wear.jpg',
      '/images/collections/coastal-minimalism/fabric-texture.jpg',
      '/images/collections/coastal-minimalism/evening-look.jpg'
    ]
  }
];
