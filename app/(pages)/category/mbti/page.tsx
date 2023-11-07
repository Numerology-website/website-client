import { BlogService } from "@/app/services/blogs/blogs.service"
import { EBlogType } from "@/interfaces/blogs.interface"
import { shortenWithCommas } from "@/utils/helpers"
import Link from "next/link"
export default async function AboutUs() {
  const blogs = await BlogService.getBlogsByType(EBlogType.OTHER)
  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-[1230px] px-[15px]">
          <a href="" className="text-[#af3689] hover:text-black">
            Trang chủ
          </a>
          {" » "}
          MBTI
        </div>
      </div>
      <div className="bg-white py-[30px] ">
        <div className=" mx-auto flex w-[1230px] flex-col">
          <div className="px-[15px] pb-[30px]">
            <h3>
              <b></b>
              <span className="  after:border-b-1 text-[30px] font-bold after:contents after:grow after:border-solid after:border-black">
                MBTI
              </span>

              <b></b>
            </h3>
          </div>
        </div>
        <div className=" mx-auto flex w-[1230px] flex-col">
          <div className="px-[15px]">
            <div className="mb-6">
              <h2>
                <span className="  after:border-b-1 text-[25px] font-bold after:contents after:grow after:border-solid after:border-black">
                  Bài viết mới nhất
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className=" mx-auto flex w-auto max-w-[1230px] flex-row flex-wrap justify-center px-[15px] pb-[30px]">
          {blogs.items.map((item, index) => (
            <div
              key={index + 1}
              className=" relative w-full max-w-[50%]  basis-1/2 p-[0_15px_30px]  md:max-w-[25%] md:basis-1/4"
            >
              <div className="w-full">
                <Link
                  href={`/${item.slug}`}
                  className="text-black no-underline"
                >
                  <div>
                    <img
                      src={item.thumbnail_img_link}
                      alt="MBTI ISTP là gì?"
                      className="h-[155px] w-[277px] "
                    />
                  </div>
                  <div className="pb-5 pt-[10px]">
                    <h3 className="text-[16px] font-bold ">{item.title}</h3>
                    <p className="mb-[10px] text-sm">
                      {shortenWithCommas(item.description, 50)}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
