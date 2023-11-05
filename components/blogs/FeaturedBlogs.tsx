import { EBlogType } from "@/interfaces/blogs.interface"
import { BlogService } from "@/app/services/blogs/blogs.service"
import Link from "next/link"

interface MyComponentProps {
  type: EBlogType
}

export default async function FeaturedBlogs({ type }: MyComponentProps) {
  const featuredBlogs = await BlogService.getHighlightBlogsByType(type)
  return (
    <>
      <div className="relative m-0 w-[100%] max-w-full basis-full p-[0_15px_30px] md:max-w-[58%] md:basis-[58%]">
        <div className="relative m-[0_auto] h-auto overflow-hidden">
          <Link href="">
            <div className="relative h-auto overflow-hidden bg-cover bg-[50%_50%]">
              <img src={featuredBlogs.items[0]?.thumbnail_img_link} alt="" />
            </div>
          </Link>
        </div>
        <div className="relative w-[100%] bg-[#af368938] p-5 text-left">
          <Link href="">
            <h3 className="mb-[10px] text-2xl font-bold">
              {featuredBlogs.items[0]?.title}
            </h3>
          </Link>
          <p className="mb-[10px] text-sm">
            {featuredBlogs.items[0]?.description}
          </p>
        </div>
      </div>
      <div className="relative m-0 w-[100%] max-w-full basis-full p-[0_15px_30px] md:max-w-[42%] md:basis-[42%]">
        <div className="relative ml-0 mr-auto w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
          <div className=" mb-5 border-b-2 border-[#af3689] pb-2  ">
            <h2 className="mt-0 text-[15px] font-bold leading-[1.3]">
              Bài viết nổi bật
            </h2>
          </div>
          <div className="mx-[-2px] mb-0 h-[508px] w-auto overflow-y-auto px-0">
            {/* blog nho phai */}
            {featuredBlogs.items.splice(-1, 1).map((item, index) => (
              <div className="p-[0_2px_3px relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%]">
                <div className="relative mb-[15px] ml-0 mr-auto w-[100%] border-b-2 border-[#dbe4ed] bg-cover bg-[50%_50%] bg-no-repeat pb-[15px] ">
                  <Link href="">
                    <div className="relative  flex w-[100%] flex-row">
                      <div className=" relative h-auto w-[30%] overflow-hidden bg-cover bg-[50%_50%]">
                        <img src={item.thumbnail_img_link} alt="" />
                      </div>
                      <div className="relative w-[100%] pl-[10px] text-left">
                        <h3 className="mb-2 text-sm font-bold">{item.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
