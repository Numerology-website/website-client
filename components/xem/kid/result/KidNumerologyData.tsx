import { PartAKidNumerologyData } from "@/components/xem/kid/result/PartAKidNumerologyData"
import { PartBKidNumerology } from "@/components/xem/kid/result/PartBKidNumerology"
import { PartCKidNumerology } from "@/components/xem/kid/result/PartCKidNumerology"
import { PartDKidNumerology } from "@/components/xem/kid/result/PartDKidNumerology"
import { PartEKidNumerology } from "@/components/xem/kid/result/PartEKidNumerology"
import { PartFKidNumerology } from "@/components/xem/kid/result/PartFKidNumerology"
import { PartGKidNumerology } from "@/components/xem/kid/result/PartGKidNumerology"
import { KidVipUpgradeRecommend } from "@/components/xem/result/VipUpgradeRecommend"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import { EKidNumerologyPlan } from "@/interfaces/kid-numerology.interface"
import moment from "moment"

export type TGroupRecordBySectionType = {
  [key: string]: TKidNumerologyRecord["numerology"]["contents"]
}

export const KidNumerologyData = ({
  record,
}: {
  record: TKidNumerologyRecord
}) => {
  const isFreePlan = record.plan === EKidNumerologyPlan.Free
  const kid = {
    birthday: record.birthday,
    full_name: record.full_name,
    number: record.numerology.number,
  }
  const groupRecordBySectionType = record.numerology.contents.reduce(
    (result: TGroupRecordBySectionType, content) => {
      const sectionType = content.sectionType
      if (!result[sectionType]) {
        result[sectionType] = []
      }
      result[sectionType].push(content)
      return result
    },
    {},
  )
  return (
    <section className="container mx-auto flex flex-col gap-5 pb-10 pt-5">
      <div className="flex flex-col text-center text-yellow-200">
        <span className="mb-2 font-bold uppercase">
          Báo cáo thần số học cho con
        </span>
        <span className="font-semibold">{record.full_name}</span>
        <span className="font-semibold">
          {moment(record.birthday).format("DD/MM/YYYY")}
        </span>
      </div>
      {isFreePlan && <KidVipUpgradeRecommend />}

      <PartAKidNumerologyData
        content={record.relation}
        kid={kid}
        isFreePlan={isFreePlan}
      />
      <PartBKidNumerology contents={groupRecordBySectionType.B} />
      <PartCKidNumerology contents={groupRecordBySectionType.C} />
      <PartDKidNumerology contents={groupRecordBySectionType.D} />
      <PartEKidNumerology contents={groupRecordBySectionType.E} />
      <PartFKidNumerology contents={groupRecordBySectionType.F} />
      <PartGKidNumerology contents={groupRecordBySectionType.G} />
      {isFreePlan && <KidVipUpgradeRecommend />}
      <div className="mx-auto mt-10 h-[300px] w-1/2">
        <embed src={record.pdf_url} width="100%" height="100%" />
      </div>
    </section>
  )
}
