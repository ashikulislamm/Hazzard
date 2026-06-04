"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/ui/CartContext";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCT_CATEGORIES, PRODUCTS, sortProducts } from "@/data/products";

const SORTS = ["Newest", "Price ↑", "Price ↓", "A–Z"];
const FILTERS = ["All", ...PRODUCT_CATEGORIES];
const BRANDS = ["All", "HAZZARD", "HAZZARD LABS", "VOID STUDIO"];
const GRID_COLS_OPTIONS = [3, 4, 5, 6];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [activeSort, setActiveSort] = useState("Newest");
  const [gridCols, setGridCols] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceLimit, setPriceLimit] = useState(800);
  const [appliedPriceLimit, setAppliedPriceLimit] = useState(800);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { addItem } = useCart();

  const getCategoryCount = (category: string) => {
    return PRODUCTS.filter((p) => {
      const matchBrand = activeBrand === "All" || p.brand === activeBrand;
      const matchPrice = p.price <= appliedPriceLimit;
      return (category === "All" || p.category === category) && matchBrand && matchPrice;
    }).length;
  };

  const getBrandCount = (brand: string) => {
    return PRODUCTS.filter((p) => {
      const matchCategory = activeFilter === "All" || p.category === activeFilter;
      const matchPrice = p.price <= appliedPriceLimit;
      return (brand === "All" || p.brand === brand) && matchCategory && matchPrice;
    }).length;
  };

  const filtered = sortProducts(
    PRODUCTS.filter((product) => {
      const matchCategory = activeFilter === "All" || product.category === activeFilter;
      const matchBrand = activeBrand === "All" || product.brand === activeBrand;
      const matchPrice = product.price <= appliedPriceLimit;
      return matchCategory && matchBrand && matchPrice;
    }),
    activeSort
  );

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const totalResults = filtered.length;
  const startNum = totalResults === 0 ? 0 : startIndex + 1;
  const endNum = Math.min(endIndex, totalResults);

  const getGridColsClass = (cols: number) => {
    switch (cols) {
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";
      case 5:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
      case 6:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6";
      default:
        return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3";
    }
  };

  const getMediaHeightClass = (cols: number) => {
    switch (cols) {
      case 3:
        return "h-[250px] sm:h-[320px]";
      case 4:
        return "h-[220px] sm:h-[265px]";
      case 5:
        return "h-[190px] sm:h-[225px]";
      case 6:
        return "h-[160px] sm:h-[190px]";
      default:
        return "h-[250px] sm:h-[270px]";
    }
  };

  const renderFilters = () => (
    <>
      {/* Price Filter */}
      <div className="space-y-4 border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
        <h3 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white border-b border-white/10 pb-2">
          Filter by Price
        </h3>
        <div className="space-y-4">
          <input
            type="range"
            min={95}
            max={800}
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-none accent-white focus:outline-none"
          />
          <div className="flex items-center justify-between font-mono text-[0.65rem] text-void-mid">
            <span>Max: ${priceLimit}</span>
            <button
              onClick={() => {
                setAppliedPriceLimit(priceLimit);
                setCurrentPage(1);
                setIsSidebarOpen(false);
              }}
              className="font-mono text-[0.6rem] tracking-[0.15em] uppercase border border-white/10 bg-white/[0.04] px-4 py-1.5 hover:bg-white/10 hover:text-white transition-colors"
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4 border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
        <h3 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white border-b border-white/10 pb-2">
          Categories
        </h3>
        <ul className="space-y-1.5">
          {FILTERS.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => {
                  setActiveFilter(cat);
                  setCurrentPage(1);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between font-mono text-[0.68rem] tracking-[0.15em] uppercase text-left transition-colors py-1 ${activeFilter === cat ? "text-white font-bold" : "text-white/40 hover:text-white/80"
                  }`}
              >
                <span>{cat}</span>
                <span className="text-white/20">({getCategoryCount(cat)})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <div className="space-y-4 border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
        <h3 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-white border-b border-white/10 pb-2">
          Brands
        </h3>
        <ul className="space-y-1.5">
          {BRANDS.map((brand) => (
            <li key={brand}>
              <button
                onClick={() => {
                  setActiveBrand(brand);
                  setCurrentPage(1);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between font-mono text-[0.68rem] tracking-[0.15em] uppercase text-left transition-colors py-1 ${activeBrand === brand ? "text-white font-bold" : "text-white/40 hover:text-white/80"
                  }`}
              >
                <span>{brand}</span>
                <span className="text-white/20">({getBrandCount(brand)})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <main className="pt-32 min-h-screen bg-black">
      {/* Page header */}
      <div className="page-shell pb-16 border-b border-white/[0.08]">
        <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-void-mid mb-4">
          SS25 Collection
        </p>
        <h1
          className="font-display leading-[0.9] tracking-[0.02em]"
          style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
        >
          SHOP ALL
        </h1>
      </div>

      {/* Breadcrumbs and Results Count Row */}
      <div className="page-shell py-4 border-b border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 font-mono text-[0.65rem] tracking-wider text-void-mid uppercase">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          {activeFilter !== "All" && (
            <>
              <span>/</span>
              <span className="text-white">{activeFilter}</span>
            </>
          )}
        </div>
        <span className="font-mono text-[0.65rem] tracking-wider text-white/50 uppercase">
          Showing {startNum}–{endNum} of {totalResults} results
        </span>
      </div>

      {/* Main layout container with sidebar and content */}
      <div className="page-shell py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

          {/* Left Sidebar (Filters) - Desktop Only */}
          <aside className="lg:block hidden space-y-8">
            {renderFilters()}
          </aside>

          {/* Right Content Area */}
          <div className="space-y-6">

            {/* Desktop-only Toolbar */}
            <div className="lg:flex hidden items-center justify-end gap-6 pb-6">
              {/* Items per page indicator */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-void-mid">Show:</span>
                <div className="flex gap-1.5">
                  {[9, 12, 24].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setItemsPerPage(num);
                        setCurrentPage(1);
                      }}
                      className={`font-mono text-[0.65rem] transition-colors ${itemsPerPage === num ? "text-white font-bold" : "text-white/30 hover:text-white/60"
                        }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid layout indicators */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-void-mid">View:</span>
                <div className="flex gap-1">
                  {GRID_COLS_OPTIONS.map((cols) => (
                    <button
                      key={cols}
                      onClick={() => setGridCols(cols)}
                      className={`p-1.5 border transition-all duration-300 ${gridCols === cols
                          ? "border-white bg-white/5 text-white"
                          : "border-white/10 text-white/30 hover:border-white/30 hover:text-white/60"
                        }`}
                      title={`${cols} columns`}
                    >
                      <div className="flex gap-0.5">
                        {Array.from({ length: cols }).map((_, idx) => (
                          <div key={idx} className="w-1 h-3 bg-current" />
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => {
                    setActiveSort(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="appearance-none bg-black border border-white/10 rounded-xl px-4 py-2 pr-8 font-mono text-[0.65rem] uppercase tracking-wider text-white outline-none focus:border-white/20 cursor-none"
                >
                  <option value="Newest">Sort by: Newest</option>
                  <option value="Price ↑">Price: Low to High</option>
                  <option value="Price ↓">Price: High to Low</option>
                  <option value="A–Z">Name: A–Z</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/50 text-[0.6rem]">
                  ▼
                </div>
              </div>
            </div>

            {/* Mobile Toolbar - Mobile Only */}
            <div className="lg:hidden flex items-center justify-between border-t border-b border-white/10 py-3 my-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-white hover:text-white/80 transition-colors cursor-none"
              >
                <span>☰</span> Show sidebar
              </button>
              <div className="flex items-center gap-2">
                <span className="text-white/50 text-[0.8rem] font-mono">⇅</span>
                <select
                  value={activeSort}
                  onChange={(e) => {
                    setActiveSort(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="appearance-none bg-black border border-white/10 rounded-lg px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-white outline-none cursor-none"
                >
                  <option value="Newest">Sort: Newest</option>
                  <option value="Price ↑">Price: Low to High</option>
                  <option value="Price ↓">Price: High to Low</option>
                  <option value="A–Z">Name: A–Z</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            {paginatedProducts.length > 0 ? (
              <div className="space-y-12">
                <div className={`grid gap-4 transition-all duration-500 ${getGridColsClass(gridCols)}`}>
                  {paginatedProducts.map((p) => (
                    <ProductCard
                      key={p.id}
                      image={p.image}
                      name={p.name}
                      category={p.category}
                      price={`$${p.price}`}
                      label={p.label}
                      isNew={p.isNew}
                      href={`/products/${p.slug}`}
                      onQuickAdd={() =>
                        addItem({ id: p.id, name: p.name, variant: `${p.category} · M`, price: p.price, label: p.label })
                      }
                      mediaClassName={getMediaHeightClass(gridCols)}
                    />
                  ))}
                </div>

                {/* Pagination controls */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 pt-12 border-t border-white/5">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="font-mono text-[0.65rem] tracking-wider uppercase px-4 py-2 border border-white/10 disabled:opacity-30 disabled:pointer-events-none hover:bg-white/5 hover:text-white transition-colors"
                    >
                      Prev
                    </button>
                    <span className="font-mono text-[0.65rem] text-void-mid">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="font-mono text-[0.65rem] tracking-wider uppercase px-4 py-2 border border-white/10 disabled:opacity-30 disabled:pointer-events-none hover:bg-white/5 hover:text-white transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 border border-white/5 rounded-2xl bg-white/[0.01]">
                <p className="font-mono text-xs tracking-widest text-void-mid uppercase mb-2">No items found</p>
                <p className="text-white/40 text-sm">Try resetting your filters or selecting a different category.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Slide-out Drawer Panel */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Dark blur backdrop */}
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />
        {/* Slide-in sidebar block */}
        <div
          className={`absolute inset-y-0 left-0 w-[280px] sm:w-[320px] bg-void-dark border-r border-white/10 p-6 overflow-y-auto transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Drawer Title & Close Control */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <span className="font-mono text-xs tracking-widest text-white uppercase">Filters</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-white/50 hover:text-white transition-colors cursor-none"
            >
              <span>✕</span> Close
            </button>
          </div>
          {/* Drawer Filter List */}
          <div className="space-y-6">
            {renderFilters()}
          </div>
        </div>
      </div>
    </main>
  );
}