"use client";

import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/atoms/Logo"
import { Button } from "@/components/atoms/Button"
import { NavLinks } from "@/components/molecules/NavLinks"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="shadow-[0_1px_8px_rgb(0,0,0,0.12)] sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-4 md:gap-8">
          <NavLinks />
          <Link href="#live-form" className="hidden md:flex">
            <Button variant="buttonLogo">Live Form</Button>
          </Link>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4">
          <NavLinks 
            className="flex flex-col items-start gap-4" 
            onClick={() => setIsMenuOpen(false)} 
          />
          <Link href="#live-form" onClick={() => setIsMenuOpen(false)} className="w-full">
            <Button variant="buttonLogo" className="w-full justify-center">
              Live Form
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
