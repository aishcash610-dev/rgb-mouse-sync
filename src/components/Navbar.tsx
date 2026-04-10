import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="font-display text-xl font-bold tracking-wider">
          <span className="text-primary text-glow-green">RGB</span>
          <span className="text-foreground">MOUSE</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#products" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Products
          </a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Features
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Support
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-muted-foreground transition-colors hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden text-muted-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#products" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Products</a>
            <a href="#features" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Support</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
