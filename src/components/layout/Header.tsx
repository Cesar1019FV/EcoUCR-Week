"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf, CalendarDays, Lightbulb, Download, Gamepad2 } from 'lucide-react';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '/schedule', label: 'Cronograma', icon: CalendarDays },
  { href: '/facts', label: 'Datos Curiosos', icon: Lightbulb },
  { href: '/tips', label: 'Consejos AI', icon: Leaf },
  { href: '/resources', label: 'Materiales', icon: Download },
  { href: '/game', label: 'Juego', icon: Gamepad2 },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLinks = ({isMobile}: {isMobile?: boolean}) => (
    <nav className={`flex ${isMobile ? 'flex-col space-y-4 p-4' : 'space-x-2 md:space-x-4 items-center'}`}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          asChild
          className={`text-sm font-medium hover:text-primary transition-colors ${isMobile ? 'w-full justify-start' : ''}`}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <Link href={item.href} className="flex items-center gap-2">
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  );

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Página de inicio de EcoUCR Week">
            <Logo className="h-8 w-auto" />
          </Link>
          <div className="h-6 w-24 bg-gray-200 animate-pulse rounded md:hidden"></div> {/* Placeholder for menu button */}
          <div className="hidden md:flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div> 
            ))}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Página de inicio de EcoUCR Week">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0 pt-6">
              <div className="flex justify-between items-center px-4 mb-4">
                 <Logo className="h-7" />
                 <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Cerrar menú">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
              </div>
              <NavLinks isMobile={true} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
