import { motion } from "framer-motion";
import { animProps, animScale, isExportView } from "@/lib/anim";

const base = import.meta.env.BASE_URL;

export default function Conclusion() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text font-body">
      <img
        src={`${base}hero.png`}
        crossOrigin="anonymous"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-bg via-bg/85 to-bg/40" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="orb"
        style={{
          width: "55vw",
          height: "55vw",
          bottom: "-25vw",
          left: "-15vw",
          background: "var(--slide-primary)",
        }}
      />
      <div
        className="orb"
        style={{
          width: "45vw",
          height: "45vw",
          top: "-20vw",
          right: "-15vw",
          background: "var(--slide-accent)",
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
          <span className="font-mono text-[1.4vw] tracking-[0.4em] text-primary uppercase">
            Conclusion Générale · 10 / 10
          </span>
        </motion.div>

        <div className="max-w-[80vw]">
          <motion.div
            {...animProps(0.2)}
            className="font-mono text-[1.5vw] tracking-[0.3em] uppercase text-muted mb-[2vh]"
          >
            Ce que nous avons construit
          </motion.div>
          <motion.h1
            {...animScale(0.3)}
            className="font-display font-bold tracking-tighter text-[8vw] leading-[0.9] text-balance"
          >
            <span className="text-text">Une expérience </span>
            <span className="shimmer-text">enrichissante</span>,
            <br />
            techniquement et humainement.
          </motion.h1>
          <motion.p
            {...animProps(0.55)}
            className="mt-[3vh] text-[2vw] text-text/80 leading-snug font-light max-w-[70vw]"
          >
            SmartHomeAR nous a permis d'acquérir des compétences solides en
            développement Android, en création d'API REST avec Spring Boot et
            en utilisation d'Oracle Database.
          </motion.p>
        </div>

        <motion.div
          {...animProps(0.8)}
          className="grid grid-cols-3 gap-[2vw] border-t border-text/15 pt-[3vh]"
        >
          <div>
            <div className="font-display font-bold text-[3.5vw] text-primary leading-none">
              Mobile
            </div>
            <div className="text-[1.4vw] text-muted mt-[0.8vh]">
              Kotlin · Jetpack Compose · ARCore
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-[3.5vw] text-accent leading-none">
              Backend
            </div>
            <div className="text-[1.4vw] text-muted mt-[0.8vh]">
              Spring Boot · API REST · IntelliJ
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-[3.5vw] text-accent-2 leading-none">
              Données
            </div>
            <div className="text-[1.4vw] text-muted mt-[0.8vh]">
              Oracle Database · Postman
            </div>
          </div>
        </motion.div>

        <motion.div
          {...animProps(1.0)}
          className="text-center"
        >
        </motion.div>
      </div>
    </div>
  );
}
