"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { useTheme } from "@/components/ThemeProvider";
import { 
  ShoppingBag, 
  Heart, 
  User as UserIcon, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { cart, wishlist, currentUser, isAdminMode, toggleAdminMode } = useStore();
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { label: "SHOP", href: "/shop" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "BLOG", href: "/blog" }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full brutalist-border bg-white transition-colors duration-300 dark:bg-genz-black">
        {/* Top Marquee Banner */}
        <div className="bg-genz-acid border-b border-genz-border/30 py-2 overflow-hidden flex">
          <div className="animate-marquee whitespace-nowrap flex text-[11px] font-bold tracking-widest text-genz-light uppercase">
            <span className="mx-4">✨ DROP 01: DESI GENZ FUSION ✨</span>
            <span className="mx-4">FREE SHIPPING NATIONWIDE</span>
            <span className="mx-4">🔥 NEW ARRIVALS 🔥</span>
            <span className="mx-4">✨ DROP 01: DESI GENZ FUSION ✨</span>
            <span className="mx-4">FREE SHIPPING NATIONWIDE</span>
            <span className="mx-4">🔥 NEW ARRIVALS 🔥</span>
            <span className="mx-4">✨ DROP 01: DESI GENZ FUSION ✨</span>
            <span className="mx-4">FREE SHIPPING NATIONWIDE</span>
            <span className="mx-4">🔥 NEW ARRIVALS 🔥</span>
            <span className="mx-4">✨ DROP 01: DESI GENZ FUSION ✨</span>
            <span className="mx-4">FREE SHIPPING NATIONWIDE</span>
            <span className="mx-4">🔥 NEW ARRIVALS 🔥</span>
          </div>
        </div>

        <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex items-center text-black hover:text-genz-pink dark:text-white dark:hover:text-genz-blue lg:hidden"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display text-xl font-black tracking-widest text-black transition-colors duration-300 dark:text-white sm:text-2xl md:text-3xl hover:text-genz-pink dark:hover:text-genz-blue">
              SHAHROZE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[12px] font-bold tracking-widest transition-colors duration-300 hover:text-genz-pink dark:hover:text-genz-blue ${
                    isActive 
                      ? "text-black dark:text-white border-b-2 border-genz-pink pb-1" 
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Utilities */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Admin Bypass for Demo */}
            {currentUser?.isAdmin && (
              <button
                onClick={toggleAdminMode}
                title={isAdminMode ? "Switch to Customer View" : "Switch to Admin View"}
                className={`hidden rounded-none p-2 text-xs font-bold tracking-wider transition-colors sm:flex items-center space-x-1 border border-genz-border ${
                  isAdminMode 
                    ? "bg-genz-acid text-genz-light" 
                    : "bg-white text-black hover:bg-black hover:text-white dark:bg-[#141414] dark:text-white dark:border-[#2A2A2A]"
                }`}
              >
                <ShieldCheck className="h-4 w-4" />
                <span>{isAdminMode ? "ADMIN" : "VIEW ADMIN"}</span>
              </button>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-none border border-transparent p-2 text-black transition-colors hover:bg-genz-pink/15 hover:border-genz-pink dark:text-white dark:hover:bg-genz-pink/20 dark:hover:border-genz-pink"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-none border border-transparent p-2 text-black transition-colors hover:bg-genz-pink/15 hover:border-genz-pink dark:text-white dark:hover:bg-genz-pink/20 dark:hover:border-genz-pink"
              aria-label="Search Catalog"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/account?tab=wishlist"
              className="relative rounded-none border border-transparent p-2 text-black transition-colors hover:bg-genz-pink/15 hover:border-genz-pink dark:text-white dark:hover:bg-genz-pink/20 dark:hover:border-genz-pink"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-none border border-black bg-genz-pink text-[10px] font-bold text-white dark:border-[#2A2A2A] dark:bg-genz-blue dark:text-black">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              href="/account"
              className="rounded-none border border-transparent p-2 text-black transition-colors hover:bg-genz-pink/15 hover:border-genz-pink dark:text-white dark:hover:bg-genz-pink/20 dark:hover:border-genz-pink"
              aria-label="Customer Account"
            >
              <UserIcon className="h-5 w-5" />
            </Link>

            {/* Shopping Cart */}
            <Link
              href="/cart"
              className="relative rounded-none border border-transparent p-2 text-black transition-colors hover:bg-genz-pink/15 hover:border-genz-pink dark:text-white dark:hover:bg-genz-pink/20 dark:hover:border-genz-pink"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-none border border-black bg-genz-blue text-[10px] font-bold text-black dark:border-[#2A2A2A]">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Global Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 top-full w-full border-b border-genz-border bg-genz-light px-4 py-6 shadow-xl transition-colors duration-300 dark:border-genz-border dark:bg-genz-charcoal">
            <div className="mx-auto max-w-3xl">
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-4">
                <Search className="h-6 w-6 text-black dark:text-genz-blue" />
                <input
                  type="text"
                  placeholder="SEARCH..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent py-2 font-display text-2xl font-black tracking-wider uppercase text-black outline-none placeholder:text-black/50 dark:text-white dark:placeholder:text-genz-blue/50"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-black hover:text-genz-pink dark:text-genz-blue dark:hover:text-genz-pink"
                >
                  <X className="h-8 w-8" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-genz-pink/20 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative flex w-full max-w-xs flex-col border-r border-genz-border bg-genz-light py-6 shadow-xl transition-colors duration-300 dark:border-genz-border dark:bg-genz-black">
            <div className="flex items-center justify-between px-6 border-b border-genz-border pb-4 dark:border-genz-border">
              <span className="font-display text-lg font-black tracking-widest text-black dark:text-genz-blue">
                MENU
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black dark:text-white hover:text-genz-pink"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 flex flex-col space-y-6 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-[16px] font-black tracking-widest text-black hover:text-genz-pink dark:text-white dark:hover:text-genz-blue"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              ))}

              {/* Admin Bypass for Mobile */}
              {currentUser?.isAdmin && (
                <button
                  onClick={() => {
                    toggleAdminMode();
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 flex w-full items-center justify-between border border-genz-border bg-genz-acid px-4 py-3 text-left text-sm font-bold text-genz-light"
                >
                  <span>{isAdminMode ? "DISABLE ADMIN" : "ENABLE ADMIN"}</span>
                  <ShieldCheck className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Drawer Footer Info */}
            <div className="mt-auto px-6 border-t border-genz-border pt-6 dark:border-genz-border text-xs font-bold tracking-wider text-black dark:text-genz-blue space-y-2">
              <p className="font-display text-xl">SHAHROZE</p>
              <p>DESI GENZ FUSION.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
