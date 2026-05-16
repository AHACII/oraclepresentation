import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animScale, isExportView } from "@/lib/anim";

export default function Architecture() {
  return (
    <SlideShell chapter="" number="03 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] flex flex-col">
        <div className="mb-[5vh]">
          <motion.div
            {...animProps(0.05)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-primary mb-[1.5vh]"
          >
            Architecture du Projet
          </motion.div>
          <motion.h2
            {...animProps(0.15)}
            className="font-display font-bold text-[5vw] leading-[0.95] tracking-tight max-w-[70vw] text-balance"
          >
            Une architecture client-serveur, claire et modulaire.
          </motion.h2>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-[2vw] items-center">
          <motion.div
            {...animScale(0.3)}
            className="rounded-[1.5vw] bg-gradient-to-br from-primary/15 to-transparent border border-primary/40 p-[2.5vw] h-[42vh] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-[1.5vh] right-[1.5vw] font-mono text-[1.2vw] text-primary">
              CLIENT
            </div>
            <div className="font-display font-bold text-[3vw] leading-tight mt-[3vh]">
              Application
              <br />
              Android
            </div>
            <div className="text-[1.6vw] text-text/70 leading-snug">
              Interface mobile développée avec Kotlin et Jetpack Compose.
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.45)}
            className="relative h-[40vh] flex items-center justify-center"
          >
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-primary via-accent to-accent-2" />
            {!isExportView && (
              <>
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[1vw] h-[1vw] rounded-full bg-primary"
                  style={{ animation: "pulse-ring 2s ease-out infinite" }}
                />
                <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[1vw] h-[1vw] rounded-full bg-accent-2"
                  style={{ animation: "pulse-ring 2s ease-out infinite 1s" }}
                />
              </>
            )}
            <div className="relative bg-surface/90 border border-accent/40 rounded-full px-[2.5vw] py-[2vh] backdrop-blur z-10">
              <div className="font-mono text-[1.4vw] text-accent tracking-widest text-center">
                API REST
              </div>
              <div className="font-display text-[1.6vw] text-text/80 text-center mt-[0.5vh]">
                HTTP · JSON
              </div>
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.6)}
            className="rounded-[1.5vw] bg-gradient-to-bl from-accent-2/15 to-transparent border border-accent-2/40 p-[2.5vw] h-[42vh] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-[1.5vh] right-[1.5vw] font-mono text-[1.2vw] text-accent-2">
              SERVEUR
            </div>
            <div className="font-display font-bold text-[3vw] leading-tight mt-[3vh]">
              Backend
              <br />
              Spring Boot
            </div>
            <div className="text-[1.6vw] text-text/70 leading-snug">
              Traite les requêtes et interagit avec Oracle Database.
            </div>
          </motion.div>
        </div>

        <motion.div
          {...animProps(0.85)}
          className="mt-[3vh] text-center text-[1.6vw] text-muted font-light"
        >
          L'application communique avec le backend via des API REST pour
          récupérer les données nécessaires.
        </motion.div>
      </div>
    </SlideShell>
  );
}
