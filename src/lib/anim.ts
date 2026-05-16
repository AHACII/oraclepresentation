export const isExportView =
  typeof window !== "undefined" &&
  window.location.pathname.endsWith("/allslides");

export const animProps = (delay = 0, y = 24) =>
  isExportView
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
      };

export const animScale = (delay = 0) =>
  isExportView
    ? { initial: false, animate: { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.85 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
      };

export const animFromLeft = (delay = 0) =>
  isExportView
    ? { initial: false, animate: { opacity: 1, x: 0 } }
    : {
        initial: { opacity: 0, x: -40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
      };

export const animFromRight = (delay = 0) =>
  isExportView
    ? { initial: false, animate: { opacity: 1, x: 0 } }
    : {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
      };
