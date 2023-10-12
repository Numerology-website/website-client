"use client"

import { NumerologyRecordService } from "@/app/services/numerology-records/numerology-records.service"
import { NumerologyChart } from "@/components/xem/result/NumerologyChart"
import { TNumerologyRecord } from "@/interfaces/numerology-records.interface"
import { toastify } from "@/libs/toastify"
import moment from "moment"
import { useState } from "react"

export const ReadyRenderResult = ({
  children,
  record,
}: {
  children: React.ReactNode
  record: TNumerologyRecord
}) => {
  const {
    full_name,
    birthday,
    expose_id,
    numerology: { description, number },
  } = record
  const [isShow, setIsShow] = useState(false)
  const [isRead, setIsRead] = useState(false)
  const onClick = () => {
    NumerologyRecordService.setReadNumerologyRecord(expose_id)
      .then(() => setIsRead(true))
      .catch(() =>
        toastify({
          message: "Có lỗi xảy ra, vui lòng thử lại sau!",
          type: "error",
        }),
      )
  }
  return (
    <>
      {!isShow && !isRead && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 block bg-black bg-opacity-70">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center gap-5 text-white">
              <div className="text-center">
                <span>Xin chúc mừng!</span>
                <br />
                <span>
                  Luận giải về <b className="text-[#f7d51a]">{full_name}</b> đã
                  sẵn sàng.
                </span>
              </div>
              <button
                onClick={() => setIsShow(true)}
                className="mt-10 w-[260px] rounded border border-solid border-[#5a1249] bg-[#ab1d88] px-2.5 py-4 text-2xl font-bold"
              >
                Xem ngay
              </button>
            </div>
          </div>
        </div>
      )}
      {isShow && !isRead && (
        <div className="container mx-auto">
          <div className="flex flex-col gap-5 py-5 text-white">
            <div className="flex flex-col items-center">
              <span>
                Họ và tên: <b className="text-[#f7d51a]">{full_name}</b>
              </span>
              <span>
                Ngày sinh:{" "}
                <b className="text-[#f7d51a]">
                  {moment(birthday).format("DD/MM/YYYY")}
                </b>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-center text-xl font-bold uppercase">
                Số chủ đạo
              </span>
              <div className="relative block max-h-[350px] max-w-[350px]">
                <div className="bg-mandala-bg relative h-[300px] w-[300px] animate-spin-slow bg-cover bg-center bg-no-repeat">
                  <div className="bg-mandala-object animate-mandala-object absolute left-[4.5%] top-[4%] h-[91%] w-[91%] bg-contain bg-center bg-no-repeat"></div>
                </div>
                <div
                  style={{
                    fontFamily: `"Open Sans", sans-serif`,
                    textShadow:
                      "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177, 0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177",
                  }}
                  className="animate-mandala-pulse absolute left-1/2 top-1/2 -ml-[160px] -mt-[160px] block h-[320px] w-[320px] rounded-full pt-[70px] text-center text-[160px] font-semibold leading-[160px]"
                >
                  {number}
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="flex flex-col items-center gap-5 rounded-3xl bg-black bg-opacity-40 p-2">
                <NumerologyChart />
                {description && (
                  <div
                    className="text-sm italic leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                )}
                <button
                  onClick={() => onClick()}
                  className="w-full rounded-xl border border-solid border-[#5a1249] bg-[#ab1d88] px-6 py-2.5 text-lg font-bold text-white shadow-[0_0_1px_2px_rgb(255,54,204,35%)]"
                >
                  Xem chi tiết luận giải
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isRead && children}
    </>
  )
}
