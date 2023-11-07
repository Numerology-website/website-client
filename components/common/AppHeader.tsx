"use client"

import { Modal } from "flowbite-react"
import Link from "next/link"
import { useState } from "react"
import MenuItemHeader from "./MenuItemHeader"

const AppHeader = () => {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }

  return (
    <>
      <div className="sticky top-0 z-10 bg-white">
        <div className="container mx-auto flex h-[63px] w-full max-w-[1230px] justify-between px-[15px] ">
          <div className="my-auto flex lg:flex-1">
            <Link href="/" className="">
              <img
                className="w-[148px] "
                src="https://tracuuthansohoc.com/wp-content/uploads/2023/02/logo-color-min.png"
                alt=""
              />
            </Link>
          </div>
          {/* Mobile Right Elements */}
          <div className=" mt-2 md:hidden ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => props.setOpenModal("default")}
            >
              <div className="show-for-medium flex flex-col">
                <ul>
                  <li>
                    <Link href="#" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-10 w-10 text-[#af3689]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                      <span className="absolute right-4 top-10  text-xs uppercase text-[#af3689]">
                        Menu
                      </span>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </button>
          </div>
          <div className="my-auto hidden text-base font-semibold text-black md:block lg:flex ">
            <ul className="justify-start">
              <li className="mr-[35px] inline-block ">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <Link href="/ve-chung-toi" className="mr-1">
                      Giới thiệu
                    </Link>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px] ">
                      <Link
                        className=" mx-[10px] block px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/lien-he"
                      >
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <Link href="/xem" className="mr-1">
                      Tra cứu
                    </Link>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px]">
                      <Link
                        className="  mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/xem"
                      >
                        Tra cứu thần số học
                      </Link>
                    </li>
                    <li className="w-[260px] ">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/xem/kids"
                      >
                        Thần số học cho con
                      </Link>
                    </li>
                    <li className="w-[260px] ">
                      <Link
                        className=" mx-[10px] block px-[5px] py-[15px]  hover:text-fuchsia-800"
                        href="/test-nghe-nghiep-disc"
                      >
                        {" "}
                        Tra cứu DISC
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <div className="mr-1">Dịch vụ</div>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/account/purchase"
                      >
                        {" "}
                        Mua vip thần số học
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/account/purchase_kid"
                      >
                        {" "}
                        Mua vip thần số học cho con
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/than-so-hoc-tron-doi"
                      >
                        {" "}
                        Thần số học trọn đời
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/danh-xung"
                      >
                        {" "}
                        Đặt tên danh xưng
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/ten-khai-sinh"
                      >
                        {" "}
                        Đặt Tên Khai Sinh
                      </Link>
                    </li>
                    <li className="w-[260px] ">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/nghe-nghiep"
                      >
                        {" "}
                        Báo cáo định hướng nghề nghiệp
                      </Link>
                    </li>
                    <li className="w-[260px] ">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/khoa-hoc-than-so-hoc"
                      >
                        {" "}
                        Đào tạo thần số học
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/dat-ten-thuong-hieu"
                      >
                        {" "}
                        Đặt tên thương hiệu
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/coaching"
                      >
                        {" "}
                        Coaching 1-1 với chuyên gia
                      </Link>
                    </li>
                    <li className="w-[260px] ">
                      <Link
                        className=" mx-[10px] block px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/can-bang-nang-luong"
                      >
                        {" "}
                        Khóa học: Cân bằng năng lượng
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <Link href="/kien-thuc" className="mr-1">
                      Blog
                    </Link>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/category/kien-thuc-nen-tang"
                      >
                        {" "}
                        Kiến thức thần số học
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/category/disc"
                      >
                        {" "}
                        DISC
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/category/cung-hoang-dao"
                      >
                        {" "}
                        Cung hoàng đạo
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/category/dat-ten"
                      >
                        {" "}
                        Đặt tên
                      </Link>
                    </li>
                    <li className="w-[260px]">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href=""
                      >
                        {" "}
                        Bói tình yêu
                      </Link>
                    </li>
                    <li className="w-[260px] ">
                      <Link
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="/y-nghia-cac-con-so"
                      >
                        {" "}
                        Ý nghĩa các con số
                      </Link>
                    </li>
                    <li className="w-[260px]  ">
                      <Link
                        className=" mx-[10px] block px-[5px] py-[15px]  hover:text-fuchsia-800 "
                        href="/category/mbti"
                      >
                        {" "}
                        MBTI
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <Link href="/affiliate">Affiliate</Link>
              </li>
              <li className="mr-[35px] inline-block">
                <Link href="/login">Đăng nhập</Link>
              </li>
              <li className="inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white p-5 pr-8 group-hover:block">
                    <li className="w-[260px]">
                      <div className="m-auto">
                        <div className="searchform-wrapper ux-search-box is-normal relative">
                          <form
                            method="get"
                            className="searchform"
                            action="https://beta.tracuuthansohoc.com/"
                            role="search"
                          >
                            <div className="relative flex flex-row">
                              <div className="flex-grow flex-col">
                                <input
                                  type="search"
                                  className="search-field mb-0"
                                  name="s"
                                  defaultValue=""
                                  id="s"
                                  placeholder="Search&hellip;"
                                />
                              </div>
                              <div className=" mr-4 flex-col">
                                <button
                                  type="submit"
                                  className=" mb-0 h-[42px] w-[42px] bg-orange-500"
                                  aria-label="Submit"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="mx-auto h-7 w-7 text-white"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="live-search-results z-top text-left"></div>
                          </form>
                        </div>{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Body className="fixed bottom-0 left-auto right-0 top-0 w-[300px] bg-[url(https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/bg_mobile_menu.jpg)] bg-cover bg-center bg-no-repeat p-0">
          <button
            onClick={() => props.setOpenModal(undefined)}
            className="fixed right-6 top-3 z-10 flex h-[30px] w-[30px] items-center justify-center bg-[#af3589]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-[30px_0]">
            <ul className="relative flex w-full list-none flex-col items-center px-[30px] pt-[30px] text-left text-white">
              {MenuItemHeader({ label: "Home", url: "/" }, [])}
              {MenuItemHeader({ label: "Giới thiệu", url: "/ve-chung-toi" }, [
                { label: "Liên hệ", url: "/lien-he" },
              ])}
              {MenuItemHeader({ label: "Tra cứu", url: "/xem" }, [
                { label: "Tra cứu thần số học", url: "/xem" },
                { label: "Tra cứu thần số học cho con", url: "/xem/kids" },
                { label: "Tra cứu DISC", url: "/test-nghe-nghiep-disc" },
              ])}
              {MenuItemHeader({ label: "Dịch vụ", url: "" }, [
                { label: "Mua vip thần số học", url: "/account/purchase" },
                {
                  label: "Mua vip thần số học cho con",
                  url: "/account/purchase_kid",
                },
                { label: "Thần số học trọn đời", url: "than-so-hoc-tron-doi" },
                { label: "Đặt tên danh xưng", url: "/danh-xung" },
                { label: "Đặt Tên Khai Sinh", url: "/ten-khai-sinh" },
                {
                  label: "Báo cáo định hướng nghề nghiệp",
                  url: "/nghe-nghiep",
                },
                { label: "Đào tạo thần số học", url: "/khoa-hoc-than-so-hoc" },
                { label: "Đặt tên thương hiệu", url: "/dat-ten-thuong-hieu" },
                { label: "Coaching 1-1 với chuyên gia", url: "/coaching" },
                {
                  label: "Khóa học: Cân bằng năng lượng",
                  url: "/can-bang-nang-luong",
                },
              ])}
              {MenuItemHeader({ label: "Blog", url: "/kien-thuc" }, [
                {
                  label: "Kiến thức Thần số học",
                  url: "/category/kien-thuc-nen-tang",
                },
                { label: "DISC", url: "/category/disc" },
                { label: "Cung Hoàng Đạo", url: "/category/cung-hoang-dao" },
                { label: "Đặt tên", url: "/category/dat-ten" },
                { label: "Bói Tình Yêu", url: "/boi-tinh-yeu" },
                { label: "Ý nghĩa các con số", url: "/y-nghia-cac-con-so" },
                { label: "MBTI", url: "/category/mbti" },
              ])}
              {MenuItemHeader({ label: "Affiliate", url: "/affiliate" }, [])}
              <li className="relative m-0 flex w-full flex-row flex-wrap  p-0">
                <div className="flex w-full justify-between">
                  <Link
                    className="p-[13px_0] text-base font-semibold"
                    href="/login"
                  >
                    Đăng nhập
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AppHeader
