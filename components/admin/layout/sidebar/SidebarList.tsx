"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export const SidebarList = ({}) => {
  const segment = useSelectedLayoutSegment();
  console.log({ segment });
  const sidebarOptions = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      name: "Users",
      href: "/admin/users",
    },
    {
      name: "Plans",
      href: "/admin/plans",
    },
  ];
  return <></>;
};
