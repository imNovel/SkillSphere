'use client';
import { motion } from "motion/react";
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-violet-200 border-t-violet-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />

      {/* Text */}
      <motion.p
        className="text-sm text-default-400 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading...
      </motion.p>
    </div>
  );
}