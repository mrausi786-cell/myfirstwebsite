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
  SlidersHorizontal,
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
      <header className="sticky top-0 z-50 w-full border-b border-luxury-border/60 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-luxury-charcoal/60 dark:bg-luxury-black/80">
        {/* Top Announcement Bar */}
        <div className="bg-luxury-black py-2 text-center text-[10px] font-medium tracking-widest text-white transition-colors duration-300 dark:bg-luxury-beige-dark dark:text-luxury-black">
          FREE EXPRESS SHIPPING ACROSS PAKISTAN ON ORDERS OVER RS. 5,000
        </div>

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex items-center text-luxury-black hover:text-luxury-gray dark:text-white dark:hover:text-luxury-beige lg:hidden"
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display text-lg font-bold tracking-widest text-luxury-black transition-colors duration-300 dark:text-white sm:text-xl md:text-2xl">
              SHAHROZE STUDIO
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
                  className={`text-[11px] font-semibold tracking-widest transition-colors duration-300 hover:text-luxury-beige-dark ${
                    isActive 
                      ? "text-luxury-black dark:text-white border-b border-luxury-black dark:border-white pb-1" 
                      : "text-luxury-gray dark:text-luxury-beige/70"
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
                className={`hidden rounded-full p-2 text-xs font-semibold tracking-wider transition-colors sm:flex items-center space-x-1 ${
                  isAdminMode 
                    ? "bg-amber-100 text-amber-900 border border-amber-300" 
                    : "bg-luxury-lightGray text-luxury-black hover:bg-luxury-border dark:bg-luxury-charcoal dark:text-white"
                }`}
              >
                <ShieldCheck className="h-4 w-4" />
                <span>{isAdminMode ? "Admin Mode" : "View Admin"}</span>
              </button>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-luxury-black transition-colors hover:bg-luxury-lightGray dark:text-white dark:hover:bg-luxury-charcoal"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-full p-2 text-luxury-black transition-colors hover:bg-luxury-lightGray dark:text-white dark:hover:bg-luxury-charcoal"
              aria-label="Search Catalog"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Wishlist */}
            <Link
              href="/account?tab=wishlist"
              className="relative rounded-full p-2 text-luxury-black transition-colors hover:bg-luxury-lightGray dark:text-white dark:hover:bg-luxury-charcoal"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-luxury-black text-[9px] font-bold text-white dark:bg-white dark:text-luxury-black">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              href="/account"
              className="rounded-full p-2 text-luxury-black transition-colors hover:bg-luxury-lightGray dark:text-white dark:hover:bg-luxury-charcoal"
              aria-label="Customer Account"
            >
              <UserIcon className="h-4 w-4" />
            </Link>

            {/* Shopping Cart */}
            <Link
              href="/cart"
              className="relative rounded-full p-2 text-luxury-black transition-colors hover:bg-luxury-lightGray dark:text-white dark:hover:bg-luxury-charcoal"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-luxury-black text-[9px] font-bold text-white dark:bg-white dark:text-luxury-black">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Global Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 top-full w-full border-b border-luxury-border bg-white px-4 py-4 shadow-md transition-colors duration-300 dark:border-luxury-charcoal dark:bg-luxury-black">
            <div className="mx-auto max-w-3xl">
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-luxury-gray" />
                <input
                  type="text"
                  placeholder="SEARCH SHAHROZE STUDIO..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent py-2 font-display text-sm tracking-wider uppercase text-luxury-black outline-none placeholder:text-luxury-gray/70 dark:text-white"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-luxury-gray hover:text-luxury-black dark:hover:text-white"
                >
                  <X className="h-5 w-5" />
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative flex w-full max-w-xs flex-col bg-white py-6 shadow-xl transition-colors duration-300 dark:bg-luxury-black">
            <div className="flex items-center justify-between px-6 border-b border-luxury-border/60 pb-4 dark:border-luxury-charcoal/60">
              <span className="font-display text-sm font-bold tracking-widest text-luxury-black dark:text-white">
                MENU
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-luxury-black dark:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 flex flex-col space-y-6 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-[13px] font-bold tracking-widest text-luxury-black hover:text-luxury-beige-dark dark:text-white"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-luxury-gray" />
                </Link>
              ))}

              {/* Admin Bypass for Mobile */}
              {currentUser?.isAdmin && (
                <button
                  onClick={() => {
                    toggleAdminMode();
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 flex w-full items-center justify-between rounded border border-amber-200 bg-amber-50 px-4 py-2.5 text-left text-xs font-semibold text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300"
                >
                  <span>{isAdminMode ? "Disable Admin View" : "Enable Admin View"}</span>
                  <ShieldCheck className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Drawer Footer Info */}
            <div className="mt-auto px-6 border-t border-luxury-border/60 pt-6 dark:border-luxury-charcoal/60 text-[10px] tracking-wider text-luxury-gray dark:text-luxury-beige/60 space-y-1">
              <p>SHAHROZE STUDIO</p>
              <p>Timeless Style. Modern Confidence.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
