import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animFromLeft, animFromRight, animScale } from "@/lib/anim";

const base = import.meta.env.BASE_URL;

export default function Backend() {
  return (
    <SlideShell chapter="" number="07 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] grid grid-cols-12 gap-[3vw]">
        <motion.div
          {...animFromLeft(0.2)}
          className="col-span-5 relative h-[68vh] flex items-center justify-center"
        >
          <img
            src={`${base}network.png`}
            crossOrigin="anonymous"
            alt="Network"
            className="w-full h-full object-cover rounded-[1.5vw] opacity-80"
          />
          <div className="absolute inset-0 rounded-[1.5vw] bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        </motion.div>

        <div className="col-span-7 flex flex-col justify-center">
          <motion.div
            {...animFromRight(0.1)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-accent mb-[2vh]"
          >
            Back-End · Spring Boot · API REST
          </motion.div>
          <motion.h2
            {...animProps(0.2)}
            className="font-display font-bold text-[4.8vw] leading-[0.95] tracking-tight text-balance"
          >
            Le pont entre Android et Oracle.
          </motion.h2>
          <motion.p
            {...animProps(0.4)}
            className="mt-[2.5vh] text-[1.7vw] text-text/80 leading-relaxed font-light"
          >
            Le backend assure la communication entre l'application Android et
            la base Oracle. Il gère les utilisateurs, produits, catégories, et
            les requêtes HTTP standard.
          </motion.p>

          <div className="mt-[3vh] grid grid-cols-4 gap-[1vw]">
            <motion.div
              {...animScale(0.55)}
              className="rounded-[0.8vw] bg-primary/15 border border-primary/40 px-[1vw] py-[1.5vh] text-center"
            >
              <div className="font-mono font-bold text-[1.8vw] text-primary">
                GET
              </div>
              <div className="text-[1.2vw] text-text/70 mt-[0.5vh]">Lire</div>
            </motion.div>
            <motion.div
              {...animScale(0.62)}
              className="rounded-[0.8vw] bg-accent/15 border border-accent/40 px-[1vw] py-[1.5vh] text-center"
            >
              <div className="font-mono font-bold text-[1.8vw] text-accent">
                POST
              </div>
              <div className="text-[1.2vw] text-text/70 mt-[0.5vh]">Créer</div>
            </motion.div>
            <motion.div
              {...animScale(0.69)}
              className="rounded-[0.8vw] bg-accent-2/15 border border-accent-2/40 px-[1vw] py-[1.5vh] text-center"
            >
              <div className="font-mono font-bold text-[1.8vw] text-accent-2">
                PUT
              </div>
              <div className="text-[1.2vw] text-text/70 mt-[0.5vh]">
                Modifier
              </div>
            </motion.div>
            <motion.div
              {...animScale(0.76)}
              className="rounded-[0.8vw] bg-text/10 border border-text/30 px-[1vw] py-[1.5vh] text-center"
            >
              <div className="font-mono font-bold text-[1.8vw] text-text">
                DELETE
              </div>
              <div className="text-[1.2vw] text-text/70 mt-[0.5vh]">
                Supprimer
              </div>
            </motion.div>
          </div>

          <motion.div
            {...animProps(0.9)}
            className="mt-[3vh] rounded-[0.8vw] bg-surface/70 border border-text/10 px-[1.5vw] py-[1.5vh] flex items-center gap-[1.5vw]"
          >
            <div className="font-mono text-[1.3vw] text-primary tracking-widest">
              POSTMAN
            </div>
            <div className="w-[2px] h-[3vh] bg-text/20" />
            <div className="text-[1.5vw] text-text/80">
              Tests des routes : ajout, consultation, modification, suppression.
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
