import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animFromLeft, animFromRight, isExportView } from "@/lib/anim";

export default function Frontend() {
  return (
    <SlideShell chapter="" number="06 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] grid grid-cols-12 gap-[3vw]">
        <div className="col-span-7 flex flex-col justify-center">
          <motion.div
            {...animFromLeft(0.1)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-primary mb-[2vh]"
          >
            Front-End · Kotlin · Jetpack Compose
          </motion.div>
          <motion.h2
            {...animProps(0.2)}
            className="font-display font-bold text-[5vw] leading-[0.95] tracking-tight text-balance"
          >
            Une interface
            <span className="shimmer-text"> moderne</span>, fluide,
            <br />
            pensée pour l'usage.
          </motion.h2>
          <motion.p
            {...animProps(0.4)}
            className="mt-[3vh] text-[1.8vw] text-text/80 leading-relaxed font-light max-w-[42vw]"
          >
            L'application Android contient plusieurs écrans permettant une
            navigation fluide entre les fonctionnalités principales.
          </motion.p>

          <div className="mt-[4vh] grid grid-cols-2 gap-x-[2vw] gap-y-[1.6vh] max-w-[42vw]">
            <motion.div {...animProps(0.55)} className="flex items-center gap-[1vw]">
              <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-primary" />
              <span className="text-[1.7vw]">Authentification utilisateur</span>
            </motion.div>
            <motion.div {...animProps(0.62)} className="flex items-center gap-[1vw]">
              <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent" />
              <span className="text-[1.7vw]">Consultation du catalogue</span>
            </motion.div>
            <motion.div {...animProps(0.69)} className="flex items-center gap-[1vw]">
              <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent-2" />
              <span className="text-[1.7vw]">Scanner AR</span>
            </motion.div>
            <motion.div {...animProps(0.76)} className="flex items-center gap-[1vw]">
              <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-primary" />
              <span className="text-[1.7vw]">Placement d'objets 3D</span>
            </motion.div>
            <motion.div {...animProps(0.83)} className="flex items-center gap-[1vw]">
              <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent" />
              <span className="text-[1.7vw]">Gestion du profil</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          {...animFromRight(0.35)}
          className="col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-[22vw] h-[44vh] rounded-[2.5vw] bg-gradient-to-br from-surface to-bg border-[0.4vw] border-text/15 shadow-2xl overflow-hidden">
            <div className="absolute top-[1vh] left-1/2 -translate-x-1/2 w-[6vw] h-[1vh] rounded-full bg-bg" />

            <div className="absolute inset-[1.5vw] top-[3vh] rounded-[1.5vw] bg-gradient-to-br from-primary/30 via-accent/20 to-accent-2/20 overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="relative h-full flex flex-col p-[1.2vw]">
                <div className="font-mono text-[0.95vw] text-text/70 tracking-widest">
                  AR · LIVING ROOM
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-[10vw] h-[10vw]">
                    <div className="absolute inset-0 rounded-[1vw] border-[0.2vw] border-primary/80" />
                    <div className="absolute -top-[0.4vw] -left-[0.4vw] w-[1vw] h-[1vw] border-t-[0.2vw] border-l-[0.2vw] border-primary" />
                    <div className="absolute -top-[0.4vw] -right-[0.4vw] w-[1vw] h-[1vw] border-t-[0.2vw] border-r-[0.2vw] border-primary" />
                    <div className="absolute -bottom-[0.4vw] -left-[0.4vw] w-[1vw] h-[1vw] border-b-[0.2vw] border-l-[0.2vw] border-primary" />
                    <div className="absolute -bottom-[0.4vw] -right-[0.4vw] w-[1vw] h-[1vw] border-b-[0.2vw] border-r-[0.2vw] border-primary" />
                    {!isExportView && (
                      <div
                        className="absolute inset-0 rounded-[1vw] border-[0.2vw] border-primary"
                        style={{ animation: "pulse-ring 2s ease-out infinite" }}
                      />
                    )}
                  </div>
                </div>
                <div className="rounded-[0.8vw] bg-bg/60 backdrop-blur p-[0.8vw]">
                  <div className="font-display font-semibold text-[1.1vw]">
                    Sofa · Modern
                  </div>
                  <div className="font-mono text-[0.85vw] text-primary mt-[0.3vh]">
                    PLACE IN ROOM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
