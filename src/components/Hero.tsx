'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function Hero({ image, title, subtitle }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen w-full"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
        <h1 className="text-5xl font-serif text-center px-4">{title}</h1>
        <p className="text-xl mt-4 text-center px-4">{subtitle}</p>
      </div>
    </motion.div>
  );
}