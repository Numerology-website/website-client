"use client"

import {
  NumerologyTitleConstant,
  TNumerologyTitleConstant,
} from "@/components/admin/numerology/NumerologyTitleConstant"
import { ListBulletIcon } from "@heroicons/react/24/solid"
import { Dropdown } from "flowbite-react"

type TNumerologyTitleConstantWithIndex = TNumerologyTitleConstant & {
  index: number
}
type TGroupBySection = {
  [key: string]: TNumerologyTitleConstantWithIndex[]
}

export const TableOfContentButton = () => {
  // const groupBySection = groupBy(NumerologyTitleConstant, "sectionType")
  const groupBySection: TGroupBySection = NumerologyTitleConstant.reduce(
    (result: TGroupBySection, item, index) => {
      const sectionType = item.sectionType
      result[sectionType] = result[sectionType] || []
      result[sectionType].push({ ...item, index })
      return result
    },
    {},
  )
  return (
    <Dropdown
      label={
        <span className="flex items-center gap-1">
          <ListBulletIcon className="h-6 w-6" />
          Mục lục
        </span>
      }
      color="purple"
      size="sm"
      placement="top"
      arrowIcon={false}
      theme={{
        floating: {
          base: "w-[300px] max-h-[80vh] rounded shadow-[0_0_10px_2px_#62149c]",
        },
      }}
    >
      <Dropdown.Header className="flex gap-2 font-bold uppercase">
        <ListBulletIcon className="h-6 w-6" />
        <span>Mục lục báo cáo</span>
      </Dropdown.Header>
      <div className="max-h-[calc(80vh-60px)] overflow-y-scroll">
        {groupBySection.A && (
          <>
            <Dropdown.Header className="font-bold uppercase">
              Phần A: Phân tích tổng quan
            </Dropdown.Header>
            {groupBySection.A.map((title, index) => (
              <Dropdown.Item
                key={index}
                className="flex items-start justify-start gap-2 text-left"
                onClick={() => {
                  const section = document.getElementById(`${title.id}`)
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                }}
              >
                <span>{title.index + 1}. </span>
                <span>{title.tableOfContentTitle}</span>
              </Dropdown.Item>
            ))}
          </>
        )}
        {groupBySection.B && (
          <>
            <Dropdown.Header className="font-bold uppercase">
              Phần B: Phân tích chi tiết
            </Dropdown.Header>
            {groupBySection.B.map((title, index) => (
              <Dropdown.Item
                key={index}
                className="flex items-start justify-start gap-2 text-left"
                onClick={() => {
                  const section = document.getElementById(`${title.id}`)
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                }}
              >
                <span>{title.index + 1}. </span>
                <span>{title.tableOfContentTitle}</span>
              </Dropdown.Item>
            ))}
          </>
        )}
        {groupBySection.C && (
          <>
            <Dropdown.Header className="font-bold uppercase">
              Phần C: Phân tích chi tiết
            </Dropdown.Header>
            {groupBySection.C.map((title, index) => (
              <Dropdown.Item
                key={index}
                className="flex items-start justify-start gap-2 text-left"
                onClick={() => {
                  const section = document.getElementById(`${title.id}`)
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                }}
              >
                <span>{title.index + 1}. </span>
                <span>{title.tableOfContentTitle}</span>
              </Dropdown.Item>
            ))}
          </>
        )}
        {groupBySection.D && (
          <>
            <Dropdown.Header className="font-bold uppercase">
              Phần D: Phân tích chi tiết
            </Dropdown.Header>
            {groupBySection.D.map((title, index) => (
              <Dropdown.Item
                key={index}
                className="flex items-start justify-start gap-2 text-left"
                onClick={() => {
                  const section = document.getElementById(`${title.id}`)
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                }}
              >
                <span>{title.index + 1}. </span>
                <span>{title.tableOfContentTitle}</span>
              </Dropdown.Item>
            ))}
          </>
        )}
      </div>
    </Dropdown>
  )
}
