import Link from "next/link"
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs"
import { EBlogType } from "@/interfaces/blogs.interface"
import { PaginatedBlogs } from "@/components/blogs/PaginatedBlogs"
import { BlogService } from "@/app/services/blogs/blogs.service"
import moment from "moment"
import { shortenWithCommas } from "@/utils/helpers"

export default async function KienThuc() {
  const horoscopeBlogs = await BlogService.getBlogsByType(EBlogType.HOROSCOPE)
  const childBlogs = await BlogService.getBlogsByType(EBlogType.CHILD)
  const numerologyBlogs = await BlogService.getBlogsByType(EBlogType.NUMEROLOGY)

  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-[1230px] px-[15px]">
          <Link href="/" className="pr-1 text-[#af3689] hover:text-black">
            Trang chủ
          </Link>
          » Khiến thức
        </div>
      </div>
      <div></div>
      <div className="relative">
        <div className="py-[30px]">
          <header className="block">
            <div className="mx-auto flex w-full max-w-[1230px] flex-row flex-wrap">
              <div className=" m-0 block w-full basis-full p-[0_15px_30px]">
                <h1 className="  mb-4 mt-0 text-left text-[30px] font-bold uppercase leading-[1.2]">
                  Kiến thức
                </h1>
                <ul className="mt-0 flex list-none flex-wrap p-0 ">
                  <li className="mb-3 mr-[10px]">
                    <Link
                      href="#numerology"
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Kiến Thức Thần Số Học
                    </Link>
                  </li>
                  <li className="mb-3 mr-[10px]">
                    <Link
                      href="#cung-hoang-dao"
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Cung hoàng đạo
                    </Link>
                  </li>
                  <li className="mb-3 mr-[10px]">
                    <Link
                      href="#lib-vid"
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Thư viện video
                    </Link>
                  </li>
                  <li className="mb-3 mr-[10px]">
                    <Link
                      href="#dat-ten-cho-con"
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Đặt tên cho con
                    </Link>
                  </li>
                  <li className="mb-3 mr-[10px]">
                    <Link
                      href="#disc"
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Disc
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="mx-auto flex w-full max-w-[1230px] flex-row flex-wrap justify-center">
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto flex-row flex-wrap px-0">
                <FeaturedBlogs type={EBlogType.NUMEROLOGY} />
              </div>
            </div>

            <PaginatedBlogs documents={numerologyBlogs.items} />
            <div
              id="numerology"
              className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]"
            >
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] inline w-auto border-b-2 border-[#af3689] pb-3 text-2xl font-bold md:whitespace-nowrap md:border-none md:pb-0">
                        Kiến thức thần số học
                      </h2>
                      <div className="mb-2 hidden w-[59%] border-b-2 border-[#af3689] md:block"></div>
                      <Link
                        className="ml-auto hidden whitespace-nowrap pl-[15px] text-sm font-bold text-[#af3689] hover:text-black md:block"
                        href="/category/cung-hoang-dao/faqs/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-col flex-wrap px-0 md:flex-row">
                    {/* blog */}
                    <div className="flex w-full  max-w-full basis-full flex-row flex-wrap md:max-w-[67%] md:basis-2/3">
                      {numerologyBlogs.items.slice(0, 4).map((item, index) => (
                        <div
                          key={index + 1}
                          className=" relative w-full max-w-full  basis-full p-[0_15px_30px]  md:max-w-[50%] md:basis-[50%]"
                        >
                          <Link href={`/${item.slug}`}>
                            <div className="relative m-[0_auto] flex w-full">
                              <div className="relative h-auto w-full max-w-[30%] bg-cover bg-[50%_50%] ">
                                <img
                                  className="h-auto w-full"
                                  src={item.thumbnail_img_link}
                                  alt=""
                                />
                              </div>
                              <div className="relative  pb-[15px] pl-[11px] text-left">
                                <div className="border-b-2 pb-4">
                                  <h3 className="mb-2 w-full text-sm font-bold">
                                    {item.title}
                                  </h3>
                                  <div className="text-sm">
                                    {moment(item.created_at).format(
                                      "DD/MM/YYYY",
                                    )}
                                  </div>
                                  <p className="mb-[10px] text-sm">
                                    {shortenWithCommas(item.description, 50)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="h-[380px] w-full max-w-full basis-full p-[0_15px_30px] md:h-[290px] md:max-w-[33%] md:basis-1/3">
                      <div className="relative h-full w-full border-[0.5rem] border-[#d40091]">
                        <div className="relative h-full w-full overflow-hidden bg-[url('https://tracuuthansohoc.com/wp-content/uploads/2021/09/than-so-hoc-so-1-18-min.jpg')] bg-cover bg-[50%_50%] bg-no-repeat">
                          <div className="bottom-4 left-4 right-4 top-4 mx-auto flex w-full items-center justify-center px-4 pb-3 pt-[65px]">
                            <div className="z-10 flex w-full flex-col justify-center">
                              <p className="my-1 text-center text-lg text-white">
                                <strong>Công cụ tra cứu Thần Số Học</strong>
                              </p>
                              <Link
                                href="/xem"
                                type="button"
                                className="mx-auto mt-6 min-h-[46px] justify-center rounded border border-[#af3689] bg-[#af3689] p-[8px_20px_10px] text-base text-white hover:bg-white hover:text-[#af3689]"
                              >
                                <strong> Tra cứu ngay</strong>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href="/category/cung-hoang-dao/faqs/"
                    type="button"
                    className=" border border-[#af3689] bg-[#af3689] p-[8px_20px_10px] text-sm font-bold text-white hover:bg-white hover:text-[#af3689]"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="cung-hoang-dao"
              className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]"
            >
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] inline w-auto border-b-2 border-[#af3689] pb-3 text-2xl font-bold md:whitespace-nowrap md:border-none md:pb-0">
                        Cung hoàng đạo
                      </h2>
                      <div className="mb-2 hidden w-[59%] border-b-2 border-[#af3689] md:block"></div>
                      <Link
                        className="ml-auto hidden whitespace-nowrap pl-[15px] text-sm font-bold text-[#af3689] hover:text-black md:block"
                        href="/category/cung-hoang-dao/faqs/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-col flex-wrap px-0 md:flex-row">
                    {/* blog */}
                    <div className="flex w-full  max-w-full basis-full flex-row flex-wrap md:max-w-[67%] md:basis-2/3">
                      {horoscopeBlogs.items.slice(0, 4).map((item, index) => (
                        <div
                          key={index + 1}
                          className=" relative w-full max-w-full  basis-full p-[0_15px_30px]  md:max-w-[50%] md:basis-[50%]"
                        >
                          <Link href={`/${item.slug}`}>
                            <div className="relative m-[0_auto] flex w-full">
                              <div className="relative h-auto w-full max-w-[30%] bg-cover bg-[50%_50%] ">
                                <img
                                  className="h-auto w-full"
                                  src={item.thumbnail_img_link}
                                  alt=""
                                />
                              </div>
                              <div className="relative  max-w-[70%] pb-[15px]  pl-[11px] text-left md:w-[70%]">
                                <div className="border-b-2 pb-4">
                                  <h3 className="mb-2 w-full text-sm font-bold">
                                    {item.title}
                                  </h3>
                                  <div className="text-sm">
                                    {moment(item.created_at).format(
                                      "DD/MM/YYYY",
                                    )}
                                  </div>
                                  <p className="mb-[10px] text-sm">
                                    {shortenWithCommas(item.description, 50)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="h-[380px] w-full max-w-full basis-full p-[0_15px_30px] md:h-[290px] md:max-w-[33%] md:basis-1/3">
                      <div className="relative h-full w-full border-[0.5rem] border-[#d40091]">
                        <div className="relative h-full w-full overflow-hidden bg-[url('https://tracuuthansohoc.com/wp-content/uploads/2023/07/cung-hoang-dao-9.jpg')] bg-cover bg-[50%_50%] bg-no-repeat">
                          <div className="bottom-4 left-4 right-4 top-4 mx-auto flex w-full items-center justify-center px-4 pb-3 pt-[65px]">
                            <div className="z-10 flex w-full flex-col justify-center">
                              <p className="my-1 text-center text-lg text-white">
                                <strong>Công cụ tra cứu Thần Số Học</strong>
                              </p>
                              <Link
                                href="/xem"
                                type="button"
                                className="mx-auto mt-6 min-h-[46px] justify-center rounded border border-[#af3689] bg-[#af3689] p-[8px_20px_10px] text-base text-white hover:bg-white hover:text-[#af3689]"
                              >
                                <strong> Tra cứu ngay</strong>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href="/category/cung-hoang-dao/faqs/"
                    type="button"
                    className=" border border-[#af3689] bg-[#af3689] p-[8px_20px_10px] text-sm font-bold text-white hover:bg-white hover:text-[#af3689]"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="dat-ten-cho-con"
              className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]"
            >
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] inline w-auto border-b-2 border-[#af3689] pb-3 text-2xl font-bold md:whitespace-nowrap md:border-none md:pb-0">
                        Đặt tên cho con
                      </h2>
                      <div className="mb-2 hidden w-[59%] border-b-2 border-[#af3689] md:block"></div>
                      <Link
                        className="ml-auto hidden whitespace-nowrap pl-[15px] text-sm font-bold text-[#af3689] hover:text-black md:block"
                        href="/category/cung-hoang-dao/faqs/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-col flex-wrap px-0 md:flex-row">
                    {/* blog */}
                    <div className="flex w-full  max-w-full basis-full flex-row flex-wrap md:max-w-[67%] md:basis-2/3">
                      {childBlogs.items.slice(0, 4).map((item, index) => (
                        <div
                          key={index + 1}
                          className=" relative w-full max-w-full  basis-full p-[0_15px_30px]  md:max-w-[50%] md:basis-[50%]"
                        >
                          <Link href={`/${item.slug}`}>
                            <div className="relative m-[0_auto] flex w-full">
                              <div className="relative h-auto w-full max-w-[30%] bg-cover bg-[50%_50%] ">
                                <img
                                  className="h-auto w-full"
                                  src={item.thumbnail_img_link}
                                  alt=""
                                />
                              </div>
                              <div className="relative  max-w-[70%] pb-[15px]  pl-[11px] text-left md:w-[70%]">
                                <div className="border-b-2 pb-4">
                                  <h3 className="mb-2 w-full text-sm font-bold">
                                    {item.title}
                                  </h3>
                                  <div className="text-sm">
                                    {moment(item.created_at).format(
                                      "DD/MM/YYYY",
                                    )}
                                  </div>
                                  <p className="mb-[10px] text-sm">
                                    {shortenWithCommas(item.description, 50)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="h-[380px] w-full max-w-full basis-full p-[0_15px_30px] md:h-[290px] md:max-w-[33%] md:basis-1/3">
                      <div className="relative h-full w-full border-[0.5rem] border-[#d40091]">
                        <div className="relative h-full w-full overflow-hidden bg-[url('https://tracuuthansohoc.com/wp-content/uploads/2023/08/ten-y-4.jpg')] bg-cover bg-[50%_50%] bg-no-repeat">
                          <div className="bottom-4 left-4 right-4 top-4 mx-auto flex w-full items-center justify-center px-4 pb-3 pt-[65px]">
                            <div className="z-10 flex w-full flex-col justify-center">
                              <p className="my-1 text-center text-lg text-white">
                                <strong>Công cụ tra cứu Thần Số Học</strong>
                              </p>
                              <Link
                                href="/xem"
                                type="button"
                                className="mx-auto mt-6 min-h-[46px] justify-center rounded border border-[#af3689] bg-[#af3689] p-[8px_20px_10px] text-base text-white hover:bg-white hover:text-[#af3689]"
                              >
                                <strong> Tra cứu ngay</strong>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href="/category/cung-hoang-dao/faqs/"
                    type="button"
                    className=" border border-[#af3689] bg-[#af3689] p-[8px_20px_10px] text-sm font-bold text-white hover:bg-white hover:text-[#af3689]"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[1230px]">
              <div className="relative w-full max-w-full basis-full p-[0_15px_30px]">
                <div className="md: mx-auto flex w-full flex-col rounded-tl-[5rem] border-[0.5rem] border-[#d40091] bg-[#ffdefe] p-10 md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img
                      src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/e-nha-a-20221007021752-trrzz.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="pb-6 pt-3 text-left text-sm text-black md:my-auto md:ml-6">
                    <h4 className="mb-4 mt-1 text-lg font-bold">
                      Thầy Louis Nguyễn
                    </h4>
                    <p>
                      <strong>
                        Nhà nghiên cứu Thần số học & Sáng lập hệ thống
                        Tracuuthansohoc.com
                      </strong>
                    </p>
                    <p>
                      <em>
                        &quot;Bộ môn Thần số học được Louis đánh giá là mang đến
                        nhiều giá trị tốt đẹp cho đời sống con người. Chúng ta
                        cần tìm hiểu và không ngừng rèn luyện, tu tập để tìm về
                        bản thể của chính mình, để có được một cuộc đời an nhiên
                        và hạnh phúc.&quot;
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] inline w-auto border-b-2 border-[#af3689] pb-3 text-2xl font-bold md:whitespace-nowrap md:border-none md:pb-0">
                        DISC
                      </h2>
                      <div className="mb-2 hidden w-[59%] border-b-2 border-[#af3689] md:block"></div>
                      <Link
                        className="ml-auto hidden whitespace-nowrap pl-[15px] text-sm font-bold text-[#af3689] hover:text-black md:block"
                        href="/category/disc"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>

                <FeaturedBlogs type={EBlogType.DISC} />
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href="/category/cung-hoang-dao/faqs/"
                    type="button"
                    className=" border border-[#af3689] bg-[#af3689] p-[8px_20px_10px] text-sm font-bold text-white hover:bg-white hover:text-[#af3689]  "
                  >
                    Xem thêm
                  </Link>
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
