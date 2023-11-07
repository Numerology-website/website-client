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
        <div className="container mx-auto flex w-full max-w-full px-[15px] md:max-w-[1230px]">
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
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
