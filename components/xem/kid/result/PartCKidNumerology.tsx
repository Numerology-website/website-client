import { Content } from "@/components/xem/kid/result/ContentEachPart"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import Image from "next/image"

export const PartCKidNumerology = ({
  contents,
}: {
  contents: TKidNumerologyRecord["numerology"]["contents"]
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2">
        <span className="font-semibold uppercase">
          Phần C. Chỉ số từ họ tên
        </span>
        <div className="mt-2 whitespace-pre-wrap text-sm italic leading-normal">
          <Image
            className="float-left mr-2"
            src={"/assets/images/kid-numerology/kid-PhanC.png"}
            alt="Phần C. Chỉ số từ họ tên"
            width={150}
            height={150}
          />
          <p className="text-xs">
            Từ khi sinh ra, mỗi người đều có cho mình một cái tên nhất định. Các
            nhà nghiên cứu Thần số học cho rằng những chữ cái trong tên của mỗi
            người đều có ảnh hưởng đến tính cách, tâm hồn bên trong và vận mệnh
            của họ. Khi tính Thần số học theo tên sẽ khám phá được 3 chỉ số quan
            trọng nhất bao gồm: Chỉ số sứ mệnh, Chỉ số linh hồn và Chỉ số nhân
            cách. Và qua đó phần nào khám phá ra những điều bí ẩn nằm sâu bên
            trong nội tâm và tính cách của mỗi người.
            <br /> <br />
            Năng lượng của tên dần hình thành khi con lớn lên nên nó sẽ chưa có
            nhiều ảnh hưởng đến con và chưa thể hiện rõ nét khi còn bé. Tuy
            nhiên, trong bản báo cáo này, chúng tôi vẫn sẽ chỉ ra những chỉ số
            được tính từ họ tên để giúp cha mẹ phần nào hình dung được ý nghĩa
            của chúng có tác động như thế nào tới trẻ.
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
