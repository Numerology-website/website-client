"use client";
import { Dropdown } from "flowbite-react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
export const AccountDropDown = () => {
  return (
    <Dropdown inline label="Account">
      <Dropdown.Item onClick={() => redirect("/admin/users/change-password")}>
        Change password
      </Dropdown.Item>
      <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};
