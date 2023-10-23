"use client"

import { KidNumerologyRecordService } from "@/app/services/numerology-records/kid-numerology-records.service"
import { CircleKidNumerology } from "@/components/xem/kid/result/CircleKidNumerology"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import { EKidNumerologyPlan } from "@/interfaces/kid-numerology.interface"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import moment from "moment"
import { useState } from "react"

export const ReadyRenderKidResult = ({
  children,
  record,
}: {
  record: TKidNumerologyRecord
  children: React.ReactNode
}) => {
  const { full_name, birthday, numerology, relation, plan } = record
  const [isRead, setIsRead] = useState(false)

  const textMatch = (
    <span className="font-semibold text-emerald-500">tương hợp</span>
  )
  const textNotMatch = (
    <span className="font-semibold text-red-600">đối đầu</span>
  )
  const readNumerology = () => {
    KidNumerologyRecordService.setReadKidNumerologyRecord(record.expose_id)
    setIsRead(true)
  }
  return (
    <>
      {!isRead && (
        <div className="flex flex-col justify-center p-5">
          <div className="text-center text-yellow-200">
            <span>
              Họ và tên con: <b>{full_name}</b>
            </span>
            <br />
            <span>
              Ngày sinh: <b>{moment(birthday).format("DD/MM/YYYY")}</b>
            </span>
            <h3 className="mt-5 text-2xl font-medium uppercase">Số chủ đạo</h3>
          </div>
          <CircleKidNumerology number={numerology.number} />
          <div className="flex text-sm font-medium text-yellow-200">
            <div className="flex w-1/2 flex-col">
              <CircleKidNumerology number={relation.father.numerology_number} />
              <div className="flex flex-col text-center">
                <span>Bố {relation.father.full_name}</span>
                <span>
                  {moment(relation.father.birthday).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
            <div className="flex w-1/2 flex-col">
              <CircleKidNumerology number={relation.mother.numerology_number} />
              <div className="flex flex-col text-center">
                <span>Mẹ {relation.mother.full_name}</span>
                <span>
                  {moment(relation.mother.birthday).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col rounded-lg bg-black bg-opacity-50 px-2 pb-2 pt-5 text-white">
            <span className="font-semibold italic">
              Số chủ đạo của bố{" "}
              {relation.father.is_match ? textMatch : textNotMatch} với con
            </span>
            <span className="flex items-center gap-1 font-semibold italic">
              Số chủ đạo của mẹ{" "}
              {plan === EKidNumerologyPlan.Free ? (
                <EyeSlashIcon className="h-4 w-4" />
              ) : relation.mother.is_match ? (
                textMatch
              ) : (
                textNotMatch
              )}
              với con
            </span>
            <span className="font-semibold italic">
              Tính cách nổi bật của bạn nhỏ:
            </span>
            <p
              className="mb-10 text-sm italic leading-loose"
              dangerouslySetInnerHTML={{ __html: numerology.description }}
            ></p>
            <button
              className="w-full rounded border border-solid border-[#8e2ccc] bg-[#981dd0] px-6 py-2.5 text-lg font-bold"
              onClick={readNumerology}
            >
              Xem luận giải chi tiết
            </button>
          </div>
        </div>
      )}
      {isRead && children}
    </>
  )
}
