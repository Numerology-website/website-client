/* eslint-disable react/no-unescaped-entities */
import { Content } from "@/components/xem/kid/result/ContentEachPart"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import Image from "next/image"

export const PartFKidNumerology = ({
  contents,
}: {
  contents: TKidNumerologyRecord["numerology"]["contents"]
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2">
        <span className="font-semibold uppercase">
          Phần F. Biểu đồ kim tự tháp
        </span>
        <div className="mt-2 whitespace-pre-wrap text-sm italic leading-normal">
          <Image
            className="float-left mr-2"
            src={"/assets/images/kid-numerology/kid-PhanF.png"}
            alt="Phần F. Biểu đồ kim tự tháp"
            width={150}
            height={150}
          />
          <p className="text-xs">
            Triết học phương Tây hầu hết ủng hộ quan điểm "Mục đích của mọi sự
            sống trên đời là để lại các DI SẢN". Thần số học cũng không nằm
            ngoài triết lý trên, vì vậy theo quan điểm của Thần số học, mỗi
            người đều có 4 giai đoạn đỉnh cao, là 4 giai đoạn mà người đó đang
            trong "độ tuổi vàng" của mình, 4 giai đoạn đỉnh cao nói về những
            khía cạnh mà một người có thể tạo ra nhiều DI SẢN và giá trị nhất
            trong cuộc đời của mình. Vì vậy việc bố mẹ hiểu biết về những cơ hội
            trong cuộc đời của con sẽ có thể giúp đỡ và đồng hành cùng con một
            cách sáng suốt, là ngọn hải đăng chỉ đường, dẫn lối, soi sáng những
            chặng đường con đi.
            <br />
            <br />
            Như vậy, cả 4 bốn đỉnh cao sẽ đều ảnh hưởng đến cuộc sống của con,
            nhưng đỉnh cao đầu tiên có ý nghĩa vô cùng quan trọng vì nó thiết
            lập tốc độ trong những năm đầu đời của con và tạo nền tảng để xây
            dựng các đỉnh cao khác. Đỉnh cao đầu tiên và đỉnh cao cuối cùng có
            thời gian dài nhất, trong khi các đỉnh cao thứ hai và thứ ba kéo dài
            chín năm mỗi giai đoạn và hoạt động trong giai đoạn giữa của cuộc
            đời con. Vì vậy, trong Báo cáo Thần số học cho con, chúng tôi chỉ
            tập trung phân tích tháp đỉnh cao đầu tiên này.
            <br />
            <br />
            Trong giai đoạn đỉnh cao đầu tiên, chắc chắn con sẽ cần đến sự hướng
            dẫn, hỗ trợ của cha mẹ bởi thông thường, một đứa trẻ không thể tận
            dụng nhiều cơ hội mà cuộc sống mang lại vì sự non nớt, thiếu tự tin
            hoặc sợ hãi vì một lý do nào đó. Trong thế giới đầy biến động và
            luôn thay đổi ngày nay, các bậc cha mẹ thường thấy cuộc sống thật
            khó hiểu và bối rối; trẻ có thể sẽ còn thấy khó khăn hơn. Chìa khóa
            để thành công trong đỉnh cao này nằm ở khả năng của cha mẹ trong
            việc đặt nền móng vững chắc trong những lĩnh vực mà các con số của
            con cho thấy khả năng thành công và đạt được. Hãy nhớ rằng, con đã
            chọn những con số này trong tiềm thức và chúng biểu thị con đường
            dẫn đến thành công. Những khó khăn trong cuộc sống có thể giảm đi
            rất nhiều và cơ hội thành công sẽ rất lớn nếu lập kế hoạch cẩn thận
            trước.
            <br />
            Tóm lại, tháp đỉnh cao sẽ cung cấp cho cha mẹ toàn bộ cơ hội của con
            trong cuộc sống, vì vậy hãy tận dụng nó một cách hiệu quả.
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
