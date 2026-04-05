"use client"

import { useState } from "react"

export function Toggle({
  defaultChecked = false,
  disabled = false,
}: {
  defaultChecked?: boolean
  disabled?: boolean
}) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => {
        if (!disabled) setChecked(!checked)
      }}
      className={`relative h-6 w-11 rounded-full transition ${
        checked ? "bg-emerald-500" : "bg-white/20"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
          checked ? "left-5" : "left-0.5"
        }`}
      />
    </button>
  )
}
