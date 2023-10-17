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
        <div className="container mx-auto flex h-[63px] w-[100%] max-w-[1230px] justify-between px-[15px] ">
          <div className="my-auto flex lg:flex-1">
            <a href="#" className="">
              <img
                className="w-[148px] "
                src="https://tracuuthansohoc.com/wp-content/uploads/2023/02/logo-color-min.png"
                alt=""
              />
            </a>
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
                <a href="">Home</a>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Giới thiệu</a>
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
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Tra cứu</a>
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
                      <a
                        className="  mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        Tra cứu thần số học
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        Thần số học cho con
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px]  hover:text-fuchsia-800"
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Tra cứu DISC
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Dịch vụ</a>
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
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Thần số học trọn đời
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt tên danh xưng
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt Tên Khai Sinh
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Báo cáo định hướng nghề nghiệp
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đào tạo thần số học
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt tên thương hiệu
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Coaching 1-1 với chuyên gia
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Khóa học: Cân bằng năng lượng
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Blog</a>
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
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Kiến thức thần số học
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        DISC
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Cung hoàng đạo
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt tên
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Bói tình yêu
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Ý nghĩa các con số
                      </a>
                    </li>
                    <li className="w-[260px]  ">
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px]  hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        MBTI
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <a href="">Affiliate</a>
              </li>
              <li className="mr-[35px] inline-block">
                <a href="">Đăng nhập</a>
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
            className="absolute right-3 top-3 flex h-[30px] w-[30px] items-center justify-center bg-[#af3589]"
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
            <ul className="relative flex w-[100%] list-none flex-col items-center px-[30px] pt-[30px] text-left text-white">
              {MenuItemHeader("Home", [])}
              {MenuItemHeader("Giới thiệu", ["Liên hệ"])}
              {MenuItemHeader("Tra cứu", [
                "Tra cứu thần số học",
                "Tra cứu thần số học cho con",
                "Tra cứu DISC",
              ])}
              {MenuItemHeader("Dịch vụ", [
                "Mua vip thần số học",
                "Mua vip thần số học cho con",
                "Thần số học trọn đời",
                "Đặt tên danh xưng",
                "Đặt Tên Khai Sinh",
                "Báo cáo định hướng nghề nghiệp",
                "Đào tạo thần số học",
                "Đặt tên thương hiệu",
                "Coaching 1-1 với chuyên gia",
                "Khóa học: Cân bằng năng lượng",
              ])}
              {MenuItemHeader("Blog", [
                "Kiến thức Thần số học",
                "DISC",
                "Cung Hoàng Đạo",
                "Đặt tên",
                "Bói Tình Yêu",
                "Ý nghĩa các con số",
                "MBTI",
              ])}
              {MenuItemHeader("Affiliate", [])}
              <li className="relative m-0 flex w-[100%] flex-row flex-wrap  p-0">
                <div className="flex w-[100%] justify-between">
                  <Link className="p-[13px_0] text-base font-semibold" href="">
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
