"use client"
import { AiFillGift } from "react-icons/ai"
import { FaAward } from "react-icons/fa"
import { BsCartPlusFill, BsFillQuestionCircleFill } from "react-icons/bs"
import { Button, Tabs, Label, Radio, TabsRef } from "flowbite-react"
import { IoDiamondSharp } from "react-icons/io5"
import { IPlan } from "@/interfaces/plans.interface"
import { getFormatNumber } from "@/utils/helpers"
import { TransactionService } from "@/app/services/transactions/transaction.service"
import { useSession } from "next-auth/react"
import { useState, useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ETransactionCurrency } from "@/interfaces/transactions.interface"
import { toastify } from "@/libs/toastify"
interface ITablePlan {
  documents: IPlan[]
}

type TFormBuyNumericVipPackage = {
  planVNDId: string
  planUSDId: string
}

export default function BuyNumericVipPackage({ documents }: ITablePlan) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabsRef = useRef<TabsRef>(null)
  const props = { setActiveTab, tabsRef }
  const [transaction, setTransaction] = useState<IPlan>()
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }

  const { register, handleSubmit } = useForm<TFormBuyNumericVipPackage>({
    defaultValues: {
      planVNDId: documents[0]._id.toString(),
      planUSDId: documents[0]._id.toString(),
    },
  })
  const onSubmit: SubmitHandler<TFormBuyNumericVipPackage> = async (data) => {
    let planId = data.planVNDId
    let currencyType = ETransactionCurrency.VND
    if (activeTab === 1) {
      planId = data.planUSDId
      currencyType = ETransactionCurrency.USD
    }
    setIsLoading(true)
    TransactionService.createTransaction(planId, currencyType, accessToken)
      .then(() =>
        toastify({
          message: "Đặt mua thành công",
        }),
      )
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <form
        className="flex w-full max-w-[99%] flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-[15px] ">
          <div className="flex justify-center text-lg">
            <IoDiamondSharp />
            <p className="ml-2 text-base font-bold">
              {" "}
              CHỌN MUA GÓI VIP THẦN SỐ HỌC
            </p>
          </div>
          <Tabs.Group
            ref={props.tabsRef}
            onActiveTabChange={(tab) => props.setActiveTab(tab)}
            aria-label="Default tabs"
            style="default"
          >
            <Tabs.Item active title="VND">
              <div className="border p-[10px_10px_0_10px]">
                <div>
                  <fieldset
                    className="flex w-full max-w-full flex-row flex-wrap "
                    id="radio"
                  >
                    {documents.map((plan, index) => (
                      <div
                        key={index + 1}
                        className=" relative w-full max-w-[50%] basis-[50%] gap-2 px-[5px]"
                      >
                        <div className="mb-[10px] rounded border p-[10px] text-sm">
                          <Radio
                            id={plan._id.toString() + "_VND"}
                            {...register("planVNDId")}
                            value={plan._id.toString()}
                            className="mr-1"
                          />
                          <Label htmlFor={plan._id.toString() + "_VND"}>
                            <b>{plan.name}</b>
                            <br />
                            {plan.recommend_text ? (
                              <div className="ml-5 flex text-xs text-blue-700">
                                <FaAward />
                                <p className="ml-1 text-xs">
                                  {" "}
                                  {plan.recommend_text}
                                </p>
                              </div>
                            ) : (
                              <></>
                            )}
                            <span className="ml-5 text-base text-[#999] line-through">
                              {getFormatNumber(plan.price.vnd)}
                            </span>{" "}
                            {plan.discount.vnd}% <br />
                            <div className="ml-5">
                              Giá:{" "}
                              <span className="text-red-600">
                                {" "}
                                {getFormatNumber(plan.price_after_discount.vnd)}
                              </span>
                            </div>
                            {plan.gift_text ? (
                              <div className="ml-5 flex animate-pulse text-sm text-[#28a745]">
                                <AiFillGift />
                                <p className="ml-1 text-xs">
                                  {" "}
                                  {plan.gift_text}
                                </p>
                              </div>
                            ) : (
                              <></>
                            )}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </fieldset>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="USD">
              <div className="border p-[10px_10px_0_10px]">
                <div>
                  <fieldset
                    className="flex w-full max-w-full flex-row flex-wrap "
                    id="radio"
                  >
                    {documents.map((plan, index) => (
                      <div
                        key={index + 1}
                        className=" relative w-full max-w-[50%] basis-[50%] gap-2 px-[5px]"
                      >
                        <div className="mb-[10px] rounded border p-[10px] text-sm">
                          <Radio
                            id={plan._id.toString() + "_USD"}
                            {...register("planUSDId")}
                            value={plan._id.toString()}
                            className="mr-1"
                          />
                          <Label htmlFor={plan._id.toString() + "_USD"}>
                            <b>{plan.name}</b> {plan.id} <br />
                            {plan.recommend_text ? (
                              <div className="ml-5 flex text-xs text-blue-700">
                                <FaAward />
                                <p className="ml-1 text-xs">
                                  {" "}
                                  {plan.recommend_text}
                                </p>
                              </div>
                            ) : (
                              <></>
                            )}
                            <span className="ml-5 text-base text-[#999] line-through">
                              {getFormatNumber(
                                plan.price_after_discount.usd,
                                "USD",
                              )}
                            </span>{" "}
                            {plan.discount.vnd}% <br />
                            <div className="ml-5">
                              Giá:{" "}
                              <span className="text-black">
                                {" "}
                                <span className="text-red-600">
                                  {getFormatNumber(
                                    plan.price_after_discount.usd,
                                    "USD",
                                  )}
                                </span>{" "}
                                {"(hoặc"}
                                <span className="text-red-600">
                                  {" "}
                                  {getFormatNumber(
                                    plan.price_after_discount.vnd,
                                  )}
                                </span>
                                {")"}
                              </span>
                            </div>
                            {plan.gift_text ? (
                              <div className="ml-5 flex animate-pulse text-sm text-[#28a745]">
                                <AiFillGift />
                                <p className="ml-1 text-xs">
                                  {" "}
                                  {plan.gift_text}
                                </p>
                              </div>
                            ) : (
                              <></>
                            )}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </fieldset>
                </div>
              </div>
            </Tabs.Item>
          </Tabs.Group>
          <div className="mx-auto mb-[15px] mt-[10px] flex w-full justify-center">
            <Button disabled={isLoading} color="blue" type="submit">
              <div className="flex text-xl">
                <BsCartPlusFill />
                <p className="ml-2 text-base"> Đặt mua ngay</p>
              </div>
            </Button>
          </div>
          <div className="mx-1 text-left text-sm italic text-red-600">
            1. Sau khi đăng ký VIP bạn tự tra cứu xem luận giải chi tiết và tải
            file PDF báo cáo dài 60-70 trang lưu vĩnh viễn. <br />
            2. Sau khi đăng ký VIP bạn được tham gia buổi hỏi đáp online trực
            tiếp với thầy Louis Nguyễn trên zoom. <br />
            3. Lượt tra online được tặng xem trên web trong 1 lần tra cứu và
            không tải được file báo cáo.
          </div>
        </div>
      </form>
    </>
  )
}
