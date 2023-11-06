"use client"

import { Select, Button } from "flowbite-react"
import { BsCartPlusFill } from "react-icons/bs"
import { AiFillGift } from "react-icons/ai"
export default function FormOrder() {
  return (
    <form className="flex w-full max-w-[99%] flex-col gap-4">
      <div className="mx-auto mb-[10px] block text-center  text-[#dc3545]">
        <div className="flex animate-pulse justify-center text-xl">
          <AiFillGift />
          <p className="ml-2 text-base font-bold"> Quà tặng!</p>
        </div>
        Mua từ 3 lượt tra VIP trở lên chúng tôi sẽ tặng bạn thêm lượt tra online
        (theo bảng giá bên dưới) để tra thêm cho người khác.
      </div>
      <Select id="countries" required>
        <option>Gói 1 lượt VIP (180.000đ)</option>
        <option>Gói 2 lượt VIP (340.000đ)</option>
        <option>Gói 3 lượt VIP (500.000đ, Tặng 1 lượt online)</option>
        <option>Gói 5 lượt VIP (800.000đ, Tặng 2 lượt online)</option>
        <option>Gói 10 lượt VIP (1.500.000đ, Tặng 4 lượt online)</option>
        <option>Gói 20 lượt VIP (2.600.000đ, Tặng 8 lượt online)</option>
      </Select>
      <div className="mx-auto">
        <Button color="blue" type="submit">
          <div className="flex text-xl">
            <BsCartPlusFill />
            <p className="ml-2 text-base"> Đặt mua ngay</p>
          </div>
        </Button>
      </div>
    </form>
  )
}
