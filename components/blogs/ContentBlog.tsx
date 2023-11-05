"use client"
import { useState } from "react"
import { TBlog } from "@/interfaces/blogs.interface"
import { unified } from "unified"
import rehypeParse from "rehype-parse"
import rehypeStringify from "rehype-stringify"
import { visit } from "unist-util-visit"
import parameterize from "parameterize"
import Link from "next/link"
import moment from "moment"

export default function ContentBlog({ document }: { document: TBlog }) {
  const toc: [
    { id: string; title: string; h3?: { id: string; title: string }[] },
  ] = [
    {
      id: "",
      title: "",
    },
  ]

  const [blog, setBlog] = useState<TBlog>(document)
  const [showTableContent, setShowTableContent] = useState<boolean>(true)
  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        console.log(tree)

        visit(tree, "element", function (node: any) {
          if (node.tagName === "h2") {
            const value = node.children[0].children[0].value
              ? node.children[0].children[0].value
              : node.children[0].children[0].children[0].value
            const id = parameterize(value)
            node.properties.id = id
            toc.push({
              id,
              title: value,
              h3: [],
            })
          }
          if (node.tagName === "h3") {
            const value = node.children[0].children[0].value
              ? node.children[0].children[0].value
              : node.children[0].children[0].children[0].value
            const id = parameterize(value)
            node.properties.id = id
            toc[toc.length - 1].h3?.push({
              id,
              title: value,
            })
          }
        })
        toc.shift()
        return
      }
    })
    .use(rehypeStringify)
    .processSync(blog?.content)
    .toString()
  return (
    <>
      <header>
        <div className="pb-6 text-left">
          <h6 className="w-full text-xs ">
            <Link
              className="font-semibold uppercase text-[#af3689]"
              href="https://tracuuthansohoc.com/category/disc/"
            >
              {document.type}
            </Link>
          </h6>
          <h1 className="mb-2 w-full text-xl font-semibold md:text-3xl">
            {document.title}
          </h1>
          <span className="text-xs uppercase">
            Cập nhật lần cuối {moment(document.updated_at).format("DD/MM/YYYY")}{" "}
            bởi {document.user.last_name} {document.user.first_name}
          </span>
        </div>
        <div className="pb-7">
          <Link href={document.slug}>
            <img className="w-full" src={document.thumbnail_img_link} alt="" />
          </Link>
        </div>
      </header>
      <div className="pb-6">
        <div className="mb-5 italic">{document.description}</div>
        <div className="relative mb-5 h-auto w-auto">
          <header className=" bg-[#d7eef4] p-[10px] text-[22px] leading-[1.5]">
            <span className="float-left mr-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <div className="block w-auto overflow-hidden font-bold ">
              NỘI DUNG CHÍNH CỦA BÀI VIẾT:
            </div>
            <button
              className="float-right ml-[5px] w-[25px]"
              onClick={() => setShowTableContent(!showTableContent)}
            >
              {showTableContent ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-[-30px] h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-[-30px] h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </button>
          </header>
          <ol
            className={
              showTableContent
                ? `h-auto list-outside bg-[#d7eef4]  text-sm`
                : `hidden`
            }
          >
            {toc.map((item, index: number) => {
              return (
                <li className="p-[5px_10px] pl-8 text-base " key={`${item.id}`}>
                  <Link className="font-semibold" href={`#${item.id}`}>
                    {index + 1} {item.title}
                  </Link>
                  <ol className="list-outside">
                    {item.h3?.map(({ id, title }, index: number) => {
                      return (
                        <li
                          className="p-[5px_10px] pl-8 text-base "
                          key={`${id}`}
                        >
                          <Link className="" target="_self" href={`#${id}`}>
                            {index + 1} {title}
                          </Link>
                        </li>
                      )
                    })}
                  </ol>
                </li>
              )
            })}
          </ol>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content || "" }}></div>
        <div className="py-8">
          <div className="flex w-full flex-row flex-nowrap">
            <div className="mr-8 w-[75px]">
              <img
                className="h-auto rounded-full  object-cover"
                src="https://secure.gravatar.com/avatar/30de3481d2e4b86dff700679d2c16a94?s=90&d=retro&r=g"
                alt=""
              />
            </div>
            <div className="max-h-full w-full text-base">
              <h2 className="mb-2 pt-4 font-semibold uppercase">
                {document.user.last_name} {document.user.first_name}
              </h2>
              <p className="mb-5">
                Xin chào, tôi là Henryson Vu – Biên tập viên nội dung cho
                website Tracuuthansohoc.com. Với nhiều năm đồng hành cùng thầy
                Louis Nguyễn, tôi tin chắc rằng bộ môn Thần Số Học tại Tra Cứu
                Thần Số Học đem đến thông tin chính xác với những điều ẩn chứa
                bên trong con người bạn. Mong rằng những nội dung mà chúng tôi
                chia sẻ sẽ giúp ích cho bạn!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
