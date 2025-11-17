// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif">
          Regal Accoutre
        </Link>
        
        {/* Desktop links */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-lg hover:text-gray-700">
            Home
          </Link>
          <Link href="/collections" className="text-lg hover:text-gray-700">
            Collections
          </Link>
          <Link href="/contact" className="text-lg hover:text-gray-700">
            Contact
          </Link>
        </div>
        
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg hover:text-gray-700">
                  Home
                </Link>
                <Link href="/collections" className="text-lg hover:text-gray-700">
                  Collections
                </Link>
                <Link href="/contact" className="text-lg hover:text-gray-700">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}