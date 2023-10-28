import { NumerologyTitleConstant } from "@/components/admin/numerology/NumerologyTitleConstant"
import { TableOfContentButton } from "@/components/xem/result/TableOfContentButton"
import { VipUpgradeRecommend } from "@/components/xem/result/VipUpgradeRecommend"
import {
  ENumerologyRecordPlanType,
  TNumerologyRecord,
} from "@/interfaces/numerology-records.interface"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import moment from "moment"

const TailText = ({
  content,
  isFreePlan,
  isVipText,
}: {
  content: string
  isFreePlan: boolean
  isVipText: boolean
}) => {
  if (isFreePlan && isVipText) {
    return <EyeSlashIcon className="inline-block h-5 w-5 text-red-600" />
  }
  return <span className="font-bold uppercase text-green-400">{content}</span>
}
export const NumerologyData = ({ record }: { record: TNumerologyRecord }) => {
  const { full_name, birthday, plan, numerology } = record
  const isFreePlan = plan === ENumerologyRecordPlanType.Free

  return (
    <section className="container mx-auto px-3 text-white">
      <div className="flex w-full flex-col gap-2 pt-5 text-center">
        <span className="text-lg uppercase">báo cáo thần số học</span>
        <span className="font-bold text-[rgb(247,213,26)]">{full_name}</span>
        <span className="font-bold text-[rgb(247,213,26)]">
          {moment(birthday).format("DD/MM/YYYY")}
        </span>
      </div>
      {isFreePlan && <VipUpgradeRecommend />}
      <div className="flex flex-col gap-2 py-2">
        {NumerologyTitleConstant.map((section, index) => {
          const content = numerology.contents.find(
            (content) => content.blockOrder === index,
          ) || { description: "", value: "", title: "" }
          return (
            <div
              id={section.id}
              key={index}
              className="flex flex-col rounded-md bg-[#f6f6f6] p-2 text-black"
            >
              <h2 className="text-base font-bold">
                {index + 1}. {section.title}{" "}
                {section.hasTailText && (
                  <TailText
                    content={content.title || ""}
                    isFreePlan={isFreePlan}
                    isVipText={section.isVipTailText}
                  />
                )}
              </h2>
              <section
                className="text-sm italic"
                dangerouslySetInnerHTML={{ __html: content.description || "" }}
              ></section>
              <section
                className="mt-2 rounded-md bg-white p-2 text-sm"
                dangerouslySetInnerHTML={{ __html: content.value }}
              ></section>
            </div>
          )
        })}
      </div>
      {isFreePlan && <VipUpgradeRecommend />}
      <div className="mx-auto mt-10 h-[300px] w-1/2">
        <embed src={record.pdf_url} width="100%" height="100%" />
      </div>
      <div className="fixed bottom-1 right-1 z-10">
        <TableOfContentButton />
      </div>
    </section>
  )
}
