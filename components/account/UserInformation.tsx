"use client"

import { IoInformationCircle } from "react-icons/io5"
import { FaShieldAlt } from "react-icons/fa"
import { Modal, Button, Label, TextInput } from "flowbite-react"
import { useState } from "react"
import { IUsers } from "@/interfaces/users.interface"
import { useSession } from "next-auth/react"
import { UserService } from "@/app/services/users/user.service"
import { toastify } from "@/libs/toastify"
export default function UserInformation({ document }: { document: IUsers }) {
  const [firstName, setFirstName] = useState<string>(document.first_name)
  const [lastName, setLastName] = useState<string>(document.last_name)
  const [oldPass, setOldPass] = useState<string>("")
  const [newPass, setNewPass] = useState<string>("")
  const [confirmNewPass, setConfirmNewPass] = useState<string>("")

  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }

  const [openModalChangeName, setOpenModalChangeName] = useState<
    string | undefined
  >()
  const propsChangeName = { openModalChangeName, setOpenModalChangeName }
  const [openModalChangePass, setOpenModalChangePass] = useState<
    string | undefined
  >()
  const propsChangePass = { openModalChangePass, setOpenModalChangePass }

  const submitChangeName = () => {
    UserService.changeName(
      { first_name: firstName, last_name: lastName },
      accessToken,
    )
      .then((res) => {
        toastify({ message: "Cập nhật thành công", type: "success" })
        setFirstName(res.first_name)
        setLastName(res.last_name)
        propsChangeName.setOpenModalChangeName(undefined)
      })
      .catch((err) => {
        toastify({ message: err, type: "error" })
      })
  }
  const submitChangePass = () => {
    if (newPass.length < 6) {
      return toastify({
        message: "Lỗi! Mật khẩu phải có ít nhất 6 ký tự.",
        type: "error",
      })
    }
    if (newPass !== confirmNewPass) {
      return toastify({
        message: "Lỗi! Mật khẩu nhập không giống nhau.",
        type: "error",
      })
    }
    if (oldPass === "") {
      return toastify({
        message: "Lỗi! Chưa nhập mật khẩu cũ.",
        type: "error",
      })
    }

    UserService.changePassword(oldPass, newPass, accessToken)
      .then(() => {
        toastify({ message: "Cập nhật thành công", type: "success" })
        propsChangePass.setOpenModalChangePass(undefined)
      })
      .catch((err) => {
        toastify({ message: err, type: "error" })
      })
  }
  return (
    <>
      <div className="m-0 h-16"></div>
      <div className="mx-auto w-full max-w-[99%] px-[15px] md:max-w-[1140px]">
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
            onClick={() => propsChangeName.setOpenModalChangeName("default")}
            className="m-1 rounded border-[#007bff] bg-[#007bff] px-3 py-2 text-base font-normal hover:bg-blue-600"
          >
            <div className="flex text-2xl">
              <IoInformationCircle />
              <p className="ml-2 text-base"> Thay đổi thông tin</p>
            </div>
          </button>
          <button
            onClick={() => propsChangePass.setOpenModalChangePass("default")}
            className="m-1 rounded border-[#dc3545] bg-[#dc3545] px-3 py-2 text-base font-normal hover:bg-red-600"
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
        show={propsChangeName.openModalChangeName === "default"}
        onClose={() => propsChangeName.setOpenModalChangeName(undefined)}
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
                <Label htmlFor="small" value="Họ" />
              </div>
              <TextInput
                sizing="sm"
                type="text"
                defaultValue={document.first_name}
                onChange={(event) => {
                  setFirstName(event.target.value)
                }}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Tên" />
              </div>
              <TextInput
                sizing="sm"
                type="text"
                defaultValue={document.last_name}
                onChange={(event) => {
                  setLastName(event.target.value)
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="success" onClick={() => submitChangeName()}>
            Sửa thông tin
          </Button>
          <Button
            color="failure"
            onClick={() => propsChangeName.setOpenModalChangeName(undefined)}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={propsChangePass.openModalChangePass === "default"}
        onClose={() => propsChangePass.setOpenModalChangePass(undefined)}
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
              <TextInput
                sizing="sm"
                type="password"
                onChange={(event) => {
                  setOldPass(event.target.value)
                }}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Nhập mật khẩu mới" />
              </div>
              <TextInput
                sizing="sm"
                type="password"
                onChange={(event) => {
                  setNewPass(event.target.value)
                }}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Nhập lại mật khẩu mới" />
              </div>
              <TextInput
                sizing="sm"
                type="password"
                onChange={(event) => {
                  setConfirmNewPass(event.target.value)
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="success" onClick={() => submitChangePass()}>
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
