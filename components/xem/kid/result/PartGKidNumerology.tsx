/* eslint-disable react/no-unescaped-entities */
import { Content } from "@/components/xem/kid/result/ContentEachPart"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import Image from "next/image"

export const PartGKidNumerology = ({
  contents,
}: {
  contents: TKidNumerologyRecord["numerology"]["contents"]
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2">
        <span className="font-semibold uppercase">
          Phần G. Định hướng nghề nghiệp
        </span>
        <div className="mt-2 whitespace-pre-wrap text-sm italic leading-normal">
          <Image
            className="float-left mr-2"
            src={"/assets/images/kid-numerology/kid-PhanG.png"}
            alt="Phần G. Định hướng nghề nghiệp"
            width={150}
            height={150}
          />
          <p className="text-xs">
            Là bậc cha mẹ, ai cũng mong muốn con mình có một công việc tốt, hơn
            hết là gặt hái được nhiều thành công và có thể gắn bó lâu dài. Vì
            thế, để lựa chọn được hướng đi chuẩn xác không phải là việc một sớm
            một chiều, mà là cả một hành trình dài tìm hiểu, quan sát. Mà trong
            chuyến hành trình đó, không chỉ có dấu chân độc hành của riêng trẻ
            mà còn phải có sự đồng hành và hỗ trợ của cha mẹ. Nếu cha mẹ chủ
            động định hướng cho con từ sớm, bắt đầu từ những bài học khám phá sở
            thích, năng lực, tính cách và giúp con có thật nhiều trải nghiệm
            trong thế giới nghề nghiệp, con chắc chắn sẽ vững vàng trước những
            quyết định về nghề nghiệp trong tương lai.
            <br />
            <br />
            Trong giới hạn bản Báo cáo Thần số học cho con, chúng tôi sẽ chỉ ra
            những nhóm ngành phù hợp với trẻ dựa trên những kết quả phân tích về
            chỉ số đường đời, chỉ số sứ mệnh và chỉ số linh hồn. Đây là bộ 3 chỉ
            số sẽ giúp cha mẹ tìm ra được công việc mà con yêu thích, đam mê
            (chỉ số linh hồn) mà công việc đó lại phù hợp với thế mạnh của con
            (chỉ số đường đời), là con đường sẽ dẫn lối con tới thành công (chỉ
            số sứ mệnh). Từ đó, cha mẹ có thể tham khảo và đồng hành cùng trẻ từ
            sớm trong việc định hướng nghề nghiệp tương lai.
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
