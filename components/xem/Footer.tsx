import { CopyTextButton } from "@/components/xem/CopyTextButton"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

export const ReadNumerologyFooter = ({
  isForKid = false,
}: {
  isForKid?: boolean
}) => {
  const background = isForKid ? "bg-[#b450fe]" : "bg-[#15143e] bg-footer-bg"
  const textColor = isForKid ? "text-white" : "text-[#b7b7b7]"
  return (
    <footer
      className={`${background} bg-[center_20px] bg-no-repeat text-white`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col gap-5 md:flex-row md:gap-3">
          <div className="flex flex-col gap-1 md:w-1/3">
            <div className="flex gap-1">
              <Image
                alt="logo-footer"
                src={"/assets/images/logo-white.png"}
                width={60}
                height={33}
              />
              <h1>Tra cứu thần số học</h1>
            </div>
            <div className="h-[130px] w-[340px] border border-solid border-black">
              Page Facebook Plugin
            </div>
            <span>Hãy chia sẻ trang web để lan toả giá trị bạn nhé</span>
          </div>
          <div className="flex flex-col gap-4 md:w-1/3">
            <h2 className="uppercase">Thông tin chuyển khoản thanh toán</h2>
            <div className={`flex flex-col gap-2 text-sm ${textColor}`}>
              <p className="flex flex-col gap-1">
                <b>- Ngân hàng Vietcombank</b>
                <span>
                  Số tài khoản: 0123456789 <CopyTextButton text="0123456789" />
                </span>
                <span>Chủ tài khoản: Nguyễn Văn A</span>
              </p>
              <p>
                <b>- MOMO: Nguyễn Văn A 0123456789</b>
                <CopyTextButton text="0123456789" />
              </p>
              <b>* NỘI DUNG CHUYỂN KHOẢN: Số điện thoại của bạn</b>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-1/3">
            <h2 className="uppercase">Liên hệ</h2>
            <div className={`flex flex-col gap-2 text-sm ${textColor}`}>
              <div className="flex items-center gap-1">
                <PhoneIcon className="h-3 w-3" />
                <span>
                  Hotline: <b>0123456789</b>
                </span>
                <CopyTextButton text="0123456789" />
              </div>
              <div className="flex items-center gap-1">
                <EnvelopeIcon className="h-3 w-3" />
                <span>Email: tracuuthansohoc@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-3 w-3" />
                <span>Địa chỉ: Số 71, Nguyễn Chí Thanh, Đống Đa, Hà Nội</span>
              </div>
              <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
              <Link href="/dieu-khoan-su-dung">Điều khoản sử dụng</Link>
              <Link href="/purchase">Mua lượt Vip</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
