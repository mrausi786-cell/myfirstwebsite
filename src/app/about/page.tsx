"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Shield, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="pb-20">
      
      {/* 1. Header Hero Banner */}
      <section className="relative h-[45vh] w-full bg-luxury-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200"
            alt="Shahroze Studio Design Process"
            className="h-full w-full object-cover object-center opacity-45 grayscale"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[10px] tracking-widest text-luxury-beige uppercase mb-3">OUR GENESIS</p>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">ABOUT SHAHROZE STUDIO</h1>
          <div className="mx-auto h-[1px] w-12 bg-white mt-4" />
        </div>
      </section>

      {/* 2. Main Narrative Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-luxury-black dark:text-white">
            "Timeless Style. Modern Confidence."
          </h2>
          <p className="font-sans text-xs tracking-widest text-luxury-gray uppercase dark:text-luxury-beige/70">
            THE MANIFESTO OF OUR BRAND
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-luxury-gray dark:text-luxury-beige/85">
          <p>
            Shahroze Studio was created with a passion for timeless fashion and premium quality. Our mission is to deliver modern and comfortable clothing that combines style with confidence. We reject transient micro-trends, focusing instead on structural integrity, carefully selected fabrics, and architectural draping.
          </p>
          <p>
            Operating out of Lahore, Pakistan, our garments draw heavy inspiration from minimalist luxury, organic earth tones, and the relaxed boxy silhouettes popularized by modern streetwear. Every item in our catalog is engineered to be a long-lasting staple in your wardrobe.
          </p>
        </div>
      </section>

      {/* 3. Aesthetic Visual Split (Zara style lookbook grid) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-[500px] overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
            <img
              src="https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?q=80&w=800"
              alt="Craftsmanship"
              className="h-full w-full object-cover object-center grayscale hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="h-[500px] overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800"
              alt="Raw Materials"
              className="h-full w-full object-cover object-center grayscale hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 4. Core Pillars */}
      <section className="bg-luxury-lightGray py-20 mt-20 dark:bg-luxury-charcoal/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-widest text-luxury-gray dark:text-luxury-beige/70">DESIGN PHILOSOPHY</p>
            <h2 className="font-display text-2xl font-bold tracking-widest mt-1">OUR THREE PILLARS</h2>
            <div className="mx-auto h-0.5 w-12 bg-luxury-black mt-3 dark:bg-white" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <div className="bg-white p-8 border border-luxury-border text-center space-y-4 dark:bg-luxury-charcoal dark:border-luxury-charcoal/60">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-luxury-lightGray text-luxury-black dark:bg-luxury-black dark:text-white">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase">1. INTENTIONAL DESIGN</h3>
              <p className="text-xs text-luxury-gray leading-relaxed dark:text-luxury-beige/75">
                Every line, seam position, and pocket placement is carefully designed. We build clothes that feel natural, accommodating movement while holding shape.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 border border-luxury-border text-center space-y-4 dark:bg-luxury-charcoal dark:border-luxury-charcoal/60">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-luxury-lightGray text-luxury-black dark:bg-luxury-black dark:text-white">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase">2. ORGANIC ORIGINS</h3>
              <p className="text-xs text-luxury-gray leading-relaxed dark:text-luxury-beige/75">
                We select dense, long-staple organic cottons, French terries, and premium fiber blends that soften with wear and withstand standard laundering.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 border border-luxury-border text-center space-y-4 dark:bg-luxury-charcoal dark:border-luxury-charcoal/60">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-luxury-lightGray text-luxury-black dark:bg-luxury-black dark:text-white">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase">3. TRANSPARENT MANUFACTURING</h3>
              <p className="text-xs text-luxury-gray leading-relaxed dark:text-luxury-beige/75">
                We maintain active partnerships with small, certified boutique mills in Europe and Asia to guarantee safe environments and fair compensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Collection Banner CTA */}
      <section className="mx-auto max-w-5xl px-4 mt-20 text-center space-y-6">
        <h2 className="font-serif text-xl sm:text-2xl font-light">
          Experience the drape. Discover the collection.
        </h2>
        <Link
          href="/shop"
          className="inline-flex items-center space-x-2 bg-luxury-black px-8 py-3.5 text-xs font-bold tracking-widest text-white hover:bg-luxury-beige-dark transition-colors dark:bg-white dark:text-luxury-black dark:hover:bg-luxury-beige"
        >
          <span>SHOP NOW</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </div>
  );
}
