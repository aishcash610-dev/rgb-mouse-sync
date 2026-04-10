import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-[0_0_40px_hsl(160_100%_50%/0.08)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          {product.badge}
        </span>
      )}

      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={800}
          height={800}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>

        <h3 className="mb-2 font-display text-base font-bold tracking-wide text-foreground">
          {product.name}
        </h3>

        <div className="mb-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
          <span className="rounded-md border border-border px-2 py-0.5">{product.dpi} DPI</span>
          <span className="rounded-md border border-border px-2 py-0.5">{product.weight}</span>
          <span className="rounded-md border border-border px-2 py-0.5">{product.connectivity}</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            className="rounded-lg bg-primary/10 p-2.5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(160_100%_50%/0.3)]"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
