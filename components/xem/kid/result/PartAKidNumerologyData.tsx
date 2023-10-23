import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import moment from "moment"
import Image from "next/image"

export const PartAKidNumerologyData = ({
  content,
  kid,
  isFreePlan = true,
}: {
  content: TKidNumerologyRecord["relation"]
  kid: {
    birthday: string
    full_name: string
    number: number
  }
  isFreePlan?: boolean
}) => {
  const { father, mother } = content

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-white p-2">
        <span className="font-semibold uppercase">
          Phần A. Tương hợp bố mẹ với con
        </span>
        <div className="mt-2 whitespace-pre-wrap text-sm italic leading-normal">
          <Image
            className="float-left mr-2"
            src={"/assets/images/kid-numerology/kid-PhanA.png"}
            alt="Tương hợp bố mẹ với con"
            width={150}
            height={150}
          />
          <p className="text-xs">
            Có nhiều cha mẹ nghĩ rằng, mối quan hệ giữa cha mẹ với con cái là
            một lẽ tự nhiên, nó đã được xây dựng từ khi trẻ được sinh ra. Cha mẹ
            và con cái có những trách nhiệm và nghĩa vụ dành cho nhau và điều
            này không thể thay đổi được. Không thể phủ nhận tư tưởng này, tuy
            nhiên, cha mẹ cần biết rằng mỗi đứa trẻ sẽ có những tích cách, suy
            nghĩ và năng lực khác nhau. Và càng lớn thì trẻ càng ít chia sẻ
            những vấn đề của bản thân với cha mẹ. Nếu giữa cha mẹ và con không
            có một mối tương quan hòa thuận thì cha mẹ hoàn toàn có thể mang đến
            cho trẻ những suy nghĩ và lối sống tiêu cực.
            <br />
            <br />
            Có nhiều nguyên nhân khiến tình cảm giữa cha mẹ và con cái có khoảng
            cách. Ví dụ như cha mẹ luôn la mắng mỗi khi con phạm lỗi, hay so
            sánh con với những đứa trẻ khác, ép con làm theo định hướng của cha
            mẹ trong khi con không thích… Rào cản đó sẽ dần dần rộng thêm nếu
            cha mẹ không tìm cách cải thiện để thấu hiểu con, gần gũi với con và
            yêu thương con hơn. Và nghiêm trọng hơn trẻ sẽ luôn tự ti về bản
            thân, không có ý thức phấn đấu và hay chán nản. Vì vậy, muốn trẻ tự
            tin, có trái tim ấm áp và trí tuệ rộng mở, cha mẹ cần xây dựng mối
            quan hệ tốt với con.
            <br />
            <br />
            Như vậy, việc hiểu rõ tính cách, năng lực, suy nghĩ của trẻ cũng như
            mối quan hệ tương quan giữa cha mẹ và trẻ là một điều vô cùng quan
            trọng và cần thiết. Nếu cha mẹ và con có mối quan hệ tương hợp theo
            Thần số học thì cả 2 người sẽ có nhiều nét tính cách tương đồng, có
            sự hài hòa, bổ trợ tốt cho nhau. Ngược lại, nếu mang năng lượng đối
            đầu thì giữa 2 người sẽ có nhiều đặc điểm khác biệt, thường xảy ra
            những xung đột, mâu thuẫn, thiếu sự thấu hiểu. Tuy nhiên, bài toán
            này vẫn sẽ có lời giải nếu cha mẹ nhận ra những điểm khác biệt đó là
            gì và tìm cách dung hoà cũng như tôn trọng cá tính của con.
            <br />
            <br />
            Tóm lại, khi cha mẹ đã hiểu được mối tương hợp giữa cha mẹ và con
            thì cha mẹ sẽ biết cách ứng xử, giao tiếp và giáo dục con hợp lý. Từ
            đó tạo môi trường hài hòa, thân thiện, vui vẻ để trẻ phát huy hết
            những điểm mạnh, tài năng của con, cũng như cha mẹ sẽ hạn chế được
            những khúc mắc, những vấn đề phát sinh giữa cha mẹ và trẻ.
          </p>
        </div>
      </div>
      <FatherContent father={father} kid={kid} isFreePlan={isFreePlan} />
      <MotherContent mother={mother} kid={kid} isFreePlan={isFreePlan} />
    </div>
  )
}

