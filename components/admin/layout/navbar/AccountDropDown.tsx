"use client"
import { Dropdown } from "flowbite-react"
import { signOut } from "next-auth/react"
export const AccountDropDown = () => {
  return (
    <Dropdown inline label="Account">
      <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}
