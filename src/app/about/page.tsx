"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Shield, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="pb-20">
      
      {/* 1. Header Hero Banner */}
      <section className="relative h-[45vh] w-full bg-genz-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_pakistani_models.png"
            alt="Shahroze Studio Design Process"
            className="h-full w-full object-cover object-center opacity-45 brightness-[0.7] grayscale"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[10px] tracking-widest text-genz-blue uppercase mb-3">OUR GENESIS</p>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-wide uppercase">ABOUT SHAHROZE STUDIO</h1>
          <div className="mx-auto h-[1px] w-12 bg-genz-pink mt-4" />
        </div>
      </section>

      {/* 2. Main Narrative Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-light text-genz-black dark:text-white uppercase">
            "Timeless Style. Modern Confidence."
          </h2>
          <p className="font-sans text-xs tracking-widest text-genz-gray uppercase dark:text-genz-blue/70">
            THE MANIFESTO OF OUR BRAND
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-genz-gray dark:text-genz-light/85">
          <p>
            Shahroze Studio was created with a passion for timeless fashion and premium quality. Our mission is to deliver modern and comfortable clothing that combines style with confidence. We reject transient micro-trends, focusing instead on structural integrity, carefully selected fabrics, and architectural drapes.
          </p>
          <p>
            Operating out of Lahore, Pakistan, our garments draw heavy inspiration from minimalist luxury, raw organic cottons, and the relaxed boxy silhouettes popularized by modern streetwear. Every item in our catalog is engineered to be a long-lasting staple in your wardrobe.
          </p>
        </div>
      </section>

      {/* 3. Aesthetic Visual Split (Zara style lookbook grid) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-[500px] overflow-hidden bg-genz-light dark:bg-genz-charcoal border border-genz-border/20">
            <img
              src="/images/model_instagram_1.png"
              alt="Craftsmanship"
              className="h-full w-full object-cover object-center grayscale hover:scale-102 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="h-[500px] overflow-hidden bg-genz-light dark:bg-genz-charcoal border border-genz-border/20">
            <img
              src="/images/model_instagram_3.png"
              alt="Raw Materials"
              className="h-full w-full object-cover object-center grayscale hover:scale-102 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 4. Core Pillars */}
      <section className="bg-white py-20 mt-20 dark:bg-genz-charcoal/20 border-y border-genz-border/35">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-widest text-genz-gray dark:text-genz-blue/70">DESIGN PHILOSOPHY</p>
            <h2 className="font-display text-2xl font-light tracking-widest mt-1 uppercase">OUR THREE PILLARS</h2>
            <div className="mx-auto h-[1px] w-12 bg-genz-pink mt-3" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <div className="bg-genz-light p-8 border border-genz-border text-center space-y-4 dark:bg-genz-charcoal dark:border-genz-border/30 rounded-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-genz-pink/15 text-genz-pink dark:bg-genz-black dark:text-white">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase">1. INTENTIONAL DESIGN</h3>
              <p className="text-xs text-genz-gray leading-relaxed dark:text-genz-light/75">
                Every line, seam position, and pocket placement is carefully designed. We build clothes that feel natural, accommodating movement while holding shape.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-genz-light p-8 border border-genz-border text-center space-y-4 dark:bg-genz-charcoal dark:border-genz-border/30 rounded-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-genz-pink/15 text-genz-pink dark:bg-genz-black dark:text-white">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase">2. ORGANIC ORIGINS</h3>
              <p className="text-xs text-genz-gray leading-relaxed dark:text-genz-light/75">
                We select dense, long-staple organic cottons, hand-loom silks, and premium fiber blends that soften with wear and withstand standard laundering.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-genz-light p-8 border border-genz-border text-center space-y-4 dark:bg-genz-charcoal dark:border-genz-border/30 rounded-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-genz-pink/15 text-genz-pink dark:bg-genz-black dark:text-white">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xs font-bold tracking-widest uppercase">3. LOCAL CRAFTSMANSHIP</h3>
              <p className="text-xs text-genz-gray leading-relaxed dark:text-genz-light/75">
                We maintain active partnerships with local block-printers and silk craftsmen in Punjab and Sindh to preserve traditional arts while giving back to local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Collection Banner CTA */}
      <section className="mx-auto max-w-5xl px-4 mt-20 text-center space-y-6">
        <h2 className="font-display text-2xl font-light">
          Experience the drape. Discover the collection.
        </h2>
        <Link
          href="/shop"
          className="inline-flex items-center space-x-2 bg-genz-black px-8 py-3.5 text-xs font-bold tracking-widest text-white hover:bg-genz-pink transition-colors dark:bg-white dark:text-genz-black dark:hover:bg-genz-pink"
        >
          <span>SHOP NOW</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </div>
  );
}
