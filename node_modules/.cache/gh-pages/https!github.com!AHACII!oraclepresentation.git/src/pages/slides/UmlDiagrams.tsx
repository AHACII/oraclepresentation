import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animScale } from "@/lib/anim";

export default function UmlDiagrams() {
  return (
    <SlideShell chapter="" number="05 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] flex flex-col">
        <div className="mb-[5vh]">
          <motion.div
            {...animProps(0.05)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-primary mb-[1.5vh]"
          >
            Analyse &amp; Conception — UML
          </motion.div>
          <motion.h2
            {...animProps(0.15)}
            className="font-display font-bold text-[5vw] leading-[0.95] tracking-tight max-w-[70vw]"
          >
            Trois diagrammes pour penser le système.
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 gap-[2vw] flex-1">
          <motion.div
            {...animScale(0.25)}
            className="relative rounded-[1.2vw] bg-surface/70 border border-text/10 p-[2vw] flex flex-col"
          >
            <div className="font-mono text-[1.2vw] text-primary tracking-widest mb-[1.5vh]">
              01 · STRUCTURE
            </div>
            <div className="font-display font-bold text-[2.6vw] leading-tight mb-[2vh]">
              Diagramme
              <br />
              de classes
            </div>
            <div className="flex-1 flex items-center justify-center">
              <svg
                viewBox="0 0 200 140"
                className="w-full h-full max-h-[22vh]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="20" y="10" width="60" height="35" rx="3" className="text-primary" />
                <line x1="20" y1="22" x2="80" y2="22" className="text-primary" />
                <rect x="120" y="10" width="60" height="35" rx="3" className="text-accent" />
                <line x1="120" y1="22" x2="180" y2="22" className="text-accent" />
                <rect x="70" y="90" width="60" height="40" rx="3" className="text-accent-2" />
                <line x1="70" y1="102" x2="130" y2="102" className="text-accent-2" />
                <line x1="80" y1="45" x2="100" y2="90" className="text-text/40" />
                <line x1="120" y1="45" x2="100" y2="90" className="text-text/40" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.4)}
            className="relative rounded-[1.2vw] bg-surface/70 border border-text/10 p-[2vw] flex flex-col"
          >
            <div className="font-mono text-[1.2vw] text-accent tracking-widest mb-[1.5vh]">
              02 · INTERACTION
            </div>
            <div className="font-display font-bold text-[2.6vw] leading-tight mb-[2vh]">
              Diagramme
              <br />
              de séquence
            </div>
            <div className="flex-1 flex items-center justify-center">
              <svg
                viewBox="0 0 200 140"
                className="w-full h-full max-h-[22vh]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="40" y1="10" x2="40" y2="130" strokeDasharray="3 3" className="text-text/40" />
                <line x1="100" y1="10" x2="100" y2="130" strokeDasharray="3 3" className="text-text/40" />
                <line x1="160" y1="10" x2="160" y2="130" strokeDasharray="3 3" className="text-text/40" />
                <rect x="25" y="2" width="30" height="14" rx="2" className="text-primary" />
                <rect x="85" y="2" width="30" height="14" rx="2" className="text-accent" />
                <rect x="145" y="2" width="30" height="14" rx="2" className="text-accent-2" />
                <line x1="40" y1="40" x2="100" y2="40" className="text-primary" markerEnd="url(#arr1)" />
                <line x1="100" y1="65" x2="160" y2="65" className="text-accent" />
                <line x1="160" y1="90" x2="100" y2="90" className="text-accent-2" />
                <line x1="100" y1="115" x2="40" y2="115" className="text-primary" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.55)}
            className="relative rounded-[1.2vw] bg-surface/70 border border-text/10 p-[2vw] flex flex-col"
          >
            <div className="font-mono text-[1.2vw] text-accent-2 tracking-widest mb-[1.5vh]">
              03 · USAGE
            </div>
            <div className="font-display font-bold text-[2.6vw] leading-tight mb-[2vh]">
              Diagramme
              <br />
              de cas d'utilisation
            </div>
            <div className="flex-1 flex items-center justify-center">
              <svg
                viewBox="0 0 200 140"
                className="w-full h-full max-h-[22vh]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="30" cy="40" r="6" className="text-primary" />
                <line x1="30" y1="46" x2="30" y2="65" className="text-primary" />
                <line x1="30" y1="55" x2="20" y2="62" className="text-primary" />
                <line x1="30" y1="55" x2="40" y2="62" className="text-primary" />
                <line x1="30" y1="65" x2="22" y2="80" className="text-primary" />
                <line x1="30" y1="65" x2="38" y2="80" className="text-primary" />
                <ellipse cx="120" cy="35" rx="30" ry="14" className="text-accent" />
                <ellipse cx="135" cy="70" rx="30" ry="14" className="text-accent" />
                <ellipse cx="120" cy="105" rx="30" ry="14" className="text-accent" />
                <line x1="50" y1="55" x2="90" y2="35" className="text-text/40" />
                <line x1="50" y1="55" x2="105" y2="70" className="text-text/40" />
                <line x1="50" y1="55" x2="90" y2="105" className="text-text/40" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
