import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animScale } from "@/lib/anim";

export default function Technologies() {
  return (
    <SlideShell chapter="" number="02 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] flex flex-col">
        <div className="mb-[5vh]">
          <motion.div
            {...animProps(0.05)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-primary mb-[1.5vh]"
          >
            Stack Technique
          </motion.div>
          <motion.h2
            {...animProps(0.15)}
            className="font-display font-bold text-[5vw] leading-[0.95] tracking-tight"
          >
            Les outils utilisés
          </motion.h2>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-[1.6vw] flex-1">
          <motion.div
            {...animScale(0.25)}
            className="col-span-2 row-span-2 relative rounded-[1.2vw] bg-surface/70 backdrop-blur border border-primary/30 p-[2.5vw] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-[6vw] -right-[6vw] w-[20vw] h-[20vw] rounded-full bg-primary/15 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-[1.4vw] text-primary tracking-widest mb-[2vh]">
                01 — FRONT
              </div>
              <div className="font-display font-bold text-[4.5vw] leading-none">
                Kotlin
              </div>
              <div className="font-display text-[2.2vw] text-text/80 mt-[1vh]">
                + Jetpack Compose
              </div>
            </div>
            <div className="relative text-[1.6vw] text-muted leading-relaxed">
              Langage moderne pour Android avec une bibliothèque UI déclarative
              pour des écrans fluides et expressifs.
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.35)}
            className="rounded-[1.2vw] bg-surface/70 backdrop-blur border border-text/10 p-[1.8vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-accent tracking-widest">
              02 — BACK
            </div>
            <div>
              <div className="font-display font-bold text-[2.6vw] leading-tight">
                Spring Boot
              </div>
              <div className="text-[1.5vw] text-muted mt-[1vh]">
                Framework Java pour les API REST.
              </div>
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.45)}
            className="rounded-[1.2vw] bg-surface/70 backdrop-blur border border-text/10 p-[1.8vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-accent-2 tracking-widest">
              03 — DATA
            </div>
            <div>
              <div className="font-display font-bold text-[2.6vw] leading-tight">
                Oracle DB
              </div>
              <div className="text-[1.5vw] text-muted mt-[1vh]">
                SGBD relationnel pour les données.
              </div>
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.55)}
            className="rounded-[1.2vw] bg-surface/70 backdrop-blur border border-text/10 p-[1.8vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-primary tracking-widest">
              04 — IDE
            </div>
            <div>
              <div className="font-display font-bold text-[2.4vw] leading-tight">
                Android Studio
              </div>
              <div className="text-[1.5vw] text-muted mt-[1vh]">
                Environnement principal Android.
              </div>
            </div>
          </motion.div>

          <motion.div
            {...animScale(0.6)}
            className="rounded-[1.2vw] bg-surface/70 backdrop-blur border border-text/10 p-[1.8vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-accent tracking-widest">
              05 — JAVA IDE
            </div>
            <div>
              <div className="font-display font-bold text-[2.6vw] leading-tight">
                IntelliJ
              </div>
              <div className="text-[1.5vw] text-muted mt-[1vh]">
                Développement Java &amp; Spring Boot.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
