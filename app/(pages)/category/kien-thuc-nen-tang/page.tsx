"use client"

import Link from "next/link"
import { Pagination } from "flowbite-react"
import { useState } from "react"

export default function KienThucNenTang() {
  const itemsPerPage: number = 2
  const currentItems: [] = []
  let items = [
    {
      redirectUrl: "https://tracuuthansohoc.com/dat-ten-cong-ty/",
      srcImage:
        "https://tracuuthansohoc.com/wp-content/uploads/2023/09/dat-ten-cong-ty-5.jpg",
      title: "1Đặt tên công ty đem lại nhiều tài lộc, hút khách nhất 2023",
      content:
        "Đặt tên công ty vừa đơn giản, dễ nhớ, phù hợp và thu hút khách...",
    },
    {
      redirectUrl: "https://tracuuthansohoc.com/dat-ten-cong-ty/",
      srcImage:
        "https://tracuuthansohoc.com/wp-content/uploads/2023/09/dat-ten-cong-ty-5.jpg",
      title: "2Đặt tên công ty đem lại nhiều tài lộc, hút khách nhất 2023",
      content:
        "Đặt tên công ty vừa đơn giản, dễ nhớ, phù hợp và thu hút khách...",
    },
    {
      redirectUrl: "https://tracuuthansohoc.com/dat-ten-cong-ty/",
      srcImage:
        "https://tracuuthansohoc.com/wp-content/uploads/2023/09/dat-ten-cong-ty-5.jpg",
      title: "3Đặt tên công ty đem lại nhiều tài lộc, hút khách nhất 2023",
      content:
        "Đặt tên công ty vừa đơn giản, dễ nhớ, phù hợp và thu hút khách...",
    },
  ]
  function PaginatedItems() {
    const [currentPage, setCurrentPage] = useState(1)
    const onPageChange = (page: number) => setCurrentPage(page)
    const [itemOffset, setItemOffset] = useState(0)
    const endOffset = itemOffset + itemsPerPage
    const currentItems = items.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(items.length / itemsPerPage)

    const handlePageClick = (page: number) => {
      const newOffset = ((page - 1) * itemsPerPage) % items.length
      setCurrentPage(page)
      setItemOffset(newOffset)
    }
    function Items({ currentItems: [] }) {
      return (
        <>
          {currentItems &&
            currentItems.map(
              (
                item: {
                  redirectUrl: string
                  srcImage: string
                  title: string
                  content: string
                },
                index,
              ) => (
                <div
                  key={index + 1}
                  className="relative m-0 w-[100%] max-w-[25%] basis-[25%] p-[0_15px_30px]"
                >
                  <div className="relative ml-0 mr-auto w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                    <Link href={item.redirectUrl}>
                      <div className="relative m-[0_auto] w-[100%]">
                        <div className="relative m-[0_auto] h-auto overflow-hidden">
                          <div className="relative h-auto bg-cover bg-[50%_50%] pt-[56%]">
                            <img
                              className="absolute bottom-0 left-0 right-0 top-0 h-[100%] w-[100%]"
                              src={item.srcImage}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative w-[100%] pt-3 text-left">
                        <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                        <p className="mb-[10px] text-sm">{item.content}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ),
            )}
        </>
      )
    }
    return (
      <>
        <div className="relative m-0 w-[100%] basis-[100%] p-[0_15px_30px]">
          <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
            <Items currentItems={currentItems} />
          </div>
        </div>
        <div className="m-[5px_0] flex justify-center p-0">
          <Pagination
            currentPage={currentPage}
            onPageChange={(page) => {
              handlePageClick(page)
            }}
            showIcons
            totalPages={pageCount}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-[1230px] px-[15px]">
          <Link href="/" className="pr-1 text-[#af3689] hover:text-black">
            Trang chủ
          </Link>
          » Kiến thức nền tảng
        </div>
      </div>
      <div></div>
      <div className="relative">
        <div className="py-[30px]">
          <header className="block">
            <div className="mx-auto flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className=" m-0 block w-[100%] basis-[100%] p-[0_15px_30px]">
                <h1 className="  mb-4 mt-0 text-left text-[30px] font-bold uppercase leading-[1.2]">
                  Kiến thức nền tảng
                </h1>
                <ul className="mt-0 flex list-none flex-wrap p-0 ">
                  <li className="mr-[10px]">
                    <Link
                      href=""
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Các Chỉ Số Thần Số Học
                    </Link>
                  </li>
                  <li className="mr-[10px]">
                    <Link
                      href=""
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Ý Nghĩa Các Con Số Thần số học
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="mx-auto flex w-[100%] max-w-[1230px] flex-row flex-wrap justify-center">
            <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto flex-row flex-wrap px-0">
                <div className="relative m-0 w-[100%] max-w-[58%] basis-[58%] p-[0_15px_30px]">
                  <div className="relative m-[0_auto] h-auto overflow-hidden">
                    <Link href="">
                      <div className="relative h-auto overflow-hidden bg-cover bg-[50%_50%]">
                        <img
                          src="https://tracuuthansohoc.com/wp-content/uploads/2021/05/than-so-hoc-la-gi-a.jpg"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="relative w-[100%] bg-[#af368938] p-5 text-left">
                    <Link href="">
                      <h3 className="mb-[10px] text-2xl font-bold">
                        Thần Số Học Là Gì? Cách Biết Thần Số Học Của Mình Đơn
                        Giản Nhất
                      </h3>
                    </Link>
                    <p className="mb-[10px] text-sm">
                      Thần số học là gì? Đây là bộ môn nghiên cứu về mối quan hệ
                      thần bí giữa các con số và sự rung động của chúng.
                    </p>
                  </div>
                </div>
                <div className="relative m-0 w-[100%] max-w-[42%] basis-[42%] p-[0_15px_30px]">
                  <div className="relative ml-0 mr-auto w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                    <div className=" mb-5 border-b-2 border-[#af3689] pb-2  ">
                      <h2 className="mt-0 text-[15px] font-bold leading-[1.3]">
                        Bài viết nổi bật
                      </h2>
                    </div>
                    <div className="mx-[-2px] mb-0 h-[508px] w-auto overflow-y-auto px-0">
                      {/* blog nho phai */}
                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                        <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                          <Link href="">
                            <div className="relative  flex w-[100%] flex-row">
                              <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/cac-mui-ten-trong-than-so-hoc-1-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="relative w-[100%] pl-[10px] text-left">
                                <h3 className="mb-2 text-sm font-bold">
                                  Các Mũi Tên Trong Thần Số Học Là Gì? Ý Nghĩa
                                  Như Thế Nào?
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
              <h2 className=" mb-2 text-2xl font-bold">Bài viết mới nhất</h2>
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                {/* blog */}
                {/* <div className="relative m-0 w-[100%] max-w-[25%] basis-[25%] p-[0_15px_30px]">
                  <div className="relative ml-0 mr-auto w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                    <Link href="https://tracuuthansohoc.com/dat-ten-cong-ty/">
                      <div className="relative m-[0_auto] w-[100%]">
                        <div className="relative m-[0_auto] h-auto overflow-hidden">
                          <div className="relative h-auto bg-cover bg-[50%_50%] pt-[56%]">
                            <img
                              className="absolute bottom-0 left-0 right-0 top-0 h-[100%] w-[100%]"
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/dat-ten-cong-ty-5.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative w-[100%] pt-3 text-left">
                        <h3 className="mb-1 text-lg font-bold">
                          Đặt tên công ty đem lại nhiều tài lộc, hút khách nhất
                          2023
                        </h3>
                        <p className="mb-[10px] text-sm">
                          Đặt tên công ty vừa đơn giản, dễ nhớ, phù hợp và thu
                          hút khách...{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div> */}
              </div>
              <div className="m-[5px_0] flex justify-center p-0"></div>
            </div>
            <PaginatedItems />,
            <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-[100%] p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-[100%]">
                    <div className="mx-auto mb-6 flex w-[100%] justify-between px-0">
                      <h2 className="mr-[10px] w-auto text-2xl font-bold">
                        Các Chỉ Số Thần Số Học
                      </h2>
                      <div className="mb-2 w-[68%] border-b-2 border-[#af3689]"></div>
                      <Link
                        className="ml-auto pl-[15px] text-sm font-bold text-[#af3689] hover:text-black"
                        href="/category/kien-thuc-nen-tang/chi-so/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                    {/* blog */}
                    <div className=" relative w-[100%] max-w-[50%]  basis-[50%] p-[0_15px_30px]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-[100%]">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-[100%] text-sm font-bold">
                                Các chỉ số thần số học: Ảnh hưởng của từng con
                                số đến cuộc đời mỗi người
                              </h3>
                              <div className="text-sm">28/09/2023</div>
                              <p className="mb-[10px] text-sm">
                                Các chỉ số thần số học sẽ cho bạn biết được bản
                                thân mình là...{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className=" relative w-[100%] max-w-[50%]  basis-[50%] p-[0_15px_30px]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-[100%]">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-[100%] text-sm font-bold">
                                Các chỉ số thần số học: Ảnh hưởng của từng con
                                số đến cuộc đời mỗi người
                              </h3>
                              <div className="text-sm">28/09/2023</div>
                              <p className="mb-[10px] text-sm">
                                Các chỉ số thần số học sẽ cho bạn biết được bản
                                thân mình là...{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-[100%] p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-[100%]">
                    <div className="mx-auto mb-6 flex w-[100%] justify-between px-0">
                      <h2 className="mr-[10px] w-auto text-2xl font-bold">
                        Ý Nghĩa Các Con Số Thần Số Học
                      </h2>
                      <div className="mb-2 w-[59%] border-b-2 border-[#af3689]"></div>
                      <Link
                        className="ml-auto pl-[15px] text-sm font-bold text-[#af3689] hover:text-black"
                        href="/category/kien-thuc-nen-tang/cac-con-so/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                    {/* blog */}
                    <div className=" relative w-[100%] max-w-[50%]  basis-[50%] p-[0_15px_30px]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-[100%]">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-[100%] text-sm font-bold">
                                Các chỉ số thần số học: Ảnh hưởng của từng con
                                số đến cuộc đời mỗi người
                              </h3>
                              <div className="text-sm">28/09/2023</div>
                              <p className="mb-[10px] text-sm">
                                Các chỉ số thần số học sẽ cho bạn biết được bản
                                thân mình là...{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className=" relative w-[100%] max-w-[50%]  basis-[50%] p-[0_15px_30px]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-[100%]">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-[100%] text-sm font-bold">
                                Các chỉ số thần số học: Ảnh hưởng của từng con
                                số đến cuộc đời mỗi người
                              </h3>
                              <div className="text-sm">28/09/2023</div>
                              <p className="mb-[10px] text-sm">
                                Các chỉ số thần số học sẽ cho bạn biết được bản
                                thân mình là...{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
