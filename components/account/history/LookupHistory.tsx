"use client"
import { Select, Button, Table, Pagination, Modal } from "flowbite-react"
import { useState } from "react"
import { BsEyeFill } from "react-icons/bs"

type ILookupHistory = {
  title: string
  created: string
  lookupType: string
}
interface ITableLookupHistory {
  documents: ILookupHistory[]
}

export default function LookupHistory({ documents }: ITableLookupHistory) {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }
  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page: number) => setCurrentPage(page)
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
                <Table.HeadCell className="w-[10%] bg-[#86cfda] text-center">
                  #
                </Table.HeadCell>
                <Table.HeadCell className="bg-[#86cfda] text-center">
                  {" "}
                  Lịch sử tra cứu
                </Table.HeadCell>
                <Table.HeadCell className="w-[20%] bg-[#86cfda] text-center">
                  {" "}
                  PDF báo cáo
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y text-black">
                {documents.map(
                  (
                    item: {
                      title: string
                      created: string
                      lookupType: string
                    },
                    index,
                  ) => (
                    <Table.Row
                      key={index + 1}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="text-center">
                        {index + 1}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap text-xs font-medium dark:text-white">
                        <p className="font-bold">{item.title}</p>
                        <p className="italic">Thời gian: {item.created}</p>
                        <p>Loại tra: {item.lookupType}</p>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium dark:text-white">
                        <div className="flex w-full justify-center">
                          <Button
                            onClick={() => props.setOpenModal("default")}
                            color="success"
                          >
                            <div className="flex justify-center text-base">
                              <BsEyeFill />
                              <p className="ml-2 text-xs font-bold">
                                {" "}
                                Xem trước
                              </p>
                            </div>
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ),
                )}
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
            <p className="ml-2 text-base">Sửa thông tin</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="success" onClick={() => props.setOpenModal(undefined)}>
            Sửa thông tin
          </Button>
          <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
