import { Content } from "@/components/xem/kid/result/ContentEachPart"
import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import Image from "next/image"

export const PartEKidNumerology = ({
  contents,
}: {
  contents: TKidNumerologyRecord["numerology"]["contents"]
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2">
        <span className="font-semibold uppercase">
          Phần E. Dòng thời gian đầu đời
        </span>
        <div className="mt-2 whitespace-pre-wrap text-sm italic leading-normal">
          <Image
            className="float-left mr-2"
            src={"/assets/images/kid-numerology/kid-PhanE.png"}
            alt="Phần E. Dòng thời gian đầu đời"
            width={150}
            height={150}
          />
          <p className="text-xs">
            Là người lớn, chúng ta biết rằng mọi thứ đều có thời điểm thích hợp.
            Đôi khi chúng ta đã cố gắng bắt đầu một điều gì đó mới hoặc tạo ra
            một sự thay đổi, nhưng không thành công và hy vọng cũng như ước mơ
            của chúng ta tan thành mây khói. Vô tình, điều này xảy ra bởi vì
            chúng ta đã di chuyển ngược dòng của các sự kiện. Vào những thời
            điểm khác, kế hoạch của chúng ta dường như trôi chảy dễ dàng và mọi
            thứ chỉ cần nhấp chuột vào vị trí. Chu kỳ vận số rất hữu ích vì nó
            cấu trúc cuộc sống của trẻ theo một cách có trật tự hơn và nêu bật
            thời điểm tốt nhất để hành động cũng như khi nào nên kiềm chế thực
            hiện bất kỳ hình thức thay đổi nào. Quan trọng hơn, nó sẽ giải thích
            và bổ sung cái nhìn sâu sắc về lý do tại sao trẻ lại có những thay
            đổi như vậy trong từng năm.
            <br />
            Theo thần số học, chu kỳ phát triển của đời người sẽ lặp lại mỗi 9
            năm. Với mỗi năm có số cá nhân là 1, cuộc đời lại bắt đầu một chu kỳ
            mới với xuất phát cao hơn chu kỳ trước. Ảnh hưởng của biểu đồ này sẽ
            thể hiện mạnh nhất khi kết hợp với giai đoạn từ mốc đỉnh cao đầu
            tiên đến mốc đỉnh cao cuối cùng của trẻ.
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
