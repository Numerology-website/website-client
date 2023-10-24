"use client"
import { BsFillQuestionCircleFill } from "react-icons/bs"

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <div className="text-lg">
        <div className="mb-[5px] flex text-lg">
          <div className="mt-1 h-3">
            <BsFillQuestionCircleFill />
          </div>
          <p className="ml-1 "> Câu hỏi thường gặp</p>
        </div>
      </div>
    </>
  )
}
