"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { Product } from "@/data/mockData";
import { SlidersHorizontal, ArrowUpDown, Grid, Search, Heart, X } from "lucide-react";

export default function Shop() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { products, categories, wishlist, toggleWishlist } = useStore();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(15000);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Sync state from query parameters on load
  useEffect(() => {
    const categoryQuery = searchParams.get("category");
    const searchQueryParam = searchParams.get("search");
    if (categoryQuery) setSelectedCategory(categoryQuery);
    if (searchQueryParam) setSearchQuery(searchQueryParam);
  }, [searchParams]);

  // Handle resets
  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedGender("");
    setSelectedSize("");
    setSelectedColor("");
    setPriceRange(15000);
    setSearchQuery("");
    setSortBy("featured");
    router.push("/shop");
  };

  // Filter & Sort Logic
  const filteredProducts = products
    .filter((product) => {
      // Search Query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }
      
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        // Special mapping to support Men's Wear and Women's Wear which filter by gender too
        if (selectedCategory === "Men's Wear" && product.gender !== "men" && product.gender !== "unisex") return false;
        if (selectedCategory === "Women's Wear" && product.gender !== "women" && product.gender !== "unisex") return false;
        if (selectedCategory !== "Men's Wear" && selectedCategory !== "Women's Wear" && product.category !== selectedCategory) return false;
      }

      // Gender filter
      if (selectedGender && product.gender !== selectedGender && product.gender !== "unisex") return false;

      // Size filter
      if (selectedSize && !product.sizes.includes(selectedSize)) return false;

      // Color filter
      if (selectedColor && !product.colors.some((c) => c.name === selectedColor)) return false;

      // Price filter
      if (product.price > priceRange) return false;

      return true;
    })
    .sort((a, b) => {
      // Sorting
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return b.newArrival === a.newArrival ? 0 : b.newArrival ? 1 : -1;
      return b.featured === a.featured ? 0 : b.featured ? 1 : -1; // default featured
    });

  const sizes = ["S", "M", "L", "XL", "O/S"];
  const colors = ["Cream", "Oatmeal", "Charcoal", "Off-Black"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Top Banner and Header */}
      <div className="border-b border-luxury-border/60 pb-5 dark:border-luxury-charcoal/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-light tracking-wide text-luxury-black dark:text-white">
            THE CATALOG
          </h1>
          <p className="text-[10px] tracking-widest text-luxury-gray dark:text-luxury-beige/70 mt-1 uppercase">
            SHAHROZE STUDIO / DESIGN EDIT {selectedCategory ? `> ${selectedCategory.toUpperCase()}` : ""}
          </p>
        </div>

        {/* Search input field inside the shop header */}
        <div className="relative w-full md:w-72 bg-luxury-lightGray dark:bg-luxury-charcoal/40 px-3 py-2 flex items-center border border-luxury-border/40 dark:border-luxury-charcoal">
          <Search className="h-4 w-4 text-luxury-gray" />
          <input
            type="text"
            placeholder="Search clothes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none pl-2 text-xs uppercase tracking-wider text-luxury-black placeholder:text-luxury-gray/60 dark:text-white"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="text-luxury-gray hover:text-luxury-black dark:hover:text-white">
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Sorting & Filters Control Bar */}
      <div className="flex items-center justify-between py-4 border-b border-luxury-border/30 dark:border-luxury-charcoal/30">
        
        {/* Toggle Filter view */}
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center space-x-2 text-xs font-bold tracking-widest text-luxury-black dark:text-white lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>FILTERS</span>
        </button>

        <span className="hidden lg:inline text-xs text-luxury-gray dark:text-luxury-beige/70 font-medium">
          SHOWING {filteredProducts.length} DESIGNS
        </span>

        {/* Sort Select */}
        <div className="flex items-center space-x-2">
          <ArrowUpDown className="h-3.5 w-3.5 text-luxury-gray" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none text-xs font-semibold tracking-wider text-luxury-black dark:text-white outline-none cursor-pointer uppercase"
          >
            <option value="featured" className="dark:bg-luxury-black">Featured</option>
            <option value="newest" className="dark:bg-luxury-black">New Arrivals</option>
            <option value="price-low" className="dark:bg-luxury-black">Price: Low to High</option>
            <option value="price-high" className="dark:bg-luxury-black">Price: High to Low</option>
            <option value="rating" className="dark:bg-luxury-black">Top Rated</option>
          </select>
        </div>

      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
        
        {/* Sidebar Filters - Desktop (Visible) */}
        <aside className="hidden lg:block space-y-8 pr-4">
          
          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">CATEGORIES</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={() => setSelectedCategory("")}
                className={`text-left hover:text-luxury-black dark:hover:text-white transition-colors ${
                  !selectedCategory ? "text-luxury-black font-bold dark:text-white" : "text-luxury-gray dark:text-luxury-beige/70"
                }`}
              >
                All Apparel
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left hover:text-luxury-black dark:hover:text-white transition-colors ${
                    selectedCategory === cat ? "text-luxury-black font-bold dark:text-white" : "text-luxury-gray dark:text-luxury-beige/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">GENDER</h4>
            <div className="flex flex-col space-y-2 text-xs">
              {["men", "women", "unisex"].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(selectedGender === g ? "" : g)}
                  className={`text-left capitalize hover:text-luxury-black dark:hover:text-white transition-colors ${
                    selectedGender === g ? "text-luxury-black font-bold dark:text-white" : "text-luxury-gray dark:text-luxury-beige/70"
                  }`}
                >
                  {g} Wear
                </button>
              ))}
            </div>
          </div>

          {/* Sizing */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">SIZES</h4>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(selectedSize === s ? "" : s)}
                  className={`flex h-8 w-8 items-center justify-center border text-[10px] font-bold transition-all ${
                    selectedSize === s
                      ? "bg-luxury-black text-white border-luxury-black dark:bg-white dark:text-luxury-black dark:border-white"
                      : "border-luxury-border text-luxury-black dark:border-luxury-charcoal dark:text-white hover:border-luxury-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">COLORS</h4>
            <div className="flex flex-col space-y-2 text-xs">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(selectedColor === c ? "" : c)}
                  className={`flex items-center space-x-2 text-left hover:text-luxury-black dark:hover:text-white transition-colors ${
                    selectedColor === c ? "text-luxury-black font-bold dark:text-white" : "text-luxury-gray dark:text-luxury-beige/70"
                  }`}
                >
                  <span
                    className={`h-3 w-3 rounded-full border border-luxury-border dark:border-luxury-charcoal`}
                    style={{
                      backgroundColor:
                        c === "Cream"
                          ? "#F3EFE0"
                          : c === "Oatmeal"
                          ? "#E3DFD5"
                          : c === "Charcoal"
                          ? "#4A4A4A"
                          : "#1A1A1A"
                    }}
                  />
                  <span>{c}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">
              <span>MAX PRICE</span>
              <span>Rs. {priceRange.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={15000}
              step={500}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-luxury-black dark:accent-white"
            />
          </div>

          {/* Clear Button */}
          <button
            onClick={handleClearFilters}
            className="w-full bg-luxury-lightGray text-[10px] font-bold tracking-widest uppercase py-3 border border-luxury-border text-luxury-black hover:bg-luxury-border transition-colors dark:bg-luxury-charcoal dark:border-luxury-charcoal/60 dark:text-white dark:hover:bg-luxury-black"
          >
            RESET ALL FILTERS
          </button>
        </aside>

        {/* Product Grid Area (3 columns on desktop) */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-luxury-lightGray dark:bg-luxury-charcoal/10 border border-dashed border-luxury-border dark:border-luxury-charcoal">
              <p className="font-serif italic text-lg text-luxury-gray dark:text-luxury-beige/70">
                No designs matched your active query.
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-4 bg-luxury-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 text-white hover:bg-luxury-beige-dark transition-colors dark:bg-white dark:text-luxury-black dark:hover:bg-luxury-beige"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const isWishlisted = wishlist.includes(product.id);
                return (
                  <div key={product.id} className="group relative flex flex-col">
                    
                    {/* Visual Card */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-luxury-lightGray dark:bg-luxury-charcoal">
                      <Link href={`/shop/${product.id}`}>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>

                      {/* Badges */}
                      <div className="absolute left-3 top-3 flex flex-col space-y-1">
                        {product.newArrival && (
                          <span className="bg-luxury-black text-[9px] font-bold text-white px-2 py-1 tracking-widest uppercase dark:bg-white dark:text-luxury-black">
                            NEW
                          </span>
                        )}
                        {product.compareAtPrice && (
                          <span className="bg-red-600 text-[9px] font-bold text-white px-2 py-1 tracking-widest uppercase">
                            SALE
                          </span>
                        )}
                      </div>

                      {/* Wishlist Toggle Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-luxury-black shadow-sm transition-transform hover:scale-105 active:scale-95"
                        aria-label="Toggle Wishlist"
                      >
                        <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-luxury-black"}`} />
                      </button>

                      {/* Hover Add-to-cart link bar */}
                      <div className="absolute bottom-0 left-0 w-full translate-y-full bg-luxury-black/90 py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                        <Link href={`/shop/${product.id}`} className="text-[10px] font-bold tracking-widest text-white hover:text-luxury-beige">
                          SELECT OPTIONS
                        </Link>
                      </div>

                    </div>

                    {/* Metadata Detail */}
                    <div className="mt-3 flex justify-between items-start text-xs">
                      <div className="space-y-1">
                        <h3 className="font-semibold tracking-wider text-luxury-black dark:text-white group-hover:underline">
                          <Link href={`/shop/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className="text-luxury-gray text-[11px] dark:text-luxury-beige/60">{product.category}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-bold text-luxury-black dark:text-white">Rs. {product.price.toLocaleString()}</span>
                        {product.compareAtPrice && (
                          <span className="text-[10px] text-luxury-gray line-through dark:text-luxury-beige/40">
                            Rs. {product.compareAtPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </main>

      </div>

      {/* Mobile Drawer Filter Panel */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
          
          {/* Drawer Body */}
          <div className="relative flex w-full max-w-xs flex-col bg-white p-6 shadow-xl overflow-y-auto dark:bg-luxury-black">
            <div className="flex items-center justify-between border-b border-luxury-border pb-4 mb-6 dark:border-luxury-charcoal">
              <span className="font-display text-sm font-bold tracking-widest text-luxury-black dark:text-white">FILTERS</span>
              <button onClick={() => setShowMobileFilters(false)} className="text-luxury-black dark:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Filter Content */}
            <div className="space-y-6">
              {/* Category */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">CATEGORIES</h4>
                <div className="flex flex-col space-y-1.5 text-xs">
                  <button onClick={() => { setSelectedCategory(""); setShowMobileFilters(false); }} className={`text-left ${!selectedCategory ? "font-bold" : "text-luxury-gray"}`}>All Apparel</button>
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => { setSelectedCategory(cat); setShowMobileFilters(false); }} className={`text-left ${selectedCategory === cat ? "font-bold" : "text-luxury-gray"}`}>{cat}</button>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">GENDER</h4>
                <div className="flex flex-col space-y-1.5 text-xs">
                  {["men", "women", "unisex"].map((g) => (
                    <button key={g} onClick={() => { setSelectedGender(g === selectedGender ? "" : g); setShowMobileFilters(false); }} className={`text-left capitalize ${selectedGender === g ? "font-bold" : "text-luxury-gray"}`}>{g} Wear</button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">SIZES</h4>
                <div className="flex flex-wrap gap-1.5">
                  {sizes.map((s) => (
                    <button key={s} onClick={() => setSelectedSize(s === selectedSize ? "" : s)} className={`flex h-7 w-7 items-center justify-center border text-[9px] font-bold ${selectedSize === s ? "bg-luxury-black text-white dark:bg-white dark:text-luxury-black" : "border-luxury-border text-luxury-black dark:border-luxury-charcoal dark:text-white"}`}>{s}</button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-luxury-black dark:text-white">
                  <span>MAX PRICE</span>
                  <span>Rs. {priceRange.toLocaleString()}</span>
                </div>
                <input type="range" min={1000} max={15000} step={500} value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full accent-luxury-black dark:accent-white" />
              </div>

              {/* Clear button */}
              <button
                onClick={() => { handleClearFilters(); setShowMobileFilters(false); }}
                className="w-full bg-luxury-lightGray text-[10px] font-bold tracking-widest py-3 border border-luxury-border text-luxury-black dark:bg-luxury-charcoal dark:text-white dark:border-luxury-charcoal/60"
              >
                CLEAR ALL
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
