"use client";

import React from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { ArrowRight, Star, ArrowUpRight, Heart } from "lucide-react";

export default function Home() {
  const { products, toggleWishlist, wishlist } = useStore();

  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);

  const instagramPosts = [
    { id: 1, image: "/images/model_instagram_1.png" },
    { id: 2, image: "/images/model_instagram_2.png" },
    { id: 3, image: "/images/model_instagram_3.png" },
    { id: 4, image: "/images/model_instagram_4.png" },
    { id: 5, image: "/images/model_block_printed_kurta.png" },
    { id: 6, image: "/images/model_urdu_hoodie.png" }
  ];

  return (
    <div className="space-y-32 pb-32">
      
      {/* 1. Full-Screen Elegant Campaign Hero */}
      <section className="relative flex h-[calc(100vh-6rem)] w-full items-center justify-center overflow-hidden bg-genz-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_pakistani_models.png"
            alt="Shahroze Studio Hero Campaign"
            className="h-full w-full object-cover object-center brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-genz-black via-transparent to-transparent opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <div className="inline-block bg-genz-pink text-white font-mono px-4 py-1.5 text-xs font-bold uppercase mb-6 tracking-widest rounded-sm">
            DESI STREETWEAR. REFINED.
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-light text-white leading-none tracking-tight mb-8 uppercase">
            BREAK<br />
            <span className="font-serif italic text-genz-blue dark:text-genz-blue">TRADITION.</span>
          </h1>
          
          <p className="mx-auto max-w-xl font-sans text-sm tracking-wide text-genz-light/90 mb-10 p-4 bg-genz-black/55 backdrop-blur-md border border-white/10 rounded-sm">
            Rewriting the rules of Pakistani fashion. Reimagined traditional drapes, premium raw silks, and contemporary street silhouettes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-genz-pink hover:bg-genz-pink/90 text-white font-sans tracking-widest font-bold text-xs uppercase px-10 py-5 rounded-sm transition-colors duration-300"
            >
              SHOP THE DROP
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-sans tracking-widest font-bold text-xs uppercase px-10 py-5 rounded-sm transition-colors duration-300"
            >
              OUR GENESIS
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Marquee Slogan */}
      <section className="bg-genz-charcoal py-5 overflow-hidden border-y border-genz-border/20">
        <div className="animate-marquee-fast whitespace-nowrap flex text-2xl font-display font-light text-genz-light uppercase tracking-wider">
          <span className="mx-8 text-genz-blue">PAKISTANI DRIP</span> •
          <span className="mx-8 text-genz-pink">100% RESPONSIBLE CRAFT</span> •
          <span className="mx-8 text-white">RAW SILK. RAW ENERGY.</span> •
          <span className="mx-8 text-genz-blue">PAKISTANI DRIP</span> •
          <span className="mx-8 text-genz-pink">100% RESPONSIBLE CRAFT</span> •
          <span className="mx-8 text-white">RAW SILK. RAW ENERGY.</span> •
        </div>
      </section>

      {/* 3. New Arrivals (Refined Grid) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between border-b border-genz-border pb-6 mb-12">
          <div>
            <div className="bg-genz-acid text-genz-light font-mono text-[10px] tracking-wider font-bold px-3 py-1 inline-block mb-3 rounded-full border border-genz-border/20">
              NEW HEAT 🔥
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light uppercase text-black dark:text-white leading-tight">LATEST DROPS</h2>
          </div>
          <Link href="/shop" className="group mt-4 md:mt-0 inline-flex items-center bg-genz-black text-white font-sans text-xs tracking-wider font-bold px-6 py-3.5 border border-genz-border hover:bg-genz-pink transition-colors duration-300">
            VIEW ALL CATALOG <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div key={product.id} className="group relative flex flex-col bg-white brutalist-border p-2 dark:bg-[#141414]">
                <div className="relative aspect-[3/4] w-full border border-genz-border/20 overflow-hidden bg-gray-100">
                  <Link href={`/shop/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute left-3 top-3 bg-genz-pink text-white font-mono text-[9px] tracking-wider font-bold px-2 py-0.5 rounded z-10 shadow-sm">
                    NEW ARRIVAL
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-genz-border/20 hover:bg-white transition-colors z-10 shadow-sm"
                  >
                    <Heart className={`h-4.5 w-4.5 ${isWishlisted ? "fill-genz-pink text-genz-pink" : "text-black"}`} />
                  </button>

                  <div className="absolute bottom-0 left-0 w-full translate-y-full bg-genz-black/90 py-3 text-center transition-transform duration-300 group-hover:translate-y-0 z-20">
                    <Link href={`/shop/${product.id}`} className="font-sans text-xs font-bold tracking-widest uppercase text-white hover:text-genz-blue transition-colors">
                      DISCOVER FIT
                    </Link>
                  </div>
                </div>

                <div className="mt-4 px-2 pb-2">
                  <h3 className="font-display font-medium text-lg uppercase text-black dark:text-white leading-tight mb-2">
                    <Link href={`/shop/${product.id}`} className="hover:text-genz-pink transition-colors">{product.name}</Link>
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-genz-gray font-mono text-xs">{product.category}</span>
                    <span className="font-mono text-lg font-bold text-black dark:text-white">Rs. {product.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Elegant Editorial Callout */}
      <section className="bg-genz-pink py-20 border-y border-genz-border/10">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <div className="inline-block bg-genz-black text-genz-light mb-6 border border-genz-border/20 px-6 py-2 rounded-sm shadow-sm">
            <h3 className="font-display text-xl font-light tracking-widest uppercase">REDEFINING THE DESI SILHOUETTE</h3>
          </div>
          <p className="font-display text-2xl md:text-3xl italic font-light leading-relaxed max-w-3xl mx-auto text-genz-light">
            "We took the traditional Shalwar Kameez, merged it with relaxed contemporary street proportions, and styled it with fine hand-block embroidery. This is the new age of Desi Couture."
          </p>
        </div>
      </section>

      {/* 5. Instagram Gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-genz-pink font-mono text-sm tracking-widest font-bold inline-block mb-2 uppercase">
            #SHAHROZESTUDIO
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light uppercase mt-2 dark:text-white">CURATED LOOKS</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square bg-white brutalist-border p-1 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-full h-full border border-genz-border/10 overflow-hidden relative">
                <img
                  src={post.image}
                  alt="Instagram Look"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <ArrowUpRight className="h-8 w-8 text-white hover:text-genz-pink transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
