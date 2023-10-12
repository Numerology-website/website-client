import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export const VipUpgradeRecommend = () => {
  return (
    <div className="flex flex-col justify-center rounded-xl bg-white p-2.5 text-center">
      <p className="mb-2 text-red-500">
        Bạn đang sử dụng lượt tra miễn phí chỉ xem được giới hạn các luận giải.
        Để xem những luận giải và giải pháp mà các chuyên gia tại{" "}
        {process.env.NEXT_PUBLIC_DOMAIN} đã nghiên cứu cho toàn bộ chỉ số của
        bạn, vui lòng nâng cấp tài khoản VIP!
      </p>
      <div className="flex justify-center">
        <Link
          href="/purchase"
          className="btn-add w-fit rounded-md text-sm hover:opacity-90"
        >
          <div className="flex items-center justify-center gap-2 px-1 py-0.5">
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            <span>Tới trang nâng cấp VIP</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
