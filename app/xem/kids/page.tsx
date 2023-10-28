import { FormReadKidNumerology } from "@/components/xem/kid/FormReadKidNumerology"
import { ListReadKidNumerologyHistory } from "@/components/xem/kid/ListReadKidNumerologyHistory"
import Image from "next/image"

export default function ReadKidsNumerology() {
  return (
    <div className="container mx-auto text-white">
      <div className="my-5 flex flex-col items-center gap-5 px-2">
        <div className="flex flex-col items-center justify-center md:items-start">
          <div className="flex w-4/5 flex-col items-center justify-center md:items-start">
            <h2 className="text-2xl font-extralight uppercase leading-relaxed">
              Tra cứu
            </h2>
            <span className="text-center text-3xl font-medium uppercase leading-relaxed">
              Thần số học cho con
            </span>
          </div>
          <div className="my-5 w-1/3 rounded-lg border-2 border-solid border-white"></div>
          <p className="text-justify font-medium leading-relaxed">
            Khám phá tiềm năng của con, dòng thời gian đầu đời, giải pháp cho
            phụ huynh nuôi dạy con cái, tương hợp hoặc đối đầu giữa bố mẹ và
            con, hướng nghề nghiệp phù hợp với con,...
          </p>
        </div>
        <div className="w-2/3 md:w-2/5">
          <Image
            src="/assets/images/kid_image.png"
            alt="Kid Numerology"
            width={0}
            height={0}
            layout="responsive"
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="px-2">
        <FormReadKidNumerology />
        <ListReadKidNumerologyHistory />
      </div>
    </div>
  )
}
