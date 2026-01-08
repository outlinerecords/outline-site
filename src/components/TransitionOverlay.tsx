"use client";

import { motion } from "framer-motion";

export default function TransitionOverlay() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 origin-top bg-black z-50 pointer-events-none"
    />
  );
}