const FatherContent = ({
  father,
  kid,
  isFreePlan = true,
}: {
  father: TKidNumerologyRecord["relation"]["father"]
  kid: {
    birthday: string
    full_name: string
    number: number
  }
  isFreePlan?: boolean
}) => {
  return (
    <div className="rounded-lg bg-[#f6f6f6] p-2" id="father-kid">
      <span className="text-base font-semibold uppercase">
        1. Tương hợp giữa bố và con
      </span>
      <div className="flex flex-col rounded-lg bg-white p-2">
        <div className="mb-2 grid grid-cols-3">
          <div className="flex flex-col justify-center gap-2 text-center">
            <span>Số chủ đạo</span>
            <span className="text-lg font-semibold">
              {father.numerology_number}
            </span>
          </div>
          <InteractionContent match={father.is_match} />
          <div className="flex flex-col justify-center gap-2 text-center">
            <span>Số chủ đạo</span>
            <span className="text-lg font-semibold">{kid.number}</span>
          </div>
          <div className="text-center text-xs italic leading-normal">
            Bố {father.full_name}
            <br />
            {moment(father.birthday).format("DD/MM/YYYY")}
          </div>
          <div></div>
          <div className="text-center text-xs italic leading-normal">
            Con {kid.full_name}
            <br />
            {moment(kid.birthday).format("DD/MM/YYYY")}
          </div>
        </div>
        {isFreePlan ? (
          <p className="text-xs text-red-600">
            Bạn cần nâng cấp Vip để xem được luận giải của mục này!
          </p>
        ) : (
          <p
            className="whitespace-pre-wrap text-xs leading-snug"
            dangerouslySetInnerHTML={{ __html: father.content }}
          ></p>
        )}
      </div>
    </div>
  )
}

const MotherContent = ({
  mother,
  kid,
  isFreePlan = true,
}: {
  mother: TKidNumerologyRecord["relation"]["mother"]
  kid: {
    birthday: string
    full_name: string
    number: number
  }
  isFreePlan?: boolean
}) => {
  return (
    <div className="rounded-lg bg-[#f6f6f6] p-2" id="mother-kid">
      <span className="text-base font-semibold uppercase">
        2. Tương hợp giữa mẹ và con
      </span>
      <div className="flex flex-col rounded-lg bg-white p-2">
        <div className="mb-2 grid grid-cols-3">
          <div className="flex flex-col justify-center gap-2 text-center">
            <span>Số chủ đạo</span>
            <span className="text-lg font-semibold">
              {mother.numerology_number}
            </span>
          </div>
          <InteractionContent
            match={mother.is_match}
            isMother
            isFreePlan={isFreePlan}
          />
          <div className="flex flex-col justify-center gap-2 text-center">
            <span>Số chủ đạo</span>
            <span className="text-lg font-semibold">{kid.number}</span>
          </div>
          <div className="text-center text-xs italic leading-normal">
            Mẹ {mother.full_name}
            <br />
            {moment(mother.birthday).format("DD/MM/YYYY")}
          </div>
          <div></div>
          <div className="text-center text-xs italic leading-normal">
            Con {kid.full_name}
            <br />
            {moment(kid.birthday).format("DD/MM/YYYY")}
          </div>
        </div>
        {isFreePlan ? (
          <p className="text-xs text-red-600">
            Bạn cần nâng cấp Vip để xem được luận giải của mục này!
          </p>
        ) : (
          <p
            className="whitespace-pre-wrap text-xs leading-snug"
            dangerouslySetInnerHTML={{ __html: mother.content }}
          ></p>
        )}
      </div>
    </div>
  )
}

const InteractionContent = ({
  match,
  isMother = false,
  isFreePlan = true,
}: {
  match: boolean
  isMother?: boolean
  isFreePlan?: boolean
}) => {
  if (isMother && isFreePlan)
    return (
      <EyeSlashIcon className="mx-auto inline-block h-6 w-6 text-red-600" />
    )
  if (!match) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="max-h-[90px] w-1/2">
          <Image
            src={"/assets/images/kid-numerology/against.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt="against"
            className="h-auto w-full"
          />
        </div>
        <span className="text-sm text-red-400">Đối đầu</span>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="max-h-[90px] w-1/2">
        <Image
          src={"/assets/images/kid-numerology/match.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt="against"
          className="h-auto w-full"
        />
      </div>
      <span className="text-sm text-emerald-400">Tương hợp</span>
    </div>
  )
}
