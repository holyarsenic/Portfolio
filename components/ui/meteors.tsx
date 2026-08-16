"use client"

import React, {
  type CSSProperties,
} from "react"

import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

type MeteorStyle = CSSProperties & {
  "--angle": string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const meteors = Array.from(
    { length: number },
    (_, index) => {
      // Deterministic values.
      // No Math.random(), no state, no effect.
      const position =
        (index * 37 + 13) % 100

      const delayRatio =
        ((index * 47 + 11) % 100) / 100

      const durationRatio =
        ((index * 67 + 23) % 100) / 100

      const delay =
        minDelay +
        delayRatio *
          (maxDelay - minDelay)

      const duration =
        minDuration +
        durationRatio *
          (maxDuration - minDuration)

      const style: MeteorStyle = {
        "--angle": `${-angle}deg`,
        top: "-5%",
        left: `${position}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }

      return style
    }
  )

  return (
    <>
      {meteors.map((style, index) => (
        <span
          key={index}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          <span
            className="
              pointer-events-none
              absolute
              top-1/2
              -z-10
              h-px
              w-12.5
              -translate-y-1/2
              bg-linear-to-r
              from-zinc-500
              to-transparent
            "
          />
        </span>
      ))}
    </>
  )
}