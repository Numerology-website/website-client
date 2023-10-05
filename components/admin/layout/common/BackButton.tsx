import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { FC } from "react"

interface BackButtonProps {
  href: string
}
export const BackButton: FC<BackButtonProps> = ({ href }) => {
  return (
    <Link href={href}>
      <ArrowLeftIcon className="h-6 w-6 rounded-md border border-solid border-black" />
    </Link>
  )
}
