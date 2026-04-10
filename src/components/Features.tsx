import { motion } from "framer-motion";
import { Zap, Cpu, Palette, Gauge } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "32K DPI SENSOR",
    desc: "Track at up to 32,000 DPI with sub-micron precision and zero smoothing.",
  },
  {
    icon: Zap,
    title: "0.2MS RESPONSE",
    desc: "Wired polling at 8,000Hz for the fastest click registration in any game.",
  },
  {
    icon: Palette,
    title: "16.8M COLORS",
    desc: "Per-key RGB with dynamic effects synced across your entire setup.",
  },
  {
    icon: Cpu,
    title: "ONBOARD MEMORY",
    desc: "Store 5 profiles directly on the mouse — plug and play anywhere.",
  },
];

const Features = () => (
  <section id="features" className="border-t border-border bg-card/50 py-24">
    <div className="container mx-auto px-4">
      <h2 className="mb-16 text-center font-display text-3xl font-bold tracking-wide text-foreground sm:text-4xl">
        BUILT TO <span className="text-secondary text-glow-purple">PERFORM</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-secondary/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3 text-secondary transition-colors group-hover:bg-secondary/20">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-sm font-bold tracking-wider text-foreground">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
