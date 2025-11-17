// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-6 mt-auto"> {/* mt-auto to push to bottom if needed */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand/ Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Link href="/" className="text-xl font-serif text-accent">
            Regal Accoutre
          </Link>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
        
        {/* Quick Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/" className="text-sm hover:text-accent">
            Home
          </Link>
          <Link href="/collections" className="text-sm hover:text-accent">
            Collections
          </Link>
          <Link href="/contact" className="text-sm hover:text-accent">
            Contact
          </Link>
        </div>
        
        {/* Social Links */}
        <div className="flex space-x-4">
          <Button asChild variant="ghost" size="icon">
            <a href="https://x.com/regalaccoutre" target="_blank" rel="noopener noreferrer">
              X {/* Use icon if added, e.g., <TwitterIcon /> */}
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://instagram.com/regalaccoutre" target="_blank" rel="noopener noreferrer">
              Instagram {/* Use icon if added */}
            </a>
          </Button>
          {/* Add more socials as needed */}
        </div>
      </div>
    </footer>
  );
}