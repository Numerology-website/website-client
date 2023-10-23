import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"

export const Content = ({
  content,
}: {
  content: TKidNumerologyRecord["numerology"]["contents"][0]
}) => {
  return (
    <div className="rounded-lg bg-[#f6f6f6] p-2">
      <div className="text-base font-semibold uppercase">
        <span className="mr-1 inline-block">{content.blockOrder + 3}.</span>
        <span
          className="[&>*]:inline"
          dangerouslySetInnerHTML={{ __html: content.title }}
        ></span>
      </div>
      <div
        className="text-xs italic"
        dangerouslySetInnerHTML={{ __html: content.description }}
      ></div>
      <div
        className="mt-2 rounded-lg bg-white p-2 text-xs"
        dangerouslySetInnerHTML={{ __html: content.value }}
      ></div>
    </div>
  )
}
