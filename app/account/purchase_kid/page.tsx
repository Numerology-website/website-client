import Link from "next/link"
import BuyNumericVipPackage from "@/components/account/purchase/BuyNumericVipPackage"
import ValueOfTheNumerometryReport from "@/components/account/purchase/ValueOfTheNumerometryReport"
import PaymentTransferInformation from "@/components/account/purchase/PaymentTransferInformation"
import FrequentlyAskedQuestions from "@/components/account/purchase/FrequentlyAskedQuestions"
import { PlanService } from "@/app/services/plans/plans.service"
import { EPlanType } from "@/interfaces/plans.interface"
import { TransactionService } from "@/app/services/transactions/transaction.service"
import TableMyTransaction from "@/components/account/purchase/TableMyTransaction"
export default async function PurchaseKid() {
  const { items: plans } = await PlanService.getPlans()
  const kidPlans = plans
    .filter((plan) => plan.type === EPlanType.KID)
    .sort((a, b) => a.turn - b.turn)
  const myTransaction = await TransactionService.getMyTransactions()
  return (
    <>
      <div className="mx-auto flex w-[100%] max-w-[99%] flex-col px-[15px] md:max-w-[1190px]">
        <div className=" flex flex-col  justify-center  p-[10px] ">
          {myTransaction.items.length === 0 ? (
            <>
              <BuyNumericVipPackage documents={kidPlans} />
              <PaymentTransferInformation />
            </>
          ) : (
            <>
              <TableMyTransaction documents={myTransaction.items} />
              <PaymentTransferInformation />
              <BuyNumericVipPackage documents={kidPlans} />
            </>
          )}
          <div className="my-[15px]">
            <div className="-mx-[15px] flex flex-wrap justify-center">
              <div className="relative w-[100%] max-w-[100%] basis-[100%] px-[15px] md:max-w-[50%] md:basis-[50%]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/qzENKlYLKXI?si=oMtxF7lDLXRaI_D2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="mt-2 w-[100%] text-center italic">
                  Người nổi tiếng nói về tracuuthansohoc
                </div>
              </div>
            </div>
          </div>
          <ValueOfTheNumerometryReport />
          <div className="mt-5 text-center text-xl font-bold text-red-600">
            RẤT NHIỀU NGƯỜI ĐÃ TÌM ĐƯỢC NHỮNG CON SỐ CỦA RIÊNG MÌNH!
          </div>
          <div className="box-border h-[50vh] overflow-y-auto overflow-x-hidden pt-1">
            <div className="-mx-[15px] flex w-[100%] max-w-[100%] flex-wrap justify-center">
              <div className="relative mx-[15px] w-[100%] max-w-[45%] basis-[45%]  md:max-w-[30%] md:basis-[30%]">
                <img
                  src="https://xem.tracuuthansohoc.com/uploads/orders/01.jpg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="relative mx-[15px] w-[100%] max-w-[45%] basis-[45%]  md:max-w-[30%] md:basis-[30%]">
                <img
                  src="https://xem.tracuuthansohoc.com/uploads/orders/01.jpg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="relative mx-[15px] w-[100%] max-w-[45%] basis-[45%] md:max-w-[30%] md:basis-[30%]">
                <img
                  src="https://xem.tracuuthansohoc.com/uploads/orders/01.jpg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="relative mx-[15px] w-[100%] max-w-[45%] basis-[45%] md:max-w-[30%] md:basis-[30%]">
                <img
                  src="https://xem.tracuuthansohoc.com/uploads/orders/01.jpg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="relative mx-[15px] w-[100%] max-w-[45%] basis-[45%] md:max-w-[30%] md:basis-[30%]">
                <img
                  src="https://xem.tracuuthansohoc.com/uploads/orders/01.jpg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="relative mx-[15px] w-[100%] max-w-[45%] basis-[45%] md:max-w-[30%] md:basis-[30%]">
                <img
                  src="https://xem.tracuuthansohoc.com/uploads/orders/01.jpg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
            </div>
          </div>
          <BuyNumericVipPackage documents={kidPlans} />
          <div className="container mx-auto my-[15px] ">
            <div className="-mx-[15px] flex flex-wrap md:flex-row">
              <div className="relative w-[100%] max-w-[100%] basis-[100%] px-[15px] py-[5px] md:max-w-[50%] md:basis-[50%]">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/W-e_WnWdYj0?si=YVXH3Y7RndGQxRup"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative w-[100%] max-w-[100%] basis-[100%] px-[15px] py-[5px] md:max-w-[50%] md:basis-[50%]">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/yzcd-1oxHKU?si=n1bXdlrsTmILbHBB"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="my-[15px] text-sm">
            <FrequentlyAskedQuestions />
            <div className="mt-[10px] rounded-xl bg-[#f6f6f6] p-[10px]">
              <div className="font-bold">
                1. Mỗi lượt tra Vip là xem được những gì?
              </div>
              <div className="ml-[10px] mt-[10px]">
                Trả lời:{" "}
                <em>
                  1 lần tra VIP bạn sẽ xem đầy đủ toàn bộ luận giải thần số học
                  của 1 người (hơn 26 chỉ số và các dao động thần số cùng nhiều
                  biểu đồ quan trọng, tương hợp tình duyên hôn nhân,...). Bạn
                  mua 5 lượt tra Vip là bạn có thể xem đầy đủ các chỉ số cho 5
                  người.
                </em>
              </div>
            </div>

            <div className="mt-[10px] rounded-xl bg-[#f6f6f6] p-[10px]">
              <div className="font-bold">
                2. Trả phí lượt tra tôi có lợi ích gì?
              </div>
              <div className="ml-[10px] mt-[10px]">
                Trả lời:{" "}
                <em>
                  Bạn sẽ xem được toàn bộ các chỉ số và có quyền tải kết quả tra
                  cứu về máy dưới dạng file pdf để in ra giấy hoặc lưu vĩnh viễn
                  (áp dụng từ ngày 02/06/2021)
                </em>
              </div>
            </div>
            <div className="mt-[10px] rounded-xl bg-[#f6f6f6] p-[10px]">
              <div className="font-bold">
                3. Mỗi lượt Vip tôi tra được mấy lần?
              </div>
              <div className="ml-[10px] mt-[10px]">
                Trả lời:{" "}
                <em>
                  Mỗi lượt Vip được tra cho 1 người và tra lại nhiều lần cũng
                  được. Hệ thống sẽ xuất file pdf và lưu trên web, mỗi khi muốn
                  xem lại bạn có thể tra cứu lại hoặc vào mục &quot;
                  <Link
                    className="text-blue-500"
                    href="https://tracuuthansohoc.com/xem-online/account?a=history"
                  >
                    Lịch sử tra cứu
                  </Link>
                  &quot; để tải lại file báo cáo là được.
                </em>
              </div>
            </div>
            <div className="mt-[10px] rounded-xl bg-[#f6f6f6] p-[10px]">
              <div className="font-bold">
                4. Tôi muốn xem luận giải nhiều năm ở mục &quot;Chỉ số các
                năm&quot; và nhiều tháng hơn ở mục &quot;Chỉ số các tháng&quot;
                thì làm sao?
              </div>
              <div className="ml-[10px] mt-[10px]">
                Trả lời:{" "}
                <em>
                  Bản luận giải của bạn luôn được cập nhật theo thời điểm tra
                  cứu hoặc tải về. Vì vậy, cứ mỗi 3 tháng bạn tra cứu lại hoặc
                  vào &quot;
                  <Link
                    className="text-blue-500"
                    href="https://tracuuthansohoc.com/xem-online/account?a=history"
                  >
                    Lịch sử tra cứu
                  </Link>
                  &quot; tải lại file pdf; bạn sẽ nhận được luận giải về 3 tháng
                  tiếp theo của bạn. Tương tự với các chỉ số năm cũng vậy!
                </em>
              </div>
            </div>
            <div className="mt-[10px] rounded-xl bg-[#f6f6f6] p-[10px]">
              <div className="font-bold">
                5. Tôi có bị mất phí để xem các luận giải mới được hệ thống cập
                nhật không?
              </div>
              <div className="ml-[10px] mt-[10px]">
                Trả lời:{" "}
                <em>
                  Không. Khi có những luận giải mới được cập nhật, bạn chỉ cần
                  tra cứu lại hoặc vào mục &quot;
                  <Link
                    className="text-blue-500"
                    href="https://tracuuthansohoc.com/xem-online/account?a=history"
                  >
                    Lịch sử tra cứu
                  </Link>
                  &quot; để tải lại file báo cáo là nhận được toàn bộ nội dung
                  mới mà không mất bất kỳ một khoản phí nào.
                </em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
