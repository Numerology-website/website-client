"use client"

import { Table } from "flowbite-react"
import { AiFillGift } from "react-icons/ai"

export default function VipPriceList() {
  return (
    <Table className="">
      <Table.Head>
        <Table.HeadCell className="bg-[#ed969e] text-center">
          Gói VIP
        </Table.HeadCell>
        <Table.HeadCell className="bg-[#ed969e]"> Giá</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y text-black">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="text-center">1 lượt VIP</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium dark:text-white">
            Giá gốc:{" "}
            <span className="text-sm font-bold  line-through">360.000đ</span>{" "}
            -50% <br />
            Chỉ còn:{" "}
            <span className="text-base font-bold text-red-600">360.000đ</span>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="text-center">2 lượt VIP</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium  dark:text-white">
            Giá gốc:{" "}
            <span className="text-sm font-bold  line-through">360.000đ</span>{" "}
            -50% <br />
            Chỉ còn:{" "}
            <span className="text-base font-bold text-red-600">360.000đ</span>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="text-center">3 lượt VIP</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium  dark:text-white">
            Giá gốc:{" "}
            <span className="text-sm font-bold  line-through">360.000đ</span>{" "}
            -50% <br />
            Chỉ còn:{" "}
            <span className="text-base font-bold text-red-600">
              360.000đ
              <br />
              <div className="flex text-sm text-[#28a745]">
                <AiFillGift />
                <p className="ml-1 text-xs font-bold">
                  {" "}
                  Tặng thêm 1 lượt tra online.
                </p>
              </div>
            </span>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="text-center">5 lượt VIP</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium dark:text-white">
            Giá gốc:{" "}
            <span className="text-sm font-bold  line-through">360.000đ</span>{" "}
            -50% <br />
            Chỉ còn:{" "}
            <span className="text-base font-bold text-red-600">
              360.000đb <br />
              <div className="flex text-sm text-[#28a745]">
                <AiFillGift />
                <p className="ml-1 text-xs font-bold">
                  {" "}
                  Tặng thêm 2 lượt tra online.
                </p>
              </div>
            </span>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="text-center">10 lượt VIP</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium dark:text-white">
            Giá gốc:{" "}
            <span className="text-sm font-bold  line-through">360.000đ</span>{" "}
            -50% <br />
            Chỉ còn:{" "}
            <span className="text-base font-bold text-red-600">
              360.000đ <br />
              <div className="flex text-sm text-[#28a745]">
                <AiFillGift />
                <p className="ml-1 text-xs font-bold">
                  {" "}
                  Tặng thêm 4 lượt tra online.
                </p>
              </div>
            </span>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="text-center">20 lượt VIP</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium dark:text-white">
            Giá gốc:{" "}
            <span className="text-sm font-bold  line-through">360.000đ</span>{" "}
            -50% <br />
            Chỉ còn:{" "}
            <span className="text-base font-bold text-red-600">
              360.000đ
              <br />
              <div className="flex text-sm text-[#28a745]">
                <AiFillGift />
                <p className="ml-1 text-xs font-bold">
                  {" "}
                  Tặng thêm 8 lượt tra online.
                </p>
              </div>
            </span>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
