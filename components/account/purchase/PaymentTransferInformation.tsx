"use client"
import Link from "next/link"
import { Button } from "flowbite-react"
import { CopyTextButton } from "@/components/xem/CopyTextButton"
export default function PaymentTransferInformation() {
  return (
    <>
      <div className="mt-[15px] text-left text-sm leading-[2]">
        <div className="rounded-xl bg-[#f5f5f5] p-[10px]">
          <p className="mb-1 font-bold ">
            A. THÔNG TIN CHUYỂN KHOẢN THANH TOÁN:
          </p>
          <div className="mb-[10px]">
            <b>Chủ tài khoản: Nguyễn Thị Thu Trang</b> <br />
            <b>- Ngân Hàng Vietcombank</b> <br />
            <div className="flex gap-2">
              STK: 9962984269
              <CopyTextButton text="9962984269" />
            </div>
          </div>
          <div className="mb-[10px]">
            <b>- Ví điện tử MOMO 0962984269</b> <br />
            <div className="flex gap-2">
              SĐT: 0962984269
              <CopyTextButton text="0962984269" />
            </div>
          </div>
          <div className="mb-[10px]">
            <b>- Paypal USD: Dinh Thi Hoang Yen</b> <br />
            <div className="flex gap-2">
              Email: tctsh.online@gmail.com
              <CopyTextButton text="tctsh.online@gmail.com" />
            </div>
          </div>
        </div>
        <div className="mb-[15px] mt-[10px] rounded-xl bg-[#f5f5f5] p-[10px]">
          <b className="flex">
            B. NỘI DUNG CHUYỂN KHOẢN:
            <span className="mr-2 italic text-red-600">0833667751</span>
            <CopyTextButton text="0833667751" />
          </b>
        </div>
      </div>
      <div className="mb-[25px] block text-sm font-bold">
        Sau khi thanh toán thành công bạn có thể liên hệ tới Hotline: 0962984269{" "}
        <CopyTextButton text="0962984269" />
        <Link href="https://zalo.me/0962984269" target="_blank">
          <img
            className="mx-[10px] -mt-1 inline h-[30px]"
            src="https://xem.tracuuthansohoc.com/uploads/images/icon-zalo.png"
            alt=""
          />
        </Link>
        <Link href="https://wa.me/+84962984269" target="_blank">
          <img
            className="mx-[10px] -mt-1 inline h-[30px]"
            src="https://xem.tracuuthansohoc.com/uploads/images/icon-whatsapp-min.png"
            alt=""
          />
        </Link>
        <Link href="sms:0962984269" target="_blank">
          <img
            className="mx-[10px] -mt-1 inline h-[30px]"
            src="https://xem.tracuuthansohoc.com/uploads/images/icon-sms-min.png"
            alt=""
          />
        </Link>
        <Link href="tel:0962984269" target="_blank">
          <img
            className="mx-[10px] -mt-1 inline h-[30px]"
            src="https://xem.tracuuthansohoc.com/uploads/images/icon-call-min.png"
            alt=""
          />
        </Link>
        để được kích hoạt ngay! Tracuuthansohoc luôn có đội ngũ làm việc
        <b>24/24 tất cả các ngày</b> để hỗ trợ bạn bất kỳ lúc nào.
      </div>
    </>
  )
}
