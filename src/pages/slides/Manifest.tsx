import { motion } from "framer-motion";
import { SlideShell } from "@/components/SlideShell";
import { animProps, animScale } from "@/lib/anim";

export default function Manifest() {
  return (
    <SlideShell chapter="" number="08 / 10">
      <div className="h-full w-full px-[7vw] pt-[14vh] pb-[6vh] flex flex-col">
        <div className="mb-[5vh]">
          <motion.div
            {...animProps(0.05)}
            className="font-mono text-[1.5vw] tracking-widest uppercase text-primary mb-[1.5vh]"
          >
            AndroidManifest.xml &amp; ARCore
          </motion.div>
          <motion.h2
            {...animProps(0.15)}
            className="font-display font-bold text-[5vw] leading-[0.95] tracking-tight max-w-[70vw] text-balance"
          >
            Permissions et capteurs au cœur de l'expérience AR.
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-[3vw] flex-1">
          <motion.div
            {...animScale(0.3)}
            className="col-span-7 self-center rounded-[1.2vw] bg-surface/80 border border-primary/30 backdrop-blur overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-[0.6vw] px-[1.5vw] py-[1.4vh] border-b border-text/10 bg-bg/50">
              <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-accent-2/80" />
              <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-primary/80" />
              <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-accent/80" />
              <div className="ml-[1vw] font-mono text-[1.2vw] text-muted">
                AndroidManifest.xml
              </div>
            </div>
            <div className="p-[2vw] font-mono text-[1.5vw] leading-[1.7] text-text/90">
              <div className="text-muted">{'<!-- Permissions -->'}</div>
              <div>
                <span className="text-accent">{'<uses-permission'}</span>
              </div>
              <div className="pl-[2vw]">
                android:name=
                <span className="text-primary">
                  "android.permission.CAMERA"
                </span>{" "}
                <span className="text-accent">/{">"}</span>
              </div>
              <div className="mt-[1.2vh] text-muted">{'<!-- ARCore -->'}</div>
              <div>
                <span className="text-accent">{'<meta-data'}</span>
              </div>
              <div className="pl-[2vw]">
                android:name=
                <span className="text-primary">
                  "com.google.ar.core"
                </span>
              </div>
              <div className="pl-[2vw]">
                android:value=
                <span className="text-accent-2">"required"</span>{" "}
                <span className="text-accent">/{">"}</span>
              </div>
            </div>
          </motion.div>

          <div className="col-span-5 flex flex-col justify-center gap-[2vh]">
            <motion.div
              {...animScale(0.45)}
              className="rounded-[1vw] bg-gradient-to-br from-primary/15 to-transparent border border-primary/40 p-[1.8vw]"
            >
              <div className="font-mono text-[1.2vw] text-primary tracking-widest mb-[1vh]">
                CAMERA
              </div>
              <div className="font-display font-semibold text-[2.2vw] leading-tight">
                Capter le réel.
              </div>
              <div className="text-[1.5vw] text-muted leading-snug mt-[1vh]">
                Permission requise pour activer le flux vidéo de l'AR.
              </div>
            </motion.div>
            <motion.div
              {...animScale(0.6)}
              className="rounded-[1vw] bg-gradient-to-br from-accent-2/15 to-transparent border border-accent-2/40 p-[1.8vw]"
            >
              <div className="font-mono text-[1.2vw] text-accent-2 tracking-widest mb-[1vh]">
                GOOGLE ARCORE
              </div>
              <div className="font-display font-semibold text-[2.2vw] leading-tight">
                Augmenter l'espace.
              </div>
              <div className="text-[1.5vw] text-muted leading-snug mt-[1vh]">
                Intègre les fonctionnalités de réalité augmentée natives sur
                Android.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
