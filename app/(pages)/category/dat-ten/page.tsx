import Link from "next/link"
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs"
import { EBlogType } from "@/interfaces/blogs.interface"
import { PaginatedBlogs } from "@/components/blogs/PaginatedBlogs"
import { BlogService } from "@/app/services/blogs/blogs.service"

export default async function DatTen() {
  const blogs = await BlogService.getBlogsByType(EBlogType.CHILD)

  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-[1230px] px-[15px]">
          <Link href="/" className="pr-1 text-[#af3689] hover:text-black">
            Trang chủ
          </Link>
          » Đặt tên
        </div>
      </div>
      <div></div>
      <div className="relative">
        <div className="py-[30px]">
          <header className="block">
            <div className="mx-auto flex w-full max-w-[1230px] flex-row flex-wrap">
              <div className=" m-0 block w-full basis-full p-[0_15px_30px]">
                <h1 className="  mb-4 mt-0 text-left text-[30px] font-bold uppercase leading-[1.2]">
                  Đặt tên
                </h1>
                <ul className="mt-0 flex list-none flex-wrap p-0 ">
                  <li className=" mb-3 mr-[10px]">
                    <Link
                      href=""
                      className="rounded-[3px] border  border-[black] p-[5px_10px] text-[15px] leading-normal"
                    >
                      Các Chỉ Số Thần Số Học
                    </Link>
                  </li>
                  <li className=" mb-3 mr-[10px]">
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
          <div className="mx-auto flex w-full max-w-[1230px] flex-row flex-wrap justify-center">
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto flex-row flex-wrap px-0">
                <FeaturedBlogs type={EBlogType.CHILD} />
              </div>
            </div>
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <h2 className=" mb-2 text-2xl font-bold">Bài viết mới nhất</h2>
            </div>
            <PaginatedBlogs documents={blogs.items} />
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] w-auto whitespace-nowrap text-2xl font-bold">
                        Các Chỉ Số Thần Số Học
                      </h2>
                      <div className="mb-2 w-[65%] border-b-2 border-[#af3689]"></div>
                      <Link
                        className="ml-auto hidden whitespace-nowrap pl-[15px] text-sm font-bold text-[#af3689] hover:text-black md:block"
                        href="/category/kien-thuc-nen-tang/chi-so/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                    {/* blog */}
                    <div className=" relative w-full max-w-full  basis-full p-[0_15px_30px]  md:max-w-[50%] md:basis-[50%]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-full">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-full text-sm font-bold">
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
                    <div className=" relative w-full max-w-full  basis-full p-[0_15px_30px] md:max-w-[50%] md:basis-[50%]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-full">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-full text-sm font-bold">
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
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href=""
                    type="button"
                    className=" bg-[#af3689] p-[8px_20px_10px] text-sm font-bold text-white"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
              <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                <div className="relative m-0 w-full p-[0_15px_0]">
                  <div className="ml-0 mr-auto  w-full">
                    <div className="mx-auto mb-6 flex w-full justify-between px-0">
                      <h2 className="mr-[10px] w-auto whitespace-nowrap text-2xl font-bold">
                        Ý Nghĩa Các Con Số Thần Số Học
                      </h2>
                      <div className="mb-2 w-[59%] border-b-2 border-[#af3689]"></div>
                      <Link
                        className="ml-auto hidden whitespace-nowrap pl-[15px] text-sm font-bold text-[#af3689] hover:text-black md:block"
                        href="/category/kien-thuc-nen-tang/cac-con-so/"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
                  <div className="mx-[-15px] flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                    {/* blog */}
                    <div className=" relative w-full max-w-full  basis-full  p-[0_15px_30px] md:max-w-[50%] md:basis-[50%]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-full">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-full text-sm font-bold">
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
                    <div className=" relative w-full max-w-full  basis-full  p-[0_15px_30px] md:max-w-[50%] md:basis-[50%]">
                      <Link href="/cac-chi-so-than-so-hoc/">
                        <div className="relative m-[0_auto] flex w-full">
                          <div className="relative h-auto w-[30%] bg-cover bg-[50%_50%]">
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/cac-chi-so-than-so-hoc-6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="relative  pb-[15px] pl-[11px] text-left">
                            <div className="border-b-2">
                              <h3 className="mb-2 w-full text-sm font-bold">
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
                <div className=" flex w-full max-w-full basis-full justify-center p-[0_15px_30px] md:hidden">
                  <Link
                    href=""
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
