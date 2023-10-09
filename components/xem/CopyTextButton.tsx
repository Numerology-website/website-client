"use client"

import { useState } from "react"

export const CopyTextButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <button
      className="btn btn-primary rounded-md px-2 py-1 text-xs"
      onClick={() => {
        navigator.clipboard.writeText(text)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1000)
      }}
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  )
}
