import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animFromLeft, animFromRight } from "@/lib/anim";

export default function Database() {
  return (
    <SlideShell chapter="" number="04 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] grid grid-cols-12 gap-[3vw]">
        <div className="col-span-5 flex flex-col justify-center">
          <motion.div
            {...animFromLeft(0.1)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-primary mb-[2vh]"
          >
            Configuration Oracle
          </motion.div>
          <motion.h2
            {...animProps(0.2)}
            className="font-display font-bold text-[4.5vw] leading-[0.95] tracking-tight text-balance"
          >
            Une base
            <span className="shimmer-text"> structurée</span>, prête à servir.
          </motion.h2>
          <motion.p
            {...animProps(0.4)}
            className="mt-[3vh] text-[1.8vw] text-text/80 leading-relaxed font-light"
          >
            Création de l'utilisateur Oracle, attribution des permissions et
            définition des tables principales utilisées par l'application.
          </motion.p>

          <motion.div
            {...animProps(0.55)}
            className="mt-[4vh] grid grid-cols-3 gap-[1.5vw]"
          >
            <div className="rounded-[0.8vw] bg-surface/70 border border-text/10 px-[1.2vw] py-[1.5vh]">
              <div className="font-display font-bold text-[2.4vw] text-primary">
                3+
              </div>
              <div className="font-mono text-[1.1vw] text-muted tracking-wider mt-[0.4vh]">
                TABLES
              </div>
            </div>
            <div className="rounded-[0.8vw] bg-surface/70 border border-text/10 px-[1.2vw] py-[1.5vh]">
              <div className="font-display font-bold text-[2.4vw] text-accent">
                1
              </div>
              <div className="font-mono text-[1.1vw] text-muted tracking-wider mt-[0.4vh]">
                USER
              </div>
            </div>
            <div className="rounded-[0.8vw] bg-surface/70 border border-text/10 px-[1.2vw] py-[1.5vh]">
              <div className="font-display font-bold text-[2.4vw] text-accent-2">
                ∞
              </div>
              <div className="font-mono text-[1.1vw] text-muted tracking-wider mt-[0.4vh]">
                QUOTA
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...animFromRight(0.35)}
          className="col-span-7 self-center rounded-[1.2vw] bg-surface/80 border border-primary/30 backdrop-blur overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-[0.6vw] px-[1.5vw] py-[1.4vh] border-b border-text/10 bg-bg/50">
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-accent-2/80" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-primary/80" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-accent/80" />
            <div className="ml-[1vw] font-mono text-[1.2vw] text-muted">
              oracle · setup.sql
            </div>
          </div>
          <div className="p-[2vw] font-mono text-[1.45vw] leading-[1.7] text-text/90">
            <div>
              <span className="text-accent">CREATE USER</span>{" "}
              <span className="text-primary">backend</span>{" "}
              <span className="text-accent">IDENTIFIED BY</span> oracle2025;
            </div>
            <div>
              <span className="text-accent">GRANT</span> CONNECT, RESOURCE{" "}
              <span className="text-accent">TO</span>{" "}
              <span className="text-primary">backend</span>;
            </div>
            <div className="mt-[1.2vh]">
              <span className="text-accent">CREATE TABLE</span>{" "}
              <span className="text-primary">utilisateur</span> (
            </div>
            <div className="pl-[2vw] text-text/80">
              id_user <span className="text-accent-2">NUMBER</span> PRIMARY KEY,
            </div>
            <div className="pl-[2vw] text-text/80">
              nom <span className="text-accent-2">VARCHAR2</span>(100),
            </div>
            <div className="pl-[2vw] text-text/80">
              email <span className="text-accent-2">VARCHAR2</span>(100) UNIQUE,
            </div>
            <div className="pl-[2vw] text-text/80">
              role <span className="text-accent-2">VARCHAR2</span>(20)
            </div>
            <div>);</div>
            <div className="mt-[1.2vh]">
              <span className="text-accent">CREATE TABLE</span>{" "}
              <span className="text-primary">produit</span> (
            </div>
            <div className="pl-[2vw] text-text/80">
              id_produit <span className="text-accent-2">NUMBER</span> PRIMARY KEY,
            </div>
            <div className="pl-[2vw] text-text/80">
              nom <span className="text-accent-2">VARCHAR2</span>(100), prix{" "}
              <span className="text-accent-2">NUMBER</span>(10,2)
            </div>
            <div>);</div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
