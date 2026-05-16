import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animFromLeft, animFromRight } from "@/lib/anim";

const base = import.meta.env.BASE_URL;

export default function Introduction() {
  return (
    <SlideShell chapter="" number="01 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] grid grid-cols-12 gap-[3vw] items-center">
        <div className="col-span-7">
          <motion.div
            {...animFromLeft(0.1)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-primary mb-[2vh]"
          >
            Introduction Générale
          </motion.div>
          <motion.h2
            {...animProps(0.2)}
            className="font-display font-bold text-[5.5vw] leading-[0.95] tracking-tight text-balance"
          >
            La maison, vue à travers
            <span className="shimmer-text"> une nouvelle lentille</span>.
          </motion.h2>
          <motion.p
            {...animProps(0.4)}
            className="mt-[4vh] text-[2vw] text-text/80 leading-relaxed font-light max-w-[42vw]"
          >
            Les applications mobiles intelligentes occupent une place centrale
            dans le secteur informatique. Avec la réalité augmentée, nous
            offrons une expérience immersive et interactive.
          </motion.p>
          <motion.p
            {...animProps(0.4)}
            className="mt-[2vh] text-[1.8vw] text-muted leading-relaxed max-w-[42vw]"
          >
            <span className="text-primary font-medium">SmartHomeAR</span> permet
            Visualisation d’équipements Smart Home en réalité augmentée.
          </motion.p>
        </div>

        <motion.div
          {...animFromRight(0.3)}
          className="col-span-5 relative h-[70vh] flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[28vw] h-[28vw] rounded-full border border-primary/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[34vw] h-[34vw] rounded-full border border-accent/20"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <img
            src={`${base}ar-phone.png`}
            crossOrigin="anonymous"
            alt="AR Phone"
            className="relative w-[26vw] h-[26vw] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
