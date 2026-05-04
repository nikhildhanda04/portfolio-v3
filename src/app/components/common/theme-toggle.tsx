"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button" // Assuming you have a shadcn/ui button component
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  const handleThemeChange = React.useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light"
    
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      ;(document as Document & { startViewTransition: (callback: () => void) => void }).startViewTransition(() => {
        setTheme(newTheme)
      })
    } else {
      setTheme(newTheme)
    }
  }, [theme, setTheme])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-stone-900 active:translate-y-0 active:shadow-sm"
      >
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeChange}
      className="w-10 h-10 rounded-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-stone-900 active:translate-y-0 active:shadow-sm"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]"/>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}