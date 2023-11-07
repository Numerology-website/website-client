import { UserService } from "@/app/services/users/user.service"
import { IUsers } from "@/interfaces/users.interface"
import Link from "next/link"

export default async function affiliate() {
  let myProfile: IUsers | undefined = undefined
  myProfile = await UserService.myProfile()
  return (
    <>
      <div className="m-0 h-5"></div>
      <div className="mx-auto w-full max-w-[99%] px-[15px] md:max-w-[1140px]">
        <div className="mt-5 text-center text-2xl font-bold text-[#007bff]">
          MÃ GIỚI THIỆU (AFFILIATE) CỦA BẠN
        </div>
        <div className="m-0 mt-5 p-0 text-left">
          <p className="mb-4">1. Link giới thiệu của bạn:</p>

          {myProfile.can_affiliate === true ? (
            <p className="mb-4 ml-[10px] font-bold">
              {" "}
              https://tracuuthansohoc.com/affiliate?={myProfile.affiliate_id}
            </p>
          ) : (
            <p className="mb-4 ml-[10px] font-bold">
              Bạn phải là người đã xem luận giải đầy đủ (mua ít nhất 1 lần tra
              cứ VIP hoặc PDF báo cáo) để được cấp mã giới thiệu tracuuthansohoc
              và được nhận chính sách cùng lợi ích về tài chính cho bạn.
            </p>
          )}
          <p className="mb-4 mt-6">
            2. Xem chính sách nhận hoa hồng ở link sau:{" "}
            <Link className="text-[#007bff] no-underline" href="/affiliate">
              https://tracuuthansohoc.com/affiliate
            </Link>
            <br />
            Liên hệ hotline{" "}
            <Link
              className="font-bold text-[#007bff] no-underline"
              href="tel:0962984269"
            >
              0962984269
            </Link>{" "}
            để hợp tác.
          </p>
        </div>
      </div>
      <div className="m-0 h-40"></div>
    </>
  )
}
