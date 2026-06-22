"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="border-t border-luxury-border bg-luxury-lightGray transition-colors duration-300 dark:border-luxury-charcoal dark:bg-luxury-charcoal/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="font-display text-lg font-bold tracking-widest text-luxury-black dark:text-white">
              SHAHROZE STUDIO
            </span>
            <p className="font-serif italic text-xs text-luxury-gray dark:text-luxury-beige/70">
              "Timeless Style. Modern Confidence."
            </p>
            <p className="text-xs text-luxury-gray dark:text-luxury-beige/60 leading-relaxed max-w-sm">
              We design and construct garments with a strict emphasis on raw materials, tailored fits, and elegant simplicity. Inspired by high-end design principles.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-luxury-gray hover:text-luxury-black dark:hover:text-white" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-luxury-gray hover:text-luxury-black dark:hover:text-white" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-luxury-gray hover:text-luxury-black dark:hover:text-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <span className="font-display text-[10px] font-bold tracking-widest text-luxury-black dark:text-white block mb-4">
              COLLECTIONS
            </span>
            <ul className="space-y-2 text-xs text-luxury-gray dark:text-luxury-beige/70">
              <li>
                <Link href="/shop?category=Men's Wear" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Men's Wear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Women's Wear" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Women's Wear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Hoodies" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Hoodies & Sweats
                </Link>
              </li>
              <li>
                <Link href="/shop?category=T-Shirts" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Minimalist Tees
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Jackets" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Outwear & Jackets
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <span className="font-display text-[10px] font-bold tracking-widest text-luxury-black dark:text-white block mb-4">
              SUPPORT & POLICIES
            </span>
            <ul className="space-y-2 text-xs text-luxury-gray dark:text-luxury-beige/70">
              <li>
                <Link href="/faq" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-luxury-black dark:hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <span className="font-display text-[10px] font-bold tracking-widest text-luxury-black dark:text-white block mb-2">
              NEWSLETTER
            </span>
            <p className="text-xs text-luxury-gray dark:text-luxury-beige/60">
              Subscribe to receive private collection drops, editorial lookbooks, and exclusive offers.
            </p>
            {subscribed ? (
              <p className="text-xs font-semibold text-luxury-black dark:text-white animate-pulse">
                THANK YOU FOR SUBSCRIBING.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-luxury-black/40 py-1 dark:border-white/40">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs tracking-wider uppercase text-luxury-black outline-none placeholder:text-luxury-gray/50 dark:text-white"
                  required
                />
                <button type="submit" className="text-luxury-black hover:text-luxury-beige-dark dark:text-white" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            
            {/* Contact Details */}
            <div className="pt-4 text-xs text-luxury-gray dark:text-luxury-beige/60 space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <a href="tel:0414863411" className="hover:text-luxury-black dark:hover:text-white">0414 863 411</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <a href="mailto:mr.ausi786@gmail.com" className="hover:text-luxury-black dark:hover:text-white">mr.ausi786@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-luxury-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-widest text-luxury-gray/80 dark:border-luxury-charcoal/60 dark:text-luxury-beige/50">
          <p>© {new Date().getFullYear()} SHAHROZE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="mt-2 sm:mt-0 flex space-x-4">
            <span>LAHORE, PAKISTAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
