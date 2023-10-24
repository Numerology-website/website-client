"use client"

import LogoWhiteText from "@/public/assets/images/logo-white-text.png"
import {
  MagnifyingGlassIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import { Dropdown, Navbar } from "flowbite-react"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaSignOutAlt } from "react-icons/fa"
import { FaPeopleCarryBox, FaPerson } from "react-icons/fa6"
import { IoWater } from "react-icons/io5"
import { LuClipboardEdit, LuHistory } from "react-icons/lu"
import { RiUserSettingsLine } from "react-icons/ri"

export const NavbarWithDropdown = ({
  session,
  isForKid = false,
}: {
  session: Session | null
  isForKid?: boolean
}) => {
  const router = useRouter()
  const background = isForKid
    ? "from-[#592397] to-[#590491]"
    : "from-[#001c31] to-[#17143f]"
  return (
    <div className={`bg-gradient-to-b ${background}`}>
      <Navbar
        fluid
        className={`container mx-auto bg-gradient-to-b ${background}`}
      >
        <Navbar.Brand href="/">
          <Image src={LogoWhiteText} alt="logo" width={180} height={50} />
        </Navbar.Brand>
        <div className="flex">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Dropdown
            arrowIcon
            inline
            label={
              <div className="flex items-center gap-2 text-white">
                <MagnifyingGlassIcon className="h-4 w-4" />
                <span>Tra cứu</span>
              </div>
            }
            theme={{ arrowIcon: "text-white" }}
          >
            <Dropdown.Item>
              <Link href={"/xem"} className="flex w-full items-center gap-2">
                <IoWater />
                <span>Thần số học</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href={"/xem/kids"}
                className="flex w-full items-center gap-2"
              >
                <FaPerson />
                <span>Thần số học cho con</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href={"/xem/disc"}
                className="flex w-full items-center gap-2"
              >
                <LuClipboardEdit />
                <span>Trắc nghiệm DISC</span>
              </Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            arrowIcon
            inline
            label={
              <div className="flex items-center gap-2 text-white">
                <ShoppingBagIcon className="h-4 w-4" />
                <span>Mua Vip</span>
              </div>
            }
            theme={{ arrowIcon: "text-white" }}
          >
            <Dropdown.Item>
              <Link
                href={"/account/purchase"}
                className="flex w-full items-center gap-2"
              >
                <IoWater />
                <span>Mua Vip thần số học</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href={"/account/purchase_kid"}
                className="flex w-full items-center gap-2"
              >
                <FaPerson />
                <span>Mua Vip thần số học cho con</span>
              </Link>
            </Dropdown.Item>
          </Dropdown>
          {session ? (
            <Dropdown
              arrowIcon
              inline
              label={
                <div className="flex items-center gap-2 text-white">
                  <UserIcon className="h-4 w-4" />
                  <span>Tài khoản</span>
                </div>
              }
              theme={{
                arrowIcon: "text-white",
              }}
            >
              <Dropdown.Header>{session.user.full_name}</Dropdown.Header>
              <Dropdown.Item>
                <Link
                  href={"/account/affiliate"}
                  className="flex w-full items-center gap-2"
                >
                  <FaPeopleCarryBox className="h-4 w-4" />
                  <span>Mã giới thiệu</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href={"/account/history"}
                  className="flex w-full items-center gap-2"
                >
                  <LuHistory className="h-4 w-4" />
                  <span>Lịch sử tra cứu</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href={"/account/purchased"}
                  className="flex w-full items-center gap-2"
                >
                  <ShoppingBagIcon className="h-4 w-4" />
                  <span>Đã mua</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href={"/account"}
                  className="flex w-full items-center gap-2"
                >
                  <RiUserSettingsLine className="h-4 w-4" />
                  <span>Thông tin</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href={"/account"}
                  className="flex w-full items-center gap-2"
                >
                  <ShieldExclamationIcon className="h-4 w-4" />
                  <span>Đổi mật khẩu</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href={"/account"}
                  className="flex w-full items-center gap-2"
                >
                  <RiUserSettingsLine className="h-4 w-4" />
                  <span>Thông tin</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <div
                  className="flex w-full items-center gap-2"
                  onClick={() => {
                    signOut()
                    router.push("/xem")
                  }}
                >
                  <FaSignOutAlt className="h-4 w-4" />
                  <span>Đăng xuất</span>
                </div>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link href={"/login"} className="text-white">
              Đăng ký / Đăng nhập
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
