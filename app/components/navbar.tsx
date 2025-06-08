"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu as MenuIcon, Home, Info, ContactSupport } from "@mui/icons-material";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(logoRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, []);

  const logoText = "MyPortfolio";

  return (
    <div
      ref={navRef}
      className="bg-white shadow-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
        <MenuIcon />
        <span className="flex">
          {logoText.split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) logoRef.current[index] = el;
              }}
              className="inline-block"
            >
              {char}
            </span>
          ))}
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
          <Home fontSize="small" /> Home
        </Link>
        <Link href="/about" className="hover:text-blue-600 flex items-center gap-1">
          <Info fontSize="small" /> About
        </Link>
        <Link href="/contact" className="hover:text-blue-600 flex items-center gap-1">
          <ContactSupport fontSize="small" /> Contact
        </Link>
      </div>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        {/* Add mobile menu button / drawer here */}
      </div>
    </div>
  );
}
