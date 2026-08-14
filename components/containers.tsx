import React from 'react'
import { cn } from "@/lib/utils"

const Container = ({children, classname}: 
  {children: React.ReactNode; 
    classname?: string }) => {
  return (
    <div className={cn("relative max-w-4xl mx-auto w-full h-full bg-blue-50 dark:bg-neutral-950", classname)}>
        <div
          className="
          absolute right-2 sm:right-4 md:right-6
          top-0
          h-full
          border-l border-dashed
          border-black/20 dark:border-white/20
          "
        />

        <div
          className="
          pointer-events-none
          absolute left-2 sm:left-4 md:left-6
          top-0
          h-full
          border-r border-dashed
          border-black/20 dark:border-white/20
          "
        />

      {children}
      </div>
  )
}

export default Container;
