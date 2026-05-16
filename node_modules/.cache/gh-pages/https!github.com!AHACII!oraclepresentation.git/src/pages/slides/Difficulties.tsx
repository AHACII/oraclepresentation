import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animScale } from "@/lib/anim";

export default function Difficulties() {
  return (
    <SlideShell chapter="" number="09 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] flex flex-col">

        {/* HEADER */}
        <div className="mb-[5vh] grid grid-cols-12 gap-[3vw] items-end">
          <div className="col-span-7">
            <motion.div
              {...animProps(0.05)}
              className="font-mono text-[1.5vw] tracking-widest uppercase text-accent-2 mb-[1.5vh]"
            >
              Difficultés Rencontrées
            </motion.div>

            <motion.h2
              {...animProps(0.15)}
              className="font-display font-bold text-[5vw] leading-[0.95] tracking-tight"
            >
              Quatre obstacles,
              <br />
              <span className="shimmer-text">Quatre leçons</span>.
            </motion.h2>
          </div>

          <motion.p
            {...animProps(0.3)}
            className="col-span-5 text-[1.6vw] text-muted leading-snug"
          >
            Chaque difficulté a renforcé notre maîtrise des outils et de
            l'écosystème mobile Android.
          </motion.p>
        </div>

        {/* GRID (4 cards only) */}
        <div className="grid grid-cols-4 gap-[1.5vw] flex-1">

          {/* 01 */}
          <motion.div
            {...animScale(0.3)}
            className="rounded-[1vw] bg-surface/70 border border-text/10 p-[1.6vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-primary tracking-widest">
              01
            </div>
            <div>
              <div className="font-display font-semibold text-[1.9vw] leading-tight">
                Configuration ARCore
              </div>
              <div className="text-[1.3vw] text-muted leading-snug mt-[1vh]">
                Mise en place du SDK et des dépendances AR.
              </div>
            </div>
          </motion.div>

          {/* 02 */}
          <motion.div
            {...animScale(0.4)}
            className="rounded-[1vw] bg-surface/70 border border-text/10 p-[1.6vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-accent tracking-widest">
              02
            </div>
            <div>
              <div className="font-display font-semibold text-[1.9vw] leading-tight">
                Compatibilité Android
              </div>
              <div className="text-[1.3vw] text-muted leading-snug mt-[1vh]">
                Variabilité des appareils et versions du système.
              </div>
            </div>
          </motion.div>

          {/* 03 (removed) */}

          {/* 04 */}
          <motion.div
            {...animScale(0.6)}
            className="rounded-[1vw] bg-surface/70 border border-text/10 p-[1.6vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-primary tracking-widest">
              03
            </div>
            <div>
              <div className="font-display font-semibold text-[1.9vw] leading-tight">
                Dépendances Gradle
              </div>
              <div className="text-[1.3vw] text-muted leading-snug mt-[1vh]">
                Gestion des versions et résolution des conflits.
              </div>
            </div>
          </motion.div>

          {/* 05 */}
          <motion.div
            {...animScale(0.7)}
            className="rounded-[1vw] bg-surface/70 border border-text/10 p-[1.6vw] flex flex-col justify-between"
          >
            <div className="font-mono text-[1.2vw] text-accent tracking-widest">
              04
            </div>
            <div>
              <div className="font-display font-semibold text-[1.9vw] leading-tight">
                Communication Android · Spring
              </div>
              <div className="text-[1.3vw] text-muted leading-snug mt-[1vh]">
                Sérialisation, gestion d'erreurs, formats de réponse.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SlideShell>
  );
}