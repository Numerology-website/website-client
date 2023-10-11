import { UserService } from "@/app/services/users/user.service"
import { CarouselSection } from "@/components/xem/CarouselSection"
import { FormReadNumerology } from "@/components/xem/FormReadNumerology"
import { ListReadNumerologyHistory } from "@/components/xem/ListReadNumerologyHistory"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import Link from "next/link"
import Image from "next/image"

export default async function ReaderPage() {
  const [session, myProfile] = await Promise.all([
    getServerSession(authOptions),
    UserService.myProfile(),
  ])
  return (
    <section className="w-full bg-galaxy-pattern">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-col gap-3 pb-10 pt-5">
          <CarouselSection />
          <div className="text-center leading-normal text-[#ffed00]">
            <b className="uppercase">Dự đoán chính xác</b>
            <p className="text-base">
              Thành công đường đời, điểm mạnh yếu, tiềm năng sự nghiệp, các giai
              đoạn thuận lợi - khó khăn, tương hợp tình duyên, hôn nhân,...
            </p>
          </div>
          {session ? (
            <div className="text-center">
              <span className="text-white">
                Bạn có{" "}
                <b className="text-red-500">{myProfile.vip_turn_remain}</b> lần
                tra Vip, mua{" "}
              </span>
              <Link
                href={"/purchase"}
                className="text-[#007bFF] hover:underline"
              >
                tại đây
              </Link>
            </div>
          ) : (
            <></>
          )}
          <div className="rounded-lg bg-[#0000006b] p-1 text-sm text-white">
            <FormReadNumerology />
            <div>
              <span className="text-lg">Chú thích:</span>
              <ul className="list-disc">
                <li>
                  Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai
                  sinh,...) và ngày sinh dương lịch thật của bạn khác nhau thì
                  cuộc đời bạn sẽ có xáo trộn của cả 2 ngày sinh này. Bạn nên
                  tra cứu cả hai để biết thêm, tuy nhiên kết quả sẽ thiên về
                  ngày sinh dương lịch!
                </li>
                <li>
                  Tên thường dùng là tên mọi người thường dùng để gọi bạn hoặc
                  một danh xưng mà bạn thường dùng, tên này sẽ bù trừ vào biểu
                  đồ ngày sinh của bạn. Nếu bạn không có tên thường gọi, hệ
                  thống sẽ tự lấy tên từ họ tên khai sinh của bạn để tính bù trừ
                  trong biểu đồ tổng hợp.
                </li>
                <li>
                  Số chủ đạo tuy rất quan trọng nhưng không thể hiện hết toàn bộ
                  thông tin thần số của bạn. Để xem kết quả tra cứu chính xác
                  nhất, hãy kết hợp tất cả các chỉ số mà chúng tôi tính toán cho
                  bạn!
                </li>
              </ul>
            </div>
            <ListReadNumerologyHistory />
          </div>
        </div>
      </div>
      <div className="bg-lifepath-bg bg-cover bg-no-repeat">
        <div className="bg-white">
          <div className="bg-block-bg-light bg-right-top bg-no-repeat">
            <div className="container mx-auto px-5 md:px-0 md:pb-10">
              <div className="flex flex-col py-10 md:flex-row md:gap-10">
                <div className="flex flex-col gap-4 text-justify text-black md:w-1/2">
                  <h3 className="text-white">
                    Tạo báo cáo thần số học cho riêng bạn | Tra cứu online hoàn
                    toàn miễn phí
                  </h3>
                  <p className="text-lg font-medium">
                    Bạn ở đây vì bạn khao khát được biết mình <i>thực sự</i> là
                    ai, người khác nhìn nhận bạn như thế nào, bạn nắm bắt được
                    cơ hội gì để trở nên GIÀU CÓ và HẠNH PHÚC hơn…
                  </p>
                  <p className="">
                    Hoặc có lẽ đó là để hiểu những &quot;sự trùng hợp&quot; kỳ
                    lạ đã và đang xuất hiện trong cuộc sống của bạn gần đây, như{" "}
                    <b>việc lặp lại các số 11:11</b> hoặc 333 xuất hiện ở những
                    nơi kỳ lạ nhất. Dù là bất cứ lý do là gì, bạn đã tìm đến
                    trang web này là tìm đến đúng nơi rồi.
                  </p>
                  <p>
                    Như bạn sắp thấy, những con số ảnh hưởng đến cuộc sống của
                    bạn theo nhiều cách đẹp đẽ, bí ẩn và có thể tiết lộ nhiều
                    hơn những gì bạn từng nghĩ có thể về tính cách, tiềm năng và{" "}
                    <b>mục đích sống thực sự của bạn.</b>
                  </p>
                  <p>
                    Thần số học là 1 ngành khoa học 4000 năm tuổi dựa trên toán
                    học của vũ trụ, bằng cách xem xét{" "}
                    <b>ý nghĩa của tên và ngày sinh của bạn,</b> chúng tôi có
                    thể khám phá ra nhiều sự thật ngạc nhiên ẩn dấu trong{" "}
                    <b>3 biểu đồ và hơn 20 chỉ số</b> của riêng bạn, bao gồm cả
                    điểm mạnh, điểm yếu, mối quan hệ giữa những việc bạn làm và
                    con đường đi tới <b>hạnh phúc</b> thực sự của bạn.
                  </p>
                </div>
                <div className="flex min-h-[450px] justify-center md:w-1/2 md:justify-start">
                  <Image
                    src="/assets/images/numerology-octagons.png"
                    alt="numerology-octagons"
                    width={318}
                    height={450}
                    className="max-h-[450px]"
                  />
                </div>
              </div>
              <div className="my-5 rounded-xl bg-[#f6f6f6] p-4">
                <em className="text-xs">
                  Bạn lưu ý, thần số học giống như một tấm bản đồ để chỉ cho bạn
                  những điểm mạnh điểm yếu trong bản ngã của bạn, những con
                  đường bạn nên đi theo để có được hạnh phúc và cuộc đời viên
                  mãn. Bạn muốn đạt tới đích đều phải vất vả nỗ lực kiên trì rất
                  nhiều trên đường đời; có người có thể sẽ nhanh tới được đích,
                  nhưng cũng có người thì không tới được. Khi đọc những luận
                  giải về kết quả tra cứu của bạn, bạn nên đặt câu hỏi cho chính
                  mình để hiểu mình hơn và biết cần làm gì để đạt được hạnh phúc
                  và thành công trong cuộc đời nhé. Chúc bạn và người thân luôn
                  an lành!
                  <br />
                  <b>- Louis Nguyen -</b>
                </em>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-5 py-10 md:px-0">
          <div className="mx-auto flex max-w-3xl flex-col text-white">
            <p className="text-justify text-lg">
              Trong <b>Các Chỉ Số Thần Số Học</b> được tính toán cho riêng bạn,
              chúng tôi tính toán{" "}
              <b>
                Chỉ Số Đường Đời, Kim Tự Tháp Thần Số Học, Biểu Đồ Sức Mạnh Của
                Bạn, & 26 chỉ số khác
              </b>{" "}
              để tìm ra
            </p>
            <ul className="mt-10 flex flex-col gap-5 text-justify text-sm">
              <li className="flex items-center gap-5">
                <Image
                  src="/assets/images/blue-bullet.png"
                  alt="blue-bullet"
                  width={15}
                  height={15}
                />
                <span>Tại sao những sự việc thường xảy ra với bạn.</span>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/assets/images/blue-bullet.png"
                  alt="blue-bullet"
                  width={15}
                  height={15}
                />
                <span>
                  Những khía cạnh tiềm ẩn trong tính cách của bạn, cơ hội trong
                  tương lai, tài năng bẩm sinh và những món quà bí mật ẩn trong
                  biểu đồ thần số học của bạn (và cách sử dụng chúng để đạt được
                  điều bạn thực sự muốn)...
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/assets/images/blue-bullet.png"
                  alt="blue-bullet"
                  width={15}
                  height={15}
                />
                <span>Con đường hứa hẹn nhất để đi trong cuộc đời bạn...</span>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/assets/images/blue-bullet.png"
                  alt="blue-bullet"
                  width={15}
                  height={15}
                />
                <span>
                  Mong muốn sâu sắc nhất của bạn và những gì bạn có thể làm để
                  cuối cùng đạt được nhận thức sâu sắc hơn về bản thân và tự tin
                  hơn ...
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/assets/images/blue-bullet.png"
                  alt="blue-bullet"
                  width={15}
                  height={15}
                />
                <span>
                  Những điều chưa đúng mà bạn thường đặt sự quan tâm của mình
                  vào đó và làm thế nào bạn có thể “chuyển đổi” tư duy một cách
                  chính xác và dễ dàng ...
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/assets/images/blue-bullet.png"
                  alt="blue-bullet"
                  width={15}
                  height={15}
                />
                <span>
                  Những thách thức sắp tới và những bài học bạn phải học trong
                  cuộc sống này cũng như những cơ hội chưa được khám phá và để
                  giúp cuộc sống của bạn trở nên tốt đẹp hơn ...
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/assets/images/blue-bullet.png"
                  alt="blue-bullet"
                  width={15}
                  height={15}
                />
                <b>Và còn nhiều nữa ...</b>
              </li>
            </ul>
            <h3 className="mt-10 text-center">
              Hơn 6.000.000+ người tin tưởng tracuuthansohoc đã có được báo cáo
              thần số học của riêng họ, và còn nhiều nữa....
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
