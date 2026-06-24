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
    <footer className="border-t border-genz-border bg-genz-acid text-genz-light dark:bg-genz-black dark:border-genz-border transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <span className="font-display text-3xl font-black tracking-widest text-genz-light dark:text-genz-blue">
              SHAHROZE
            </span>
            <p className="font-mono font-bold text-sm bg-genz-pink text-white inline-block px-2 py-1 transform -rotate-2">
              DESI STREETWEAR FUSION.
            </p>
            <p className="text-sm font-mono text-genz-light/80 dark:text-white/80 leading-relaxed max-w-sm">
              Refining the rules. Taking raw silk, block prints, and Pakistani craftsmanship into the contemporary era of designer streetwear.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-genz-pink/15 text-genz-light p-2 border border-genz-border/20 hover:bg-genz-pink hover:text-white transition-colors brutalist-shadow" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-genz-pink/15 text-genz-blue p-2 border border-genz-border/20 hover:bg-genz-pink hover:text-white transition-colors brutalist-shadow" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-genz-pink/15 text-white p-2 border border-genz-border/20 hover:bg-genz-pink hover:text-white transition-colors brutalist-shadow" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <span className="font-display text-xl font-black uppercase text-genz-light dark:text-genz-pink block mb-6 border-b border-genz-border/20 inline-block">
              COLLECTIONS
            </span>
            <ul className="space-y-4 font-mono font-bold text-sm text-genz-light/90 dark:text-white">
              <li>
                <Link href="/shop?category=Kurtas" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  Oversized Kurtas
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Shalwar Kameez" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  Shalwar Kameez
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Streetwear Fusion" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  Streetwear Fusion
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Dupattas" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  Dupattas
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Accessories" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <span className="font-display text-xl font-black uppercase text-genz-light dark:text-genz-pink block mb-6 border-b border-genz-border/20 inline-block">
              SUPPORT
            </span>
            <ul className="space-y-4 font-mono font-bold text-sm text-genz-light/90 dark:text-white">
              <li>
                <Link href="/faq" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-genz-pink dark:hover:text-genz-blue hover:underline transition-colors uppercase">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <span className="font-display text-xl font-black uppercase text-genz-light dark:text-genz-pink block mb-4 border-b border-genz-border/20 inline-block">
              JOIN THE CULT
            </span>
            <p className="font-mono font-bold text-xs text-genz-light/95 dark:text-white">
              Get early access to exclusive drops and pop-ups in Lahore and Karachi.
            </p>
            {subscribed ? (
              <p className="text-sm font-black bg-genz-pink text-white p-2 text-center animate-pulse border border-genz-border/20">
                YOU'RE ON THE LIST.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border border-genz-border bg-white/10 dark:bg-black/40">
                <input
                  type="email"
                  placeholder="DROP YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent p-3 font-mono font-bold text-sm tracking-wider uppercase text-genz-light outline-none placeholder:text-genz-light/45 dark:text-white"
                  required
                />
                <button type="submit" className="bg-genz-pink px-4 text-white hover:bg-genz-pink/80 transition-colors" aria-label="Subscribe">
                  <ArrowRight className="h-6 w-6" />
                </button>
              </form>
            )}
            
            {/* Contact Details */}
            <div className="pt-6 font-mono font-bold text-sm text-genz-light/90 dark:text-white space-y-3">
              <div className="flex items-center space-x-3 bg-white/5 border border-genz-border/20 p-2 dark:bg-black/20 w-fit brutalist-shadow">
                <Phone className="h-4 w-4 text-genz-pink" />
                <a href="tel:0414863411" className="hover:text-genz-pink">0414 863 411</a>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 border border-genz-border/20 p-2 dark:bg-black/20 w-fit brutalist-shadow">
                <Mail className="h-4 w-4 text-genz-blue" />
                <a href="mailto:mr.ausi786@gmail.com" className="hover:text-genz-blue">mr.ausi786@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="mt-16 border-t border-genz-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between font-mono font-bold text-xs text-genz-light/80 dark:text-genz-blue">
          <p>© {new Date().getFullYear()} SHAHROZE STUDIO.</p>
          <div className="mt-4 sm:mt-0 bg-genz-pink text-white px-3 py-1 border border-genz-border/20">
            <span>LAHORE, PAKISTAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
