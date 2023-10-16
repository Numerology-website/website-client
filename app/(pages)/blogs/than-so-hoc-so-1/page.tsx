"use client"
import { ClientGetAPI } from "@/utils/fetch"
import { useEffect, useState } from "react"
import { IBlog } from "@/interfaces/blogs.interface"
import { unified } from "unified"
import rehypeParse from "rehype-parse"
import rehypeStringify from "rehype-stringify"
import { visit } from "unist-util-visit"
import parameterize from "parameterize"
import Link from "next/link"
export default function ThanSoHocSo1() {
  const toc: [{ id: string; title: string }] = [
    {
      id: "",
      title: "",
    },
  ]
  const toc2: [{ id: string; title: string }] = [
    {
      id: "",
      title: "",
    },
  ]
  const [blog, setBlog] = useState<IBlog>()
  const [showTableContent, setShowTableContent] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const blog = await ClientGetAPI<IBlog>("/blogs/fake", {}, {})
      setBlog(blog)
    }

    fetchData()
      // bắt lỗi
      .catch(console.error)
  }, [])

  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        visit(tree, "element", function (node: any) {
          if (node.tagName === "h2") {
            const id = parameterize(node.children[0].value)
            node.properties.id = id
            toc.push({
              id,
              title: node.children[0].value,
            })
          }
          if (node.tagName === "h3") {
            const id = parameterize(node.children[0].value)
            node.properties.id = id
            toc2.push({
              id,
              title: node.children[0].value,
            })
          }
        })
        toc.shift()
        toc2.shift()
        return
      }
    })
    .use(rehypeStringify)
    .processSync(blog?.content)
    .toString()
  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-[1230px] px-[15px]">
          <a href="" className="pr-1 text-[#af3689] hover:text-black">
            Trang chủ
          </a>
          » Thần số học số 1 – Đường đời của nhà lãnh đạo bẩm sinh
        </div>
      </div>

      <div className="pb-[30px]">
        <div className=" mx-auto flex w-[100%] max-w-[1230px] flex-row flex-wrap px-0">
          {/* blog */}
          <div className="relative m-0 w-[100%] max-w-[75%] basis-[75%] p-[0_30px_30px]">
            {/* muc luc */}
            <div className="relative mb-5 h-auto w-auto rounded-lg">
              <header className="bg-[#d7eef4] p-[10px] text-[22px] leading-[1.5]">
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
                {toc.map(({ id, title }, index: number) => {
                  return (
                    <li className="p-[5px_10px] pl-8 text-base " key={`${id}`}>
                      <Link className="font-semibold" href={`#${id}`}>
                        {index + 1} {title}
                      </Link>
                      <ol className="list-outside">
                        {toc2.map(({ id, title }, index: number) => {
                          return (
                            <li
                              className="p-[5px_10px] pl-8 text-base "
                              key={`${id}`}
                            >
                              <Link className="" href={`#${id}`}>
                                {index + 1}.{index + 1} {title}
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
            <div
              dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
            ></div>
          </div>

          {/* bai viet lien quan */}
          <div></div>
        </div>
      </div>
    </>
  )
}
