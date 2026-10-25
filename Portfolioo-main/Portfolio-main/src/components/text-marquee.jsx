import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const WORDS = [
  "General Paediatrics",
  "Neonatal & Newborn Care",
  "PICU & Respiratory Support",
  "Acute & Emergency Triage",
  "Growth & Development",
  "Infectious Diseases",
  "Evidence-Based Child Health",
  "Compassionate Care",
];

export function TextMarquee({
  words = WORDS,
  duration = 32,
  className,
}) {
  const group = (suffix) =>
    words.map((word) => (
      <span key={`${suffix}-${word}`} className="flex items-center gap-8 whitespace-nowrap">
        <span className="text-base sm:text-lg font-medium tracking-tight text-foreground/85">
          {word}
        </span>
        <Sparkles className="size-4 text-primary shrink-0" />
      </span>
    ));

  return (
    <div
      className={cn(
        "w-full overflow-hidden border-y border-border bg-background py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {group("a")}
        {group("b")}
        {group("c")}
        {group("d")}
      </motion.div>
    </div>
  );
}
export default TextMarquee;
