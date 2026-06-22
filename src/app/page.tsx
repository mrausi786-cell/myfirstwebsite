"use client";

import React from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { ArrowRight, Star, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  const { products, toggleWishlist, wishlist } = useStore();

  // Filter products for homepage sections
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);

  const testimonials = [
    {
      id: 1,
      quote: "The quality of the loopback terry is exceptional. It fits boxy, heavy, and retains its shape after multiple washes. A true wardrobe staple.",
      author: "Adrian G.",
      location: "Karachi"
    },
    {
      id: 2,
      quote: "Shahroze Studio hits the perfect sweet spot between high-end loungewear and structural tailoring. The oatmeal tracksuit is perfect.",
      author: "Sarah L.",
      location: "Lahore"
    }
  ];

  const instagramPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600" },
    { id: 2, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600" },
    { id: 3, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600" },
    { id: 4, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600" },
    { id: 5, image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=600" },
    { id: 6, image: "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?q=80&w=600" }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Full-Screen Hero Banner */}
      <section className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-luxury-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600"
            alt="Shahroze Studio Collection"
            className="h-full w-full object-cover object-center opacity-65 grayscale transition-transform duration-10000 hover:scale-105"
          />
          {/* Black overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/35 to-luxury-black/25" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <p className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-luxury-beige-light">
            SHAHROZE STUDIO // EDITORIAL EDITION
          </p>
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-6xl md:text-7xl mb-6">
            Timeless Style.<br />Modern Confidence.
          </h1>
          <p className="mx-auto max-w-lg font-sans text-xs tracking-wider uppercase text-luxury-border mb-8 leading-relaxed">
            Constructed with meticulous precision. Designed for the modern silhouette.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-white px-8 py-3.5 text-xs font-bold tracking-widest text-luxury-black transition-all hover:bg-luxury-beige-light hover:tracking-[0.2em] text-center"
            >
              SHOP NEW ARRIVALS
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto border border-white px-8 py-3.5 text-xs font-bold tracking-widest text-white transition-all hover:bg-white/10 text-center"
            >
              OUR STORY
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[9px] tracking-widest text-white/60 animate-bounce">
          SCROLL DOWN
        </div>
      </section>

      {/* 2. Core Slogan Callout */}
      <section className="mx-auto max-w-5xl px-4 text-center">
        <span className="font-serif italic text-luxury-beige-dark text-lg sm:text-2xl md:text-3xl max-w-3xl mx-auto block leading-relaxed dark:text-luxury-beige">
          "Shahroze Studio was created with a passion for timeless fashion and premium quality. Our mission is to deliver modern and comfortable clothing that combines style with confidence."
        </span>
      </section>

      {/* 3. Featured Collections Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Box 1 */}
          <div className="group relative h-[450px] overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
            <img
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800"
              alt="Premium Hoodies"
              className="h-full w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] tracking-widest text-luxury-beige">COLLECTION</p>
              <h3 className="font-display text-lg font-bold tracking-wider mt-1">ORGANIC HOODIES</h3>
              <Link href="/shop?category=Hoodies" className="inline-flex items-center text-[10px] tracking-widest mt-2 hover:underline">
                EXPLORE NOW <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>

          {/* Box 2 */}
          <div className="group relative h-[450px] overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800"
              alt="Minimalist T-Shirts"
              className="h-full w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] tracking-widest text-luxury-beige">COLLECTION</p>
              <h3 className="font-display text-lg font-bold tracking-wider mt-1">MINIMAL TEES</h3>
              <Link href="/shop?category=T-Shirts" className="inline-flex items-center text-[10px] tracking-widest mt-2 hover:underline">
                EXPLORE NOW <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>

          {/* Box 3 */}
          <div className="group relative h-[450px] overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800"
              alt="Tailored Jackets"
              className="h-full w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] tracking-widest text-luxury-beige">COLLECTION</p>
              <h3 className="font-display text-lg font-bold tracking-wider mt-1">STUDIO JACKETS</h3>
              <Link href="/shop?category=Jackets" className="inline-flex items-center text-[10px] tracking-widest mt-2 hover:underline">
                EXPLORE NOW <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. New Arrivals Carousel Slider */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-luxury-border pb-4 mb-8 dark:border-luxury-charcoal">
          <div>
            <p className="text-[10px] tracking-widest text-luxury-gray dark:text-luxury-beige/70">RECENT RELEASES</p>
            <h2 className="font-display text-xl font-bold tracking-widest mt-1">NEW ARRIVALS</h2>
          </div>
          <Link href="/shop" className="group inline-flex items-center text-xs font-bold tracking-widest hover:text-luxury-beige-dark">
            VIEW ALL CATALOG <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {newArrivals.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div key={product.id} className="group relative flex flex-col">
                {/* Image card wrapper */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
                  <Link href={`/shop/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* Badge */}
                  <span className="absolute left-3 top-3 bg-luxury-black text-[9px] font-bold text-white px-2 py-1 tracking-widest uppercase dark:bg-white dark:text-luxury-black">
                    NEW
                  </span>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-luxury-black shadow-sm transition-transform hover:scale-105 active:scale-95"
                    aria-label="Add to Wishlist"
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-luxury-black"}`} />
                  </button>

                  {/* Quick-add overlay bar */}
                  <div className="absolute bottom-0 left-0 w-full translate-y-full bg-luxury-black/90 py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                    <Link href={`/shop/${product.id}`} className="text-[10px] font-bold tracking-widest text-white hover:text-luxury-beige">
                      SELECT OPTIONS
                    </Link>
                  </div>
                </div>

                {/* Meta details */}
                <div className="mt-3 flex justify-between items-start text-xs">
                  <div className="space-y-1">
                    <h3 className="font-semibold tracking-wider text-luxury-black dark:text-white group-hover:underline">
                      <Link href={`/shop/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-luxury-gray text-[11px] dark:text-luxury-beige/60">{product.category}</p>
                  </div>
                  <span className="font-bold text-luxury-black dark:text-white">Rs. {product.price.toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Best Sellers Grid Section */}
      <section className="bg-luxury-lightGray py-20 dark:bg-luxury-charcoal/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-widest text-luxury-gray dark:text-luxury-beige/70">STUDIO CLASSICS</p>
            <h2 className="font-display text-2xl font-bold tracking-widest mt-1">BEST SELLERS</h2>
            <div className="mx-auto h-0.5 w-12 bg-luxury-black mt-3 dark:bg-white" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {bestSellers.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div key={product.id} className="group relative flex flex-col bg-white p-3 dark:bg-luxury-charcoal/50">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
                    <Link href={`/shop/${product.id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-luxury-black shadow-sm transition-transform hover:scale-105 active:scale-95"
                      aria-label="Add to Wishlist"
                    >
                      <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-luxury-black"}`} />
                    </button>
                  </div>

                  <div className="mt-3 flex justify-between items-start text-xs">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-wider text-luxury-black dark:text-white">
                        <Link href={`/shop/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="text-luxury-gray text-[11px] dark:text-luxury-beige/60">{product.category}</p>
                    </div>
                    <span className="font-bold text-luxury-black dark:text-white">Rs. {product.price.toLocaleString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Brand Testimonials Carousel */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="border-t border-b border-luxury-border py-12 dark:border-luxury-charcoal text-center">
          <div className="flex justify-center space-x-1 text-luxury-beige-dark mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current text-luxury-black dark:text-white" />)}
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-luxury-black dark:text-white leading-relaxed max-w-2xl mx-auto">
            "The fit and fabric quality are unmatched. It feels extremely premium and minimal—reminiscent of high-end garments from Paris fashion houses."
          </p>
          <span className="block mt-4 text-[10px] tracking-widest text-luxury-gray uppercase dark:text-luxury-beige/70">
            AHMED K. • LAHORE, PK
          </span>
        </div>
      </section>

      {/* 7. Instagram Gallery Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-[10px] tracking-widest text-luxury-gray dark:text-luxury-beige/70">#SHAHROZESTUDIO</p>
          <h2 className="font-display text-xl font-bold tracking-widest mt-1">SHARE YOUR LOOKS</h2>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
              <img
                src={post.image}
                alt="Instagram Look"
                className="h-full w-full object-cover object-center grayscale transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
