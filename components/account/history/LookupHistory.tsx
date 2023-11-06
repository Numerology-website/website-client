"use client"
import { NumerologyRecordService } from "@/app/services/numerology-records/numerology-records.service"
import { TNumerologyRecord } from "@/interfaces/numerology-records.interface"
import { Select, Button, Table, Pagination, Modal } from "flowbite-react"
import moment from "moment"
import Link from "next/link"
import { useState } from "react"
import { BsEyeFill } from "react-icons/bs"

interface ITableLookupHistory {
  documents: TNumerologyRecord[]
}

export default function LookupHistory({ documents }: ITableLookupHistory) {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }

  const [openModalOrderSuccess, setOpenOrderSuccess] = useState<
    string | undefined
  >()
  const propsOrderSuccess = { openModalOrderSuccess, setOpenOrderSuccess }

  const [readNumerology, setReadNumerology] = useState<string | undefined>("")

  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page: number) => setCurrentPage(page)
  const openModalread = (url: string | undefined) => {
    props.setOpenModal("default")
    setReadNumerology(url)
  }

  return (
    <>
      <div className="mx-auto flex w-full max-w-[99%] flex-col px-[15px] md:max-w-[1140px]">
        <div className="m-[5px_0]">
          <div className="float-left ml-[10px] mt-1 text-xs">
            <Select id="countries" required>
              <option>Tất cả lượt tra</option>
              <option>Lượt tra Free</option>
              <option>Lượt tra Online</option>
              <option>Lượt tra Vip + Pdf</option>
            </Select>
          </div>
          <div className="float-right ml-[10px] mt-1 text-xs">
            <Pagination
              currentPage={1}
              layout="table"
              onPageChange={(page) => {
                setCurrentPage(page)
              }}
              totalPages={1000}
            />
          </div>
        </div>

        <div className="overflow-y-auto overflow-x-hidden p-[10px]">
          {documents.length === 0 ? (
            <p className="mb-[10px] mt-5 text-center text-red-600">
              Chưa có lượt tra cứu nào!
            </p>
          ) : (
            <Table className="">
              <Table.Head>
                <Table.HeadCell className="w-[3%] bg-[#86cfda] text-center">
                  #
                </Table.HeadCell>
                <Table.HeadCell className="w-[10%] bg-[#86cfda] text-center">
                  {" "}
                  Lịch sử tra cứu
                </Table.HeadCell>
                <Table.HeadCell className="w-[10%] bg-[#86cfda] text-center">
                  {" "}
                  PDF báo cáo
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y text-black">
                {documents.map((item, index) => (
                  <Table.Row
                    key={index + 1}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="text-center">{index + 1}</Table.Cell>
                    <Table.Cell className="whitespace-nowrap text-xs font-medium dark:text-white">
                      <p className="font-bold">
                        {item.full_name} - {item.birthday}
                      </p>
                      <p className="italic">
                        Thời gian:{" "}
                        {moment(item.created_at).format("YYYY-MM-DD hh:mm:ss")}
                      </p>
                      <p>
                        Loại tra:{" "}
                        <strong className="text-red-600">{item.plan}</strong>{" "}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium dark:text-white">
                      <div className="flex w-full justify-center">
                        <Button
                          onClick={() => {
                            openModalread(item.pdf_url)
                          }}
                          color="success"
                        >
                          <div className="flex justify-center text-base">
                            <BsEyeFill />
                            <p className="ml-2 text-xs font-bold"> Xem trước</p>
                          </div>
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </div>
      </div>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
          <div className="flex text-2xl">
            <p className="ml-2 text-base">
              BẢN XEM TRƯỚC BÁO CÁO THẦN SỐ HỌC CỦA BẠN
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <object
            data="http://localhost:3001/uploads/pdf/vip_%C4%90%E1%BB%97-Nam-Trung_DPhJ8j85qIFw5k38.pdf"
            type="application/pdf"
            width="100%"
            height="500px"
          >
            <p>
              PDF cannot be displayed. You can download it{" "}
              <a href={readNumerology}>here</a>.
            </p>
          </object>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="mx-auto"
            color="success"
            onClick={() => props.setOpenModal(undefined)}
          >
            Đặt mua
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={propsOrderSuccess.openModalOrderSuccess === "default"}
        onClose={() => propsOrderSuccess.setOpenOrderSuccess(undefined)}
      >
        <Modal.Header>
          <div className="flex text-2xl">
            <p className="ml-2 text-base">
              BẢN XEM TRƯỚC BÁO CÁO THẦN SỐ HỌC CỦA BẠN
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <object
            data={readNumerology}
            type="application/pdf"
            width="100%"
            height="500px"
          >
            <p>
              PDF cannot be displayed. You can download it{" "}
              <Link
                className="text-blue-600 underline"
                href={readNumerology ? readNumerology : ""}
              >
                here
              </Link>
              .
            </p>
          </object>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="success"
            onClick={() => propsOrderSuccess.setOpenOrderSuccess(undefined)}
          >
            Sửa thông tin
          </Button>
          <Button
            color="failure"
            onClick={() => propsOrderSuccess.setOpenOrderSuccess(undefined)}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
