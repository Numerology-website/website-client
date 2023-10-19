import Image from "next/image"

export default function ReadKidsNumerology() {
  return (
    <div className="container mx-auto text-white">
      <div className="mb-5 flex flex-col items-center gap-5 px-2">
        <div className="flex w-4/5 flex-col items-center">
          <h2 className="text-2xl font-extralight uppercase leading-relaxed">
            Tra cứu
          </h2>
          <span className="text-center text-3xl font-medium uppercase leading-relaxed">
            Thần số học cho con
          </span>
          <div className="mt-5 w-1/3 rounded-lg border-2 border-solid border-white"></div>
        </div>
        <p className="text-justify font-medium leading-relaxed">
          Khám phá tiềm năng của con, dòng thời gian đầu đời, giải pháp cho phụ
          huynh nuôi dạy con cái, tương hợp hoặc đối đầu giữa bố mẹ và con,
          hướng nghề nghiệp phù hợp với con,...
        </p>
        <div className="w-2/3">
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
    </div>
  )
}
