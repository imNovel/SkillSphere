"use client";
import { Button } from "@heroui/react";
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        {/* 404 */}
        <motion.h1
          className="text-[120px] sm:text-[160px] font-black leading-none text-[#7c3aed]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          404
        </motion.h1>

        {/* Message */}
        <h2 className="text-xl sm:text-2xl font-bold text-default-800">
          Page Not Found
        </h2>
        <p className="text-sm text-default-400 max-w-sm">
          Looks like this page went off the curriculum. Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex gap-3 mt-2">
          <Link href="/">
            <Button className="bg-violet-600 text-white font-medium px-6">
              Go Home
            </Button>
          </Link>
          <Link href="/courses">
            <Button variant="bordered" className="font-medium px-6">
              Browse Courses
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}