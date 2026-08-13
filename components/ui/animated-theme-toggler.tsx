"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number

  /** When true, the transition expands from the viewport center instead of the button center. */
  fromCenter?: boolean

  /**
   * Controlled theme value. When provided, the parent owns persistence.
   */
  theme?: "light" | "dark"

  /** Called on toggle. Pair with `theme` for controlled usage. */
  onThemeChange?: (theme: "light" | "dark") => void
}

function getDiamondClipPaths(
  cx: number,
  cy: number,
  maxRadius: number,
  viewportWidth: number,
  viewportHeight: number
): [string, string] {
  const toX = (x: number) =>
    `${(x / viewportWidth) * 100}%`

  const toY = (y: number) =>
    `${(y / viewportHeight) * 100}%`

  const point = (x: number, y: number) =>
    `${toX(x)} ${toY(y)}`

  /*
   * Diamond reveal.
   *
   * The starting diamond is collapsed to the
   * transition origin.
   */
  const start = [
    point(cx, cy),
    point(cx, cy),
    point(cx, cy),
    point(cx, cy),
  ].join(", ")

  /*
   * Slightly oversize the diamond so it completely
   * covers the viewport.
   */
  const R = maxRadius * Math.SQRT2

  const end = [
    point(cx, cy - R),
    point(cx + R, cy),
    point(cx, cy + R),
    point(cx - R, cy),
  ].join(", ")

  return [
    `polygon(${start})`,
    `polygon(${end})`,
  ]
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  fromCenter = true,
  theme,
  onThemeChange,
  ...props
}: AnimatedThemeTogglerProps) => {
  const isControlled = theme !== undefined

  const [internalIsDark, setInternalIsDark] =
    useState(false)

  const isDark = isControlled
    ? theme === "dark"
    : internalIsDark

  const buttonRef =
    useRef<HTMLButtonElement>(null)

  const isTransitioningRef =
    useRef(false)

  const activeAnimRef =
    useRef<Animation | null>(null)

  const cancelAnim = useCallback(() => {
    activeAnimRef.current?.cancel()
    activeAnimRef.current = null
  }, [])

  useEffect(() => {
    return () => {
      cancelAnim()

      const root = document.documentElement

      if (
        root.dataset.magicuiThemeVt !== "active"
      ) {
        return
      }

      delete root.dataset.magicuiThemeVt

      root.style.removeProperty(
        "--magicui-theme-toggle-vt-duration"
      )

      root.style.removeProperty(
        "--magicui-theme-vt-clip-from"
      )
    }
  }, [cancelAnim])

  useEffect(() => {
    if (isControlled) return

    const updateTheme = () => {
      setInternalIsDark(
        document.documentElement.classList.contains(
          "dark"
        )
      )
    }

    updateTheme()

    const observer =
      new MutationObserver(updateTheme)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [isControlled])

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current

    if (
      !button ||
      isTransitioningRef.current ||
      document.documentElement.dataset
        .magicuiThemeVt === "active"
    ) {
      return
    }

    /*
     * Use innerWidth / innerHeight because the
     * View Transition snapshot uses this reference box.
     */
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let x: number
    let y: number

    if (fromCenter) {
      x = viewportWidth / 2
      y = viewportHeight / 2
    } else {
      const {
        top,
        left,
        width,
        height,
      } = button.getBoundingClientRect()

      x = left + width / 2
      y = top + height / 2
    }

    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    )

    const applyTheme = () => {
      const newTheme = !isDark

      document.documentElement.classList.toggle(
        "dark"
      )

      if (isControlled) {
        onThemeChange?.(
          newTheme ? "dark" : "light"
        )
      } else {
        setInternalIsDark(newTheme)

        localStorage.setItem(
          "theme",
          newTheme ? "dark" : "light"
        )
      }
    }

    /*
     * Browser fallback.
     */
    if (
      typeof document.startViewTransition !==
      "function"
    ) {
      applyTheme()
      return
    }

    const clipPath = getDiamondClipPaths(
      x,
      y,
      maxRadius,
      viewportWidth,
      viewportHeight
    )

    const root = document.documentElement

    root.dataset.magicuiThemeVt =
      "active"

    root.style.setProperty(
      "--magicui-theme-toggle-vt-duration",
      `${duration}ms`
    )

    /*
     * Start with a collapsed diamond.
     */
    root.style.setProperty(
      "--magicui-theme-vt-clip-from",
      clipPath[0]
    )

    const cleanup = () => {
      isTransitioningRef.current = false

      delete root.dataset.magicuiThemeVt

      root.style.removeProperty(
        "--magicui-theme-toggle-vt-duration"
      )

      root.style.removeProperty(
        "--magicui-theme-vt-clip-from"
      )

      cancelAnim()
    }

    isTransitioningRef.current = true

    const transition =
      document.startViewTransition(() => {
        flushSync(applyTheme)
      })

    if (
      typeof transition?.finished?.finally ===
      "function"
    ) {
      transition.finished
        .finally(cleanup)
        .catch(() => {})
    } else {
      cleanup()
    }

    const ready = transition?.ready

    if (
      ready &&
      typeof ready.then === "function"
    ) {
      ready
        .then(() => {
          const anim =
            document.documentElement.animate(
              {
                clipPath,
              },
              {
                duration,
                easing: "ease-in-out",
                fill: "forwards",
                pseudoElement:
                  "::view-transition-new(root)",
              }
            )

          activeAnimRef.current = anim
        })
        .catch(() => {})
    }
  }, [
    fromCenter,
    duration,
    isDark,
    isControlled,
    onThemeChange,
    cancelAnim,
  ])

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}

      <span className="sr-only">
        Toggle theme
      </span>
    </button>
  )
}