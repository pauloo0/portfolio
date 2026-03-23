import { useTheme } from "@/hooks/useTheme"
import { useEffect, useState } from "react"

const ENERGY_COOLDOWN_SECONDS = 15
const ENERGY_DURATION_SECONDS = 5

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [timeLeft, setTimeLeft] = useState(ENERGY_DURATION_SECONDS)
  const [onCooldown, setOnCooldown] = useState(false)
  const [cooldownTimeLeft, setCooldownTimeLeft] = useState(
    ENERGY_COOLDOWN_SECONDS,
  )

  useEffect(() => {
    if (theme === "energy") {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)

        if (timeLeft < 1) {
          setTheme("calm")
          setTimeLeft(ENERGY_DURATION_SECONDS)
          setOnCooldown(true)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [theme, timeLeft, setTheme])

  useEffect(() => {
    if (theme === "calm" && onCooldown) {
      const interval = setInterval(() => {
        setCooldownTimeLeft((prevTime) => prevTime - 1)

        if (cooldownTimeLeft < 1) {
          setCooldownTimeLeft(ENERGY_COOLDOWN_SECONDS)
          setOnCooldown(false)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [theme, onCooldown, cooldownTimeLeft])

  return (
    <button
      onClick={() => setTheme(theme === "calm" ? "energy" : "calm")}
      className="px-6 py-2 rounded-button bg-surface-container-high hover:bg-surface-bright text-primary border border-outline-variant transition-all font-label uppercase text-sm tracking-widest cursor-pointer"
      disabled={onCooldown}
    >
      {theme === "calm"
        ? `Activate Energy ${onCooldown ? `(Wait ${cooldownTimeLeft}s)` : ""}`
        : `Return to Calm (Time left: ${timeLeft}s)`}
    </button>
  )
}
