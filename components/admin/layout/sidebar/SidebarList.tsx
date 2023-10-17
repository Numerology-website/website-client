"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

export const SidebarList = ({}) => {
  const segment = useSelectedLayoutSegment()
  const sidebarOptions = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      segment: "dashboard",
    },
    {
      name: "Users",
      href: "/admin/users",
      segment: "users",
    },
    {
      name: "Plans",
      href: "/admin/plans",
      segment: "plans",
    },
    {
      name: "Blogs",
      href: "/admin/blogs",
      segment: "blogs",
    },
    {
      name: "Numerology",
      href: "/admin/numerology",
      segment: "numerology",
    },
    {
      name: "Kid Numerology",
      href: "/admin/kid-numerology",
      segment: "kid-numerology",
    },
  ]
  return (
    <div className="px-3">
      <ul>
        {sidebarOptions.map((option) => {
          return (
            <li key={option.name} className="my-2">
              <Link
                className={`${
                  segment === option.segment
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } group flex items-center rounded-md px-2 py-2 text-sm font-medium no-underline`}
                href={option.href}
              >
                {option.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
