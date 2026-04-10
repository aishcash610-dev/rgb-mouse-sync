import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const categories = ["All", "Wired", "Wireless"];

const ProductGrid = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-wide text-foreground sm:text-4xl">
            OUR <span className="text-primary text-glow-green">COLLECTION</span>
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Tournament-grade RGB mice engineered for competitive gamers.
          </p>
        </div>

        <div className="mb-10 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 font-display text-xs font-semibold tracking-wider transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(160_100%_50%/0.25)]"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
