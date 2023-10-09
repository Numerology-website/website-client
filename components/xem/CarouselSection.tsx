"use client"

import { cn } from "@/utils/helpers"
import { useEffect, useMemo, useState } from "react"

export const CarouselSection = () => {
  const bgClasses = [
    "bg-sign-balance-bg",
    "bg-sign-birthday-bg",
    "bg-sign-core-bg",
    "bg-sign-personality-bg",
    "bg-sign-rational-bg",
    "bg-sign-soulurge-bg",
  ]
  const [activeBgIndex, setActiveBgIndex] = useState<number>(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBgIndex((activeBgIndex + 1) % bgClasses.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeBgIndex, bgClasses.length])
  const defaultClass =
    "animate-sign-pulse absolute my-[10px] h-[180px] w-[180px] rounded-full border-2 border-solid border-white bg-cover bg-center bg-no-repeat shadow-[0_0_9px_4px_rgb(255,255,255,80%)] duration-[2000ms]"
  return (
    <div className="relative flex h-[200px] justify-center">
      <div className="bg-sign-mandala-bg animate-spin-slow absolute h-[200px] w-[200px] bg-cover bg-center bg-no-repeat"></div>
      <div className={cn(defaultClass, bgClasses[activeBgIndex])}></div>
    </div>
  )
}
