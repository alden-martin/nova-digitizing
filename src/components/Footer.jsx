import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <footer className="bg-primary/95 flex flex-col py-10 justify-center px-10">
      <div className="grid grid-cols-3 gap-x-10">
        {/* Image Part */}
        <div>
          <Image
            src="/logo-transparent.png"
            alt="Nova Digitizing"
            width={150}
            height={150}
          />
          <p className="text-white-background/50 text-sm">
            Premium embroidery digitizing and vector art services trusted by
            businesses worldwide.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-white-background/80 font-semibold text-base mb-5">
            Quick Links
          </h3>
          <ul className="text-white-background/70 flex flex-col gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-white-background/80 font-semibold text-base mb-5">
            Contact{" "}
          </h3>
          <ul className="text-white-background/70 flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2 text-sm">
              <Mail size={16} />
              <a href="mailto:novadigitizing1@gmail.com">
                novadigitizing1@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-x-2 text-sm">
              <Phone size={16} />
              <a href="tel:+19416667462">+1 941-666-7462</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className=" text-white-background/10 mt-10" />
      <p className="text-white-background/50 text-sm mt-5 text-center">
        © 2026 Nova Digitizing. All rights reserved.
      </p>
    </footer>
  );
}
