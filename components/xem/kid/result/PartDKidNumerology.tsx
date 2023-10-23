import { Content } from "@/components/xem/kid/result/ContentEachPart"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import Image from "next/image"

export const PartDKidNumerology = ({
  contents,
}: {
  contents: TKidNumerologyRecord["numerology"]["contents"]
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2">
        <span className="font-semibold uppercase">
          Phần D. Biểu đồ sức mạnh
        </span>
        <div className="mt-2 whitespace-pre-wrap text-sm italic leading-normal">
          <Image
            className="float-left mr-2"
            src={"/assets/images/kid-numerology/kid-PhanD.png"}
            alt="Phần D. Biểu đồ sức mạnh"
            width={150}
            height={150}
          />
          <p className="text-xs">
            Phần lớn chúng ta không thực sự biết mình có những điểm mạnh gì để
            phát huy được hết tiềm năng sâu bên trong đó. Các nhà thần số học
            tin rằng mọi thứ trong vũ trụ đều được kết nối bằng các con số và
            bằng cách hiểu các con số liên quan đến một người, sự kiện hoặc đối
            tượng, chúng ta có thể hiểu rõ hơn về bản chất và mục đích của sự
            vật đó.
            <br />
            Biểu đồ ngày sinh được ví như chiếc chìa khóa giúp khám phá bản chất
            mỗi người thông qua Thần số học. Mục đích chính của nó là tiết lộ
            tổng quan những ưu, nhược điểm về năng lực, sức mạnh của mỗi người.
            Từ đó giúp cha mẹ có những cách nuôi dạy, giáo dục trẻ hợp lý, phù
            hợp với tính cách, cá tính của trẻ.
            <br />
            Mỗi đứa trẻ có một ngày sinh khác nhau, tương ứng với một Biểu đồ
            ngày sinh nhất định. Cách thực hiện được dựa trên nguyên tắc của nhà
            toán học Pythagoras.
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
