import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/mouse-hero.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="RGB Gaming Mouse" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-xs font-medium tracking-widest text-primary">
              PRECISION ENGINEERED
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 font-display text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            DOMINATE WITH{" "}
            <span className="rgb-gradient bg-clip-text text-transparent">RGB</span>
            <br />
            PRECISION
          </motion.h1>

          <motion.p
            className="mb-8 max-w-lg text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ultra-lightweight gaming mice with 32K DPI sensors, customizable RGB lighting, and sub-millisecond response times.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(160_100%_50%/0.3)]"
            >
              SHOP NOW
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-display text-sm font-semibold tracking-wider text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
