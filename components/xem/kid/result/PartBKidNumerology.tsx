import { Content } from "@/components/xem/kid/result/ContentEachPart"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import Image from "next/image"

export const PartBKidNumerology = ({
  contents,
}: {
  contents: TKidNumerologyRecord["numerology"]["contents"]
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2">
        <span className="font-semibold uppercase">
          Phần B. Chỉ số từ ngày sinh
        </span>
        <div className="mt-2 whitespace-pre-wrap text-sm italic leading-normal">
          <Image
            className="float-left mr-2"
            src={"/assets/images/kid-numerology/kid-PhanB.png"}
            alt="Phần B. Chỉ số từ ngày sinh"
            width={150}
            height={150}
          />
          <p className="text-xs">
            Hiểu trẻ để có thể định hướng con phát triển theo đúng sở thích và
            nguyện vọng của chính con có lẽ là đề bài khó nhất của mỗi bậc cha
            mẹ. Chúng tôi tin rằng việc hiểu được bộ 3 chỉ số của con bao gồm:
            chỉ số đường đời, chỉ số thái độ và chỉ số năng lực tự nhiên sẽ là
            công cụ đắc lực giúp ích cha mẹ rất nhiều trong việc giải bài toán
            &quot;hóc búa&quot; này. Đây là những chỉ số được tính từ ngày sinh
            nên chúng sẽ ảnh hưởng rất rõ đến con khi con còn nhỏ. Chúng tiết lộ
            tính cách, điểm mạnh, điểm yếu, năng khiếu bẩm sinh, thái độ, cách
            phản ứng của trẻ trước các vấn đề trong cuộc sống. Bằng cách này,
            cha mẹ sẽ hiểu rõ hơn tại sao con lại có những suy nghĩ, hành động
            và cách cư xử như vậy, từ đó có sự chuẩn bị tốt nhất để cùng con đối
            mặt với những thách thức và cơ hội phía trước. Cha mẹ sẽ học được
            điều gì nên trau dồi, điều gì cần đề phòng và điều gì nên phát huy
            cho con, cũng như hình thành được cách nuôi dạy con đúng đắn, bởi
            cha mẹ luôn là người đồng hành có sức ảnh hưởng sâu sắc nhất tới con
            trẻ ở những giai đoạn đầu đời này.
          </p>
        </div>
      </div>
      {contents
        .sort((a, b) => a.blockOrder - b.blockOrder)
        .map((content, index) => (
          <Content key={index} content={content} />
        ))}
    </div>
  )
}
