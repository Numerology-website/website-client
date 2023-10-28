"use client"

import { EyeIcon } from "@heroicons/react/24/outline"
import { Modal } from "flowbite-react"
import { useState } from "react"

export const ButtonShowModalPdf = ({ url }: { url: string | undefined }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <button className="btn btn-add" onClick={() => setOpenModal(true)}>
        <div className="flex items-center gap-2">
          <EyeIcon className="h-6 w-6" />
          <span>Xem trước</span>
        </div>
      </button>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size={"xl"}
      >
        <Modal.Body>
          <div className="h-[50vh]">
            <embed src={url} className="relative h-full w-full" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
