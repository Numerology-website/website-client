import Link from "next/link"
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs"
import { EBlogType } from "@/interfaces/blogs.interface"
import { PaginatedBlogs } from "@/components/blogs/PaginatedBlogs"
import { BlogService } from "@/app/services/blogs/blogs.service"
import moment from "moment"
import { shortenWithCommas } from "@/utils/helpers"

export default async function CungHoangDao() {
  const blogs = await BlogService.getBlogsByType(EBlogType.HOROSCOPE)
  const frequencyQuestionBlogs = blogs.items
    .filter((blog) => blog.category.includes(EBlogType.QUESTION))
    .slice(0, 4)
  const compatibleBlogs = blogs.items
    .filter((blog) => blog.category.includes(EBlogType.COMPATIBLE))
    .slice(0, 4)
  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-full max-w-full px-[15px] md:max-w-[1230px]">
          <Link href="/" className="pr-1 text-[#af3689] hover:text-black">
            Trang chủ
          </Link>
          » Cung hoàng đạo
        </div>
      </div>
      <div></div>
      <div className="relative">
        <div className="py-[30px]">
          <header className="block">
            <div className="mx-auto flex w-full max-w-[1230px] flex-row flex-wrap">
              <div className=" m-0 block w-full basis-full p-[0_15px_30px]">
                <h1 className="  mb-4 mt-0 text-left text-[30px] font-bold uppercase leading-[1.2]">
                  Cung hoàng đạo
                </h1>
                <ul className="mt-0 flex list-none flex-wrap p-0 ">
                  <li className="mb-3 mr-[10px]">
                    <Link
                      href="#faqs"
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Câu hỏi thường gặp
                    </Link>
                  </li>
                  <li className=" mb-3 mr-[10px]">
                    <Link
                      href="#tuong-hop"
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Tương hợp
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="mx-auto flex w-full max-w-[1230px] flex-row flex-wrap justify-center">
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto flex-row flex-wrap px-0">
                <FeaturedBlogs type={EBlogType.HOROSCOPE} />
              </div>
            </div>
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <h2 className=" mb-2 text-2xl font-bold">Bài viết mới nhất</h2>
            </div>
            <PaginatedBlogs documents={blogs.items} />
            <div
              id="faqs"
              className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]"
            >
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] inline w-auto border-b-2 border-[#af3689] pb-3 text-2xl font-bold md:whitespace-nowrap md:border-none md:pb-0">
                        Câu Hỏi Thường Gặp
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
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                    {/* blog */}

                    {frequencyQuestionBlogs.map((item, index) => (
                      <div
                        key={index + 1}
                        className=" relative w-full max-w-full  basis-full p-[0_15px_30px]  md:max-w-[50%] md:basis-[50%]"
                      >
                        <Link href={`/${item.slug}`}>
                          <div className="relative m-[0_auto] flex w-full">
                            <div className="relative h-auto max-w-[30%] bg-cover bg-[50%_50%] md:w-[30%]">
                              <img
                                className="aspect-[300/180]"
                                src={item.thumbnail_img_link}
                                alt=""
                              />
                            </div>
                            <div className="relative  max-w-[70%] pb-[15px]  pl-[11px] text-left md:w-[70%]">
                              <div className="h-[150px] border-b-2 pb-4">
                                <h3 className="mb-2 w-full text-sm font-bold">
                                  {item.title}
                                </h3>
                                <div className="text-sm">
                                  {moment(item.created_at).format("DD/MM/YYYY")}
                                </div>
                                <p className="mb-[10px] text-sm">
                                  {shortenWithCommas(item.description, 70)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href="/category/cung-hoang-dao/faqs/"
                    type="button"
                    className=" bg-[#af3689] p-[8px_20px_10px] text-sm font-bold text-white"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="tuong-hop"
              className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]"
            >
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] inline w-auto border-b-2 border-[#af3689] pb-3 text-2xl font-bold md:whitespace-nowrap md:border-none md:pb-0">
                        Tương Hợp
                      </h2>
                      <div className="mb-2 hidden w-[59%] border-b-2 border-[#af3689] md:block"></div>
                      <Link
                        className="ml-auto hidden whitespace-nowrap pl-[15px] text-sm font-bold text-[#af3689] hover:text-black md:block"
                        href="/category/cung-hoang-dao/tuong-hop/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                    {/* blog */}
                    {compatibleBlogs.map((item, index) => (
                      <div
                        key={index + 1}
                        className=" relative w-full max-w-full  basis-full p-[0_15px_30px]  md:max-w-[50%] md:basis-[50%]"
                      >
                        <Link href={`/${item.slug}`}>
                          <div className="relative m-[0_auto] flex w-full">
                            <div className="relative h-auto max-w-[30%] bg-cover bg-[50%_50%] md:w-[30%]">
                              <img
                                className="aspect-[300/180]"
                                src={item.thumbnail_img_link}
                                alt=""
                              />
                            </div>
                            <div className="relative  max-w-[70%] pb-[15px]  pl-[11px] text-left md:w-[70%]">
                              <div className="h-[150px] border-b-2 pb-4">
                                <h3 className="mb-2 w-full text-sm font-bold">
                                  {item.title}
                                </h3>
                                <div className="text-sm">
                                  {moment(item.created_at).format("DD/MM/YYYY")}
                                </div>
                                <p className="mb-[10px] text-sm">
                                  {shortenWithCommas(item.description, 70)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href="/category/cung-hoang-dao/tuong-hop/"
                    type="button"
                    className=" bg-[#af3689] p-[8px_20px_10px] text-sm font-bold text-white"
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
