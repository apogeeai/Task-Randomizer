"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Shuffle } from "lucide-react"
import { useTheme } from "next-themes"

export function NavMenu() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 max-w-[1260px] mx-auto justify-between">
        <div className="flex items-center space-x-2">
          <Shuffle className="h-6 w-6" />
          <span className="text-xl font-semibold">TaskRoulette</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}