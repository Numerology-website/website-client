"use client"

import { IoInformationCircle } from "react-icons/io5"
import { FaShieldAlt } from "react-icons/fa"
import { Modal, Button, Label, TextInput } from "flowbite-react"
import { useState } from "react"
import { IUsers } from "@/interfaces/users.interface"

export default function UserInformation({ document }: { document: IUsers }) {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }
  const [openModalChangePass, setOpenModalChangePass] = useState<
    string | undefined
  >()
  const propsChangePass = { openModalChangePass, setOpenModalChangePass }
  return (
    <>
      <div className="m-0 h-16"></div>
      <div className="mx-auto w-[100%] max-w-[99%] px-[15px] md:max-w-[1140px]">
        <div className="mt-5 text-center text-2xl font-bold text-[#007bff]">
          Thông tin của bạn
        </div>
        <div className="m-0 mt-5 p-0 text-left">
          <p className="mb-4">Họ tên:</p>
          <p className="mb-4 ml-[10px] font-bold">{document.full_name}</p>
          <p className="mb-4 mt-6">Số điện thoại (Tên đăng nhập):</p>
          <p className="mb-4 ml-[10px] font-bold">{document.phone_number}</p>
        </div>
        <div className="mt-5 text-center text-white">
          <button
            onClick={() => props.setOpenModal("default")}
            className="rounded border-[#007bff] bg-[#007bff] px-3 py-2 text-base font-normal hover:bg-blue-600"
          >
            <div className="flex text-2xl">
              <IoInformationCircle />
              <p className="ml-2 text-base"> Thay đổi thông tin</p>
            </div>
          </button>
          <button
            onClick={() => propsChangePass.setOpenModalChangePass("default")}
            className="ml-2 rounded border-[#dc3545] bg-[#dc3545] px-3 py-2 text-base font-normal hover:bg-red-600"
          >
            <div className="flex text-2xl">
              <FaShieldAlt />
              <p className="ml-2 text-base"> Thay đổi mật khẩu</p>
            </div>
          </button>
        </div>
      </div>
      <div className="m-0 h-40"></div>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
          <div className="flex text-2xl">
            <IoInformationCircle />
            <p className="ml-2 text-base">Sửa thông tin</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Họ và tên" />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
                defaultValue={document.full_name}
              />
            </div>
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
      <Modal
        show={propsChangePass.openModalChangePass === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
          <div className="flex text-2xl">
            <FaShieldAlt />
            <p className="ml-2 text-base"> Đổi mật khẩu</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Nhập mật khẩu cũ" />
              </div>
              <TextInput id="small" sizing="sm" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Nhập mật khẩu mới" />
              </div>
              <TextInput id="small" sizing="sm" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Nhập lại mật khẩu mới" />
              </div>
              <TextInput id="small" sizing="sm" type="text" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="success"
            onClick={() => propsChangePass.setOpenModalChangePass(undefined)}
          >
            Đổi mật khẩu
          </Button>
          <Button
            color="failure"
            onClick={() => propsChangePass.setOpenModalChangePass(undefined)}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
