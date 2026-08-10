"use client"

import { motion, type Transition } from "motion/react"
import * as React from "react"

import { Button } from "./button"
import { cn } from "@/lib/utils"

interface Position {
  x: number
  y: number
}

export interface MagneticButtonProps extends React.ComponentProps<typeof Button> {
  transition?: Transition
}

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
}

export function MagneticButton({
  children,
  className,
  transition = DEFAULT_TRANSITION,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);

  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const node = ref.current;

    if (!node) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } =
      node.getBoundingClientRect();

    setPosition({
      x: clientX - (left + width / 2),
      y: clientY - (top + height / 2),
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Button
      render={
        <motion.button
          ref={ref}
          animate={{
            x: position.x,
            y: position.y,
          }}
          transition={transition}
          whileTap={{ scale: 0.95 }}
        />
      }
      nativeButton
      data-slot="magnetic-button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative transition-none active:translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export default MagneticButton
