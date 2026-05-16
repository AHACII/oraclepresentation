import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { isExportView } from "@/lib/anim";

interface SlideShellProps {
  children: ReactNode;
  chapter?: string;
  number?: string;
}

export function SlideShell({ children, chapter, number }: SlideShellProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text font-body">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="orb"
        style={{
          width: "55vw",
          height: "55vw",
          top: "-15vw",
          left: "-15vw",
          background: "var(--slide-primary)",
        }}
      />
      <div
        className="orb"
        style={{
          width: "45vw",
          height: "45vw",
          bottom: "-20vw",
          right: "-15vw",
          background: "var(--slide-accent)",
          animationDelay: "2s",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/30 to-bg/80" />

      {(chapter || number) && (
        <motion.div
          initial={isExportView ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-[4vh] left-[5vw] right-[5vw] z-10 flex items-center justify-between font-mono text-[1.5vw] text-muted"
        >
          <div className="flex items-center gap-[1vw]">
            <span className="inline-block w-[2.5vw] h-[2px] bg-primary" />
            <span className="tracking-widest uppercase">SmartHomeAR</span>
          </div>
          {chapter && (
            <div className="tracking-widest uppercase">{chapter}</div>
          )}
          {number && (
            <div className="tracking-widest text-primary">{number}</div>
          )}
        </motion.div>
      )}

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
