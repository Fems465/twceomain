"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * A hero coin that fades/scales in, then bobs and rotates forever.
 * Positioning (left/top/width) is passed via `wrapperClassName`;
 * the animation only uses transforms, so it won't fight the layout.
 */
export function FloatingCoin({
  src,
  wrapperClassName,
  delay = 0,
  floatDuration = 4,
  floatOffset = 10,
  rotate = 4,
}: {
  src: StaticImageData;
  wrapperClassName?: string;
  delay?: number;
  floatDuration?: number;
  floatOffset?: number;
  rotate?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("absolute", wrapperClassName)}>
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.5, y: 24 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={
            reduce
              ? undefined
              : { y: [0, -floatOffset, 0], rotate: [0, rotate, 0] }
          }
          transition={{
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Image src={src} alt="" className="h-auto w-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
