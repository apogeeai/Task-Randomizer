"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const dummyTasks = [
  "Review project documentation",
  "Update team meeting notes",
  "Prepare weekly report",
  "Schedule client call",
  "Research new technologies",
  "Fix bug in production",
  "Write unit tests",
  "Update dependencies",
]

export function HeroSection() {
  const [currentTask, setCurrentTask] = useState("")
  const [isSpinning, setIsSpinning] = useState(false)

  const getRandomTask = () => {
    setIsSpinning(true)
    let counter = 0
    const interval = setInterval(() => {
      setCurrentTask(dummyTasks[Math.floor(Math.random() * dummyTasks.length)])
      counter++
      if (counter > 10) {
        clearInterval(interval)
        setIsSpinning(false)
      }
    }, 100)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
      <div className="max-w-[1260px] w-full text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Get Your Next Task
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTask}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text"
            >
              {currentTask || "from Todoist"}
            </motion.span>
          </AnimatePresence>
        </h1>
        <p className="text-muted-foreground max-w-[42rem] mx-auto text-lg sm:text-xl">
          TaskRoulette helps you decide what to work on next by randomly selecting
          a task from your Todoist list. Stop procrastinating, start doing!
        </p>
        <Button
          size="lg"
          onClick={getRandomTask}
          disabled={isSpinning}
          className="text-lg px-8"
        >
          Give me a random task
        </Button>
      </div>
    </div>
  )
}