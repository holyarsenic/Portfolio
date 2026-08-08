import React from 'react'
import { cn } from "@/lib/utils"

const Container = ({children, classname}: 
  {children: React.ReactNode; 
    classname?: string }) => {
  return (
    <div className={cn("relative max-w-4xl mx-auto w-full h-full bg-neutral-50 dark:bg-neutral-950", classname)}>
        <div
          className="
            absolute right-0 top-0
            h-full w-6
            border-l
            border-white
            border-dashed
            opacity-80
            dark:opacity-12
          "
        />

        <div
          className="
            absolute left-0 top-0
            h-full w-6
            border-r
            border-white
            border-dashed 
            opacity-80
            dark:opacity-12
          "
        />

      {children}
      </div>
  )
}

export default Container;
