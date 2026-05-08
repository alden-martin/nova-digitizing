"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import QuoteButton from "./QuoteButton";

function Navbar() {
  const [open, setOpen] = useState(false);

  const pages = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "Order Now", href: "/order" },
  ];

  return (
    <nav className="fixed w-full top-10 bg-white shadow-sm z-50">
      <div className="flex justify-between items-center px-6 lg:px-10 py-4">
        {/* Logo */}
        <Image
          src="/logo-transparent.png"
          width={140}
          height={140}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                href={page.href}
                className="text-sm font-medium text-primary/80 hover:text-secondary transition"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <QuoteButton />
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-white shadow-md">
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                href={page.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-primary hover:text-secondary transition"
              >
                {page.name}
              </Link>
            </li>
          ))}

          {/* Mobile CTA */}
          <button className="bg-cta text-white px-6 py-3 rounded-lg mt-4">
            Get a Quote
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
