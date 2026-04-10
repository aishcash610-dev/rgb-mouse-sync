const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
      <span className="font-display text-lg font-bold tracking-wider">
        <span className="text-primary">RGB</span>MOUSE
      </span>
      <p className="max-w-sm text-sm text-muted-foreground">
        Premium gaming peripherals for competitive players. Free shipping on orders over $99.
      </p>
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} RGBMOUSE. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
