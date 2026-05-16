import { motion } from "framer-motion";
import { animProps, animScale, isExportView } from "@/lib/anim";

const base = import.meta.env.BASE_URL;

export default function Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text font-body">
      <img
        src={`${base}hero.png`}
        crossOrigin="anonymous"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg/70 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="orb"
        style={{
          width: "60vw",
          height: "60vw",
          top: "-20vw",
          right: "-25vw",
          background: "var(--slide-primary)",
        }}
      />
      <div
        className="orb"
        style={{
          width: "40vw",
          height: "40vw",
          bottom: "-15vw",
          left: "-10vw",
          background: "var(--slide-accent-2)",
          animationDelay: "1.5s",
        }}
      />

      <div className="relative z-10 h-full w-full px-[7vw] py-[7vh] flex flex-col justify-between">
        <motion.div
          {...animProps(0.1, -10)}
          className="flex items-center gap-[1.2vw]"
        >
          <div className="relative">
            <div className="w-[2vw] h-[2vw] rounded-full bg-primary" />
            {!isExportView && (
              <div
                className="absolute inset-0 rounded-full bg-primary"
                style={{ animation: "pulse-ring 2s ease-out infinite" }}
              />
            )}
          </div>
          <span className="font-mono text-[1.6vw] tracking-[0.4em] text-primary uppercase">
            AR · Smart Home · Mobile
          </span>
        </motion.div>

        <div>
          <motion.div
            {...animProps(0.2)}
            className="font-mono text-[1.5vw] tracking-[0.3em] uppercase text-muted mb-[2vh]"
          >
            Rapport de Projet
          </motion.div>
          <motion.h1
            {...animScale(0.35)}
            className="font-display font-bold tracking-tighter text-[12vw] leading-[0.85] text-balance"
          >
            <span className="shimmer-text">Smart</span>
            <br />
            <span className="text-text">HomeAR</span>
          </motion.h1>
          <motion.p
            {...animProps(0.6)}
            className="mt-[3vh] text-[2.2vw] text-text/80 max-w-[60vw] leading-snug font-light"
          >
            Une expérience immersive pour visualiser des équipements
            <span className="text-primary"> Smart Home</span> en
            <span className="text-accent"> réalité augmentée</span>.
          </motion.p>
        </div>

        <motion.div
          {...animProps(0.85)}
          className="flex items-end justify-between border-t border-text/15 pt-[3vh]"
        >
          <div>
            <div className="font-mono text-[1.3vw] tracking-widest uppercase text-muted mb-[1vh]">
              Réalisé par
            </div>
            <div className="font-display text-[2vw] font-medium leading-tight">
              BOUKHANA Yassamine · CHATTOUF Israe · AHADJI Abderrahim
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[1.3vw] tracking-widest uppercase text-muted mb-[1vh]">
              Encadré par
            </div>
            <div className="font-display text-[2vw] font-medium">
              EL HASSANE LAAJI
            </div>
            <div className="font-mono text-[1.3vw] text-primary mt-[1vh]">
             Année de formation  2025 — 2026
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
