import { UserService } from "@/app/services/users/user.service"
import { CarouselSection } from "@/components/xem/CarouselSection"
import { FormReadNumerology } from "@/components/xem/FormReadNumerology"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import Link from "next/link"

export default async function ReaderPage() {
  const [session, myProfile] = await Promise.all([
    getServerSession(authOptions),
    UserService.myProfile(),
  ])
  return (
    <section className="w-full bg-galaxy-pattern">
      <div className="container mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  )
}
