import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A quiet footer that ends on an oversized wordmark. A soft spotlight follows the pointer across
 * the letters, so the brand name lights up under the cursor.
 */
export function WordmarkFooter({
  word = "northwind",
  links = ["Product", "Pricing", "Docs", "Journal", "Contact"],
  className,
  metaText = "Made with care, somewhere warm.",
}) {
  const ref = useRef(null);
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 220, damping: 28 });
  const sy = useSpring(y, { stiffness: 220, damping: 28 });
  const mask = useMotionTemplate`radial-gradient(220px circle at ${sx}px ${sy}px, black, transparent 70%)`;

  const displayWord = typeof word === "string" ? word.toUpperCase() : "DR. JANAKI S";

  return (
    <footer className={cn("w-full overflow-hidden border-t bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {links.map((l) => (
            typeof l === "string" ? (
              <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-foreground">
                {l}
              </a>
            ) : (
              <a key={l.label} href={l.href || "#"} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            )
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">{metaText}</p>
      </div>

      <div
        ref={ref}
        onPointerMove={(e) => {
          if (!ref.current) return;
          const r = ref.current.getBoundingClientRect();
          x.set(e.clientX - r.left);
          y.set(e.clientY - r.top);
        }}
        onPointerLeave={() => {
          x.set(-300);
          y.set(-300);
        }}
        className="relative select-none px-4 pb-8 sm:pb-12 pt-6 overflow-hidden"
      >
        <p aria-hidden className="text-center whitespace-nowrap text-[clamp(1.75rem,8.2vw,8.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-foreground/[0.08] select-none">
          {displayWord}
        </p>
        <motion.p
          aria-hidden
          style={{ WebkitMaskImage: mask, maskImage: mask }}
          className="pointer-events-none absolute inset-x-4 top-6 bg-gradient-to-b from-primary via-primary/80 to-foreground bg-clip-text text-center whitespace-nowrap text-[clamp(1.75rem,8.2vw,8.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-transparent select-none"
        >
          {displayWord}
        </motion.p>
        <span className="sr-only">{displayWord}</span>
      </div>
    </footer>
  );
}
export default WordmarkFooter;
