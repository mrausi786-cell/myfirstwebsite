"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { SlidersHorizontal, ArrowUpDown, Search, Heart, X } from "lucide-react";

function ShopContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { products, categories, wishlist, toggleWishlist } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(15000);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  useEffect(() => {
    const categoryQuery = searchParams.get("category");
    const searchQueryParam = searchParams.get("search");
    if (categoryQuery) setSelectedCategory(categoryQuery);
    if (searchQueryParam) setSearchQuery(searchQueryParam);
  }, [searchParams]);

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedGender("");
    setPriceRange(15000);
    setSearchQuery("");
    setSortBy("featured");
    router.push("/shop");
  };

  const filteredProducts = products
    .filter((product) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }
      
      if (selectedCategory && product.category !== selectedCategory) return false;
      if (selectedGender && product.gender !== selectedGender && product.gender !== "unisex") return false;
      if (product.price > priceRange) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return b.newArrival === a.newArrival ? 0 : b.newArrival ? 1 : -1;
      return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
    });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-genz-light dark:bg-genz-black transition-colors duration-300">
      
      {/* Header */}
      <div className="border-b border-genz-border pb-6 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl md:text-6xl font-light uppercase text-black dark:text-white">
            THE CATALOG
          </h1>
          <p className="font-mono text-xs font-bold bg-genz-acid text-genz-light inline-block px-3 py-1 mt-2 rounded-full border border-genz-border/20">
            DESI FUSION DROP {selectedCategory ? `> ${selectedCategory.toUpperCase()}` : ""}
          </p>
        </div>

        <div className="relative w-full md:w-80 bg-white border border-genz-border px-4 py-2.5 flex items-center brutalist-shadow dark:bg-genz-charcoal dark:border-genz-border">
          <Search className="h-5 w-5 text-genz-pink" />
          <input
            type="text"
            placeholder="SEARCH..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none pl-3 font-mono font-bold uppercase text-black placeholder:text-gray-400 dark:text-white text-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="text-black hover:text-genz-pink dark:text-white">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pb-6 mb-8 border-b border-genz-border">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center space-x-2 font-sans text-xs tracking-wider font-bold bg-genz-pink text-white px-4 py-2 border border-genz-border lg:hidden brutalist-shadow rounded-sm"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>FILTERS</span>
        </button>

        <span className="hidden lg:inline font-mono font-bold text-black dark:text-genz-blue text-sm">
          SHOWING {filteredProducts.length} ITEMS
        </span>

        <div className="flex items-center space-x-3 bg-white border border-genz-border px-3 py-1.5 brutalist-shadow dark:bg-genz-charcoal dark:border-genz-border text-sm">
          <ArrowUpDown className="h-4 w-4 text-black dark:text-white" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none font-mono font-bold text-black dark:text-white outline-none cursor-pointer uppercase text-xs"
          >
            <option value="featured" className="dark:bg-genz-charcoal">Featured</option>
            <option value="newest" className="dark:bg-genz-charcoal">New Heat</option>
            <option value="price-low" className="dark:bg-genz-charcoal">Price: Low to High</option>
            <option value="price-high" className="dark:bg-genz-charcoal">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Filters */}
        <aside className="hidden lg:block space-y-8 pr-6 border-r border-genz-border/30">
          
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold uppercase text-black dark:text-white border-b border-genz-border/40 pb-1 w-full block">CATEGORIES</h4>
            <div className="flex flex-col space-y-3 font-mono font-bold text-sm">
              <button
                onClick={() => setSelectedCategory("")}
                className={`text-left hover:text-genz-pink transition-colors ${!selectedCategory ? "text-genz-pink font-bold dark:text-genz-blue" : "text-black dark:text-white"}`}
              >
                ALL ITEMS
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left hover:text-genz-pink transition-colors uppercase ${selectedCategory === cat ? "text-genz-pink font-bold dark:text-genz-blue" : "text-black dark:text-white"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold uppercase text-black dark:text-white border-b border-genz-border/40 pb-1 w-full block">GENDER</h4>
            <div className="flex flex-col space-y-3 font-mono font-bold text-sm">
              {["men", "women", "unisex"].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(selectedGender === g ? "" : g)}
                  className={`text-left hover:text-genz-blue transition-colors uppercase ${selectedGender === g ? "text-genz-blue font-bold dark:text-genz-blue" : "text-black dark:text-white"}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pr-4">
            <div className="flex justify-between items-center font-mono font-bold text-black dark:text-white text-sm">
              <span>MAX PRICE</span>
              <span className="bg-genz-acid text-genz-light px-2.5 py-0.5 rounded-full border border-genz-border/20 text-xs">Rs. {priceRange}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={15000}
              step={500}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-genz-pink h-1 bg-genz-border rounded appearance-none"
            />
          </div>

          <button
            onClick={handleClearFilters}
            className="w-[90%] bg-genz-black text-white font-sans text-xs tracking-widest font-bold uppercase py-3 border border-genz-border hover:bg-genz-pink transition-colors duration-300"
          >
            RESET FILTERS
          </button>
        </aside>

        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-genz-light/50 dark:bg-genz-charcoal/50 border border-dashed border-genz-border rounded-sm">
              <p className="font-mono text-sm font-bold text-black dark:text-genz-pink">
                NO PIECES FOUND WITH THESE FILTERS.
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-6 bg-genz-pink font-sans text-xs tracking-widest font-bold uppercase px-8 py-4 text-white border border-transparent hover:bg-genz-pink/90 transition-colors duration-300"
              >
                CLEAR FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
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

                      {product.newArrival && (
                        <div className="absolute left-3 top-3 bg-genz-pink text-white font-mono text-[9px] tracking-wider font-bold px-2 py-0.5 rounded shadow-sm">
                          NEW HEAT
                        </div>
                      )}

                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-genz-border/20 hover:bg-white transition-colors z-10 shadow-sm"
                      >
                        <Heart className={`h-4.5 w-4.5 ${isWishlisted ? "fill-genz-pink text-genz-pink" : "text-black"}`} />
                      </button>

                      <div className="absolute bottom-0 left-0 w-full translate-y-full bg-genz-black/90 py-3 text-center transition-transform duration-300 group-hover:translate-y-0 z-20">
                        <Link href={`/shop/${product.id}`} className="font-sans text-xs font-bold tracking-widest uppercase text-white hover:text-genz-blue transition-colors">
                          SELECT OPTIONS
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
          )}
        </main>
      </div>

      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-genz-black/50 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
          <div className="relative flex w-full max-w-xs flex-col border-r border-genz-border bg-genz-light py-6 shadow-xl dark:bg-genz-black overflow-y-auto">
            <div className="flex items-center justify-between px-6 border-b border-genz-border pb-4">
              <span className="font-display text-2xl font-black text-black dark:text-genz-blue">FILTERS</span>
              <button onClick={() => setShowMobileFilters(false)} className="text-black dark:text-white">
                <X className="h-8 w-8" />
              </button>
            </div>
            
            <div className="p-6 space-y-8 font-mono font-bold">
              <div className="space-y-4">
                <h4 className="text-black dark:text-white border-b border-genz-border pb-1 w-full text-left font-bold">CATEGORY</h4>
                <div className="flex flex-col space-y-2">
                  <button onClick={() => { setSelectedCategory(""); setShowMobileFilters(false); }} className={`text-left ${!selectedCategory ? "text-genz-pink font-bold" : "text-black dark:text-white"}`}>ALL ITEMS</button>
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => { setSelectedCategory(cat); setShowMobileFilters(false); }} className={`text-left uppercase ${selectedCategory === cat ? "text-genz-pink font-bold" : "text-black dark:text-white"}`}>{cat}</button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-black dark:text-white border-b border-genz-border pb-1 w-full text-left font-bold">MAX PRICE</h4>
                <div className="flex justify-between text-black dark:text-white mb-2"><span>Rs. 1000</span><span>Rs. {priceRange}</span></div>
                <input type="range" min={1000} max={15000} step={500} value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-2 bg-genz-border accent-genz-pink appearance-none" />
              </div>

              <button onClick={() => { handleClearFilters(); setShowMobileFilters(false); }} className="w-full bg-genz-pink text-white font-sans text-xs tracking-widest font-bold py-3 border border-transparent transition-colors">
                CLEAR ALL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-display text-4xl font-light bg-genz-light text-genz-black dark:bg-genz-black dark:text-genz-light">LOADING CATALOG...</div>}>
      <ShopContent />
    </Suspense>
  );
}
