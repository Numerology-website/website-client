"use client"

import { Pagination } from "flowbite-react"
import { useState } from "react"
import Link from "next/link"
import { TBlog } from "@/interfaces/blogs.interface"
import { shortenWithCommas } from "@/utils/helpers"

interface ITableBlog {
  documents: TBlog[]
}
export const PaginatedBlogs = ({ documents }: ITableBlog) => {
  const itemsPerPage: number = 12
  const currentItems: [] = []

  function PaginatedItems() {
    const [currentPage, setCurrentPage] = useState(1)
    const onPageChange = (page: number) => setCurrentPage(page)
    const [itemOffset, setItemOffset] = useState(0)
    const endOffset = itemOffset + itemsPerPage
    const currentItems = documents.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(documents.length / itemsPerPage)

    const handlePageClick = (page: number) => {
      const newOffset = ((page - 1) * itemsPerPage) % documents.length
      setCurrentPage(page)
      setItemOffset(newOffset)
    }
    function Items({ currentItems: [] }) {
      return (
        <>
          {currentItems &&
            currentItems.map((document, index) => (
              <div
                key={index + 1}
                className="relative m-0 w-full max-w-[50%] basis-[50%] p-[0_15px_30px] md:max-w-[25%] md:basis-[25%]"
              >
                <div className="relative ml-0 mr-auto w-full bg-cover bg-[50%_50%] bg-no-repeat">
                  <Link href={`/${document.slug}`}>
                    <div className="relative m-[0_auto] w-full">
                      <div className="relative m-[0_auto] h-auto overflow-hidden">
                        <div className="relative h-auto bg-cover bg-[50%_50%] pt-[56%]">
                          <img
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                            src={document.thumbnail_img_link}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full pt-3 text-left">
                      <h3 className="mb-1 text-lg font-bold">
                        {document.title}
                      </h3>
                      <p className="mb-[10px] overflow-hidden text-ellipsis text-sm">
                        {shortenWithCommas(document.description, 50)}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </>
      )
    }
    return (
      <>
        <div className="relative m-0 w-full basis-full p-[0_15px_30px]">
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
      <PaginatedItems />
    </>
  )
}
