import { VipUpgradeRecommend } from "@/components/xem/result/VipUpgradeRecommend"
import {
  ENumerologyRecordPlanType,
  TNumerologyRecord,
} from "@/interfaces/numerology-records.interface"
import moment from "moment"

export const NumerologyData = ({ record }: { record: TNumerologyRecord }) => {
  const { full_name, birthday, plan } = record
  return (
    <section className="container mx-auto px-3 text-white">
      <div className="flex w-full flex-col gap-2 pt-5 text-center">
        <span className="text-lg uppercase">báo cáo thần số học</span>
        <span className="font-bold text-[rgb(247,213,26)]">{full_name}</span>
        <span className="font-bold text-[rgb(247,213,26)]">
          {moment(birthday).format("DD/MM/YYYY")}
        </span>
      </div>
      {plan === ENumerologyRecordPlanType.Free && <VipUpgradeRecommend />}
    </section>
  )
}
