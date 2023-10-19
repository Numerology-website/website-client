"use client"
import { SignOutButton } from "@/components/auth/SignOutButton"
import Link from "next/link"
import { Accordion } from "flowbite-react"
import { useState } from "react"
import { FormReadNumerology } from "@/components/xem/FormReadNumerology"

export default function Home() {
  const [listShowNumberMeaning, setListShowNumberMeaning] = useState<{
    1: boolean
    2: boolean
    3: boolean
    4: boolean
    5: boolean
    6: boolean
    7: boolean
    8: boolean
    9: boolean
    11: boolean
    22: boolean
  }>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    11: false,
    22: false,
  })

  const handleChange = (e: any) => {
    const name = e.target.alt as keyof typeof listShowNumberMeaning
    if (listShowNumberMeaning[name] == true) {
      return
    } else {
      Object.keys(listShowNumberMeaning).forEach(function (key) {
        return setListShowNumberMeaning((prevState) => ({
          ...prevState,
          [key]: false,
        }))
      })
      setListShowNumberMeaning((prevState) => ({
        ...prevState,
        [name]: true,
      }))
    }
  }

  return (
    <main className="box-border flex min-h-screen  flex-col justify-between ">
      <div className="">
        <section className="overflow-hidden py-[40px]">
          <div className=" absolute bottom-0 left-0 right-0 top-0 m-0 h-[100%] bg-[url('/assets/images/861-20221007022759-jydbt-1-1536x689.png.webp')] bg-cover bg-[50%_50%]  p-0 opacity-100"></div>
          <div className="relative w-[100%]">
            <div className="mb-[30px] w-[100%] md:mb-0">
              <div className="relative mx-auto flex w-[100%] max-w-[1230px] flex-row flex-wrap ">
                <div className="mb-0 hidden w-[100%] max-w-[33.33%] basis-[33.33%] px-[10px] md:block">
                  <div className="absolute bottom-[-40px] left-[50%] top-[-40px] ml-[-32%] w-[100%] max-w-[1200px]"></div>
                  <div className="    w-[100%]">
                    <div className="  ">
                      <img
                        className="box-border h-[501px] w-[350px] opacity-100"
                        src="assets/images/e-nha-a-20221007021752-trrzz.png"
                        alt="e nha a 20221007021752 trrzz"
                      />
                    </div>
                  </div>
                </div>

                <div className=" relative m-0 flex w-[100%]  max-w-[100%] basis-[100%] justify-center px-[0_9.8px_19.6px] pb-0 align-middle md:max-w-[66.67%] md:basis-[66.67%]">
                  <div className="my-[auto] py-[auto] text-[#f1f1f1]">
                    <h1 className="text-center text-[1.7em] font-bold">
                      TRA CỨU THẦN SỐ HỌC
                      <br />
                      KHÁM PHÁ BẢN THÂN CÙNG THẦY
                      <br />
                      <br />
                      <br />
                      <strong className="text-[50px] md:text-[76px] ">
                        LOUIS NGUYỄN
                      </strong>
                      <br />
                      <br />
                    </h1>
                    <ul className="mx-[auto] flex max-w-[702px] flex-col border-2 border-solid px-5 py-[10px] text-[14px] md:flex-row">
                      <li className=" relative mr-[30px] flex pl-[40px] pr-[30px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="my-auto mr-3 h-8 w-8 text-[#e35cb0]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <span>
                          Nhà sáng lập hệ thống thần số học được ứng dụng phổ
                          biến tại Việt Nam
                        </span>
                      </li>
                      <li>
                        <div className="mx-auto my-3  w-[30%] border border-white md:h-[70%] "></div>
                      </li>
                      <li className=" relative  flex pl-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="my-auto mr-3 h-8 w-8 text-[#e35cb0]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <span>Luận giải chi tiết – chính xác – tin cậy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-[auto] flex max-w-[1260px] flex-wrap">
              <div className="relative flex max-w-[33.33%] basis-[33.33%] px-[15px] pb-[30px] md:px-[30px]">
                <div className="relative mx-auto flex min-h-[130px] w-[100%] items-center justify-center bg-[#092C49] bg-cover bg-no-repeat p-[10px] shadow-[0_0_10px_0px_#572557]">
                  <div className=" text-center">
                    <br />
                    <p className="text-2xl font-bold text-[#e35cb0] md:text-4xl">
                      <span>26.564.889</span>+
                    </p>
                    <p className="text-lg leading-[1.6] text-white md:text-[21px]">
                      LƯỢT TRA CỨU
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex max-w-[33.33%] basis-[33.33%] px-[15px] pb-[30px] md:px-[30px]">
                <div className="relative mx-auto flex min-h-[130px] w-[100%] items-center justify-center bg-[#092C49] bg-cover bg-no-repeat p-[10px] shadow-[0_0_10px_0px_#572557]">
                  <div className=" text-center">
                    <br />
                    <p className="text-2xl font-bold text-[#e35cb0] md:text-4xl">
                      <span>896.401</span>+
                    </p>
                    <p className="text-lg leading-[1.6] text-white md:text-[21px]">
                      BÁO CÁO XUẤT BẢN
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex max-w-[33.33%] basis-[33.33%] px-[15px] pb-[30px] md:px-[30px]">
                <div className="relative mx-auto flex min-h-[130px] w-[100%] items-center justify-center bg-[#092C49] bg-cover bg-no-repeat p-[10px] shadow-[0_0_10px_0px_#572557]">
                  <div className=" text-center">
                    <p className="text-2xl font-bold text-[#e35cb0] md:text-4xl">
                      <span>79.526</span>+
                    </p>
                    <p className="text-lg leading-[1.6] text-white md:text-[21px]">
                      HỌC VIÊN QUA CÁC <br />
                      KHÓA HỌC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-[auto] max-w-[1230px]">
              <div className="relative flex w-[100%] max-w-[100%] basis-[100%] justify-center px-[15px] pb-[30px]">
                <div className="pt-[15px] text-center">
                  <Link
                    href="#devvn_box_quick_search"
                    target="_self"
                    type="button"
                    className=" mb-[20px] flex h-[64px] flex-wrap rounded-[99px] border border-[#af3689] bg-[#af3689] pl-[40px] pr-[25px]  pt-[18px] text-[18px] text-[white] no-underline transition-[all_.6s_ease] hover:bg-[white] hover:text-[#af3689]"
                  >
                    <span className="block text-[18px] font-bold">
                      TRA CỨU CÁC CHỈ SỐ CỦA BẠN NGAY
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative flex w-[100%] max-w-[100%] basis-[100%] px-[15px] pb-[30px] md:hidden">
                <div className="relative mx-auto w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                  <div>
                    <div className="relative m-[0_auto] w-[100%] max-w-[268px]">
                      <img
                        className="h-auto w-[100%] max-w-[100%]"
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/04/e-nha-a-20221007021752-trrzz.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-[100%] max-w-[100%] basis-[100%] px-[15px] pb-0 md:pb-[30px]">
                <div className="relative mx-auto w-[100%]">
                  <p className="relative mb-5 text-[16px] text-[white]">
                    Những nghiên cứu về Thần số học của Thầy Louis Nguyễn đang
                    mang đến một làn sóng tích cực trong đại chúng Việt Nam.
                    Không chỉ là các phân tích để giúp mỗi người tìm ra những
                    tiềm năng thực sự và trả lời được câu hỏi mình là ai trong
                    cuộc đời này, những nghiên cứu sâu và rộng khắp các lĩnh vực
                    của thầy còn giúp hàng triệu người lựa chọn được con đường
                    đi đúng đắn, giúp cho những người làm kinh doanh tìm ra định
                    hướng phù hợp trong chiến lược và trong quản trị doanh
                    nghiệp, quan hệ khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="devvn_box_quick_search"
          className=" relative flex min-h-[auto] w-[100%] flex-row items-center px-0 pt-[80px] text-white"
        >
          <div className=" absolute bottom-0 left-0 right-0 top-0 m-0 h-[100%] w-[100%] bg-[url('https://tracuuthansohoc.com/wp-content/uploads/2022/10/650-20221007033516-af-dr-1.png')] bg-cover bg-[50%_50%] bg-no-repeat p-0 opacity-100"></div>
          <div className="relative mb-36 w-[100%]">
            <div className="mb-[15px] md:mb-[30px]">
              <div className="mx-auto mb-0 w-[100%] max-w-[1230px] px-[15px] md:mb-[40px]">
                <h2 className="relative m-[0_15px] flex w-[100%] flex-row flex-wrap items-center justify-center text-center text-3xl font-bold uppercase md:text-4xl">
                  Công cụ xem Thần số học Online Louis Nguyễn
                </h2>
              </div>
            </div>
            <div className="mx-auto flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
                <div className="relative mx-auto max-w-[960px] text-left">
                  <div className="mb-9">
                    <p className="m-[5px_5px_15px_5px] text-sm italic ">
                      - Tính toán hàng chục nghìn phép tính thần số phức tạp cực
                      nhanh chỉ sau 1 giây để cho ra các tổ hợp chỉ số mà không
                      hề sai sót như tính tay. <br />- Luận giải kết quả tra cứu
                      được cá nhân hóa dựa vào nghiên cứu chuyên sâu của các
                      chuyên gia Thần số học.
                    </p>
                    <FormReadNumerology />
                  </div>
                  <p className="mb-[10px] mt-0 text-base font-bold ">
                    Chú thích:
                  </p>
                  <p className="mb-[10px] mt-0 text-base ">
                    Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai
                    sinh…) của bạn khác với ngày sinh dương lịch thật thì cuộc
                    đời bạn sẽ có sự xáo trộn từ cả 2 ngày sinh này. Bạn nên tra
                    cứu cả 2 để biết thêm chi tiết, tuy nhiên kết quả sẽ thiên
                    về ngày sinh dương lịch thật!
                  </p>
                  <p className="mb-[10px] mt-0 text-base ">
                    Tên thường dùng là tên mà mọi người thường gọi bạn hoặc một
                    danh xưng bạn thường dùng, tên này sẽ bù trừ vào biểu đồ
                    ngày sinh của bạn. Nếu bạn không có tên thường dùng, hệ
                    thống sẽ tự lấy họ tên khai sinh của bạn để tính toán trong
                    biểu đồ tổng hợp.
                  </p>
                  <p className="mb-[10px] mt-0 text-base">
                    Số chủ đạo tuy rất quan trọng nhưng không thể hiện hết thông
                    tin thần số học của bạn. Để xem kết quả tra cứu chính xác,
                    hãy kết hợp tất cả các chỉ số mà chúng tôi tính toán!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center">
          <div className="relative w-[100%]">
            <div className="mx-[auto] flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className="relative mt-[120px] basis-[100%] px-[15px] pb-[30px] md:mt-[-120px]">
                <div className="mt-[-20px] bg-[white] p-[15px] shadow-[0_0_20px_0_#fc6e8f]">
                  <div className="position inset-[15px] bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/bg_customer.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content">
                    <div className="mb-[30px]">
                      <br />
                      <div className="mx-[auto]  px-0">
                        <h3 className="relative flex flex-row flex-wrap justify-center font-bold">
                          <span className="mx-[15px] text-center text-[30px] uppercase leading-[1.6] text-[#061729]">
                            CHIA SẺ TỪ NHỮNG CÁ NHÂN <br />
                            ĐÃ TÌM THẤY SỰ ĐỘT PHÁ CUỘC ĐỜI NHỜ NHÂN SỐ HỌC
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="relative block">
                      <div className="relative h-[576px] overflow-hidden">
                        <div>
                          <section className="relative flex flex-row flex-nowrap justify-center px-[30px] py-0">
                            <div className="relative justify-items-center">
                              <div className="mx-[auto]  text-center">
                                <div className="mx-[auto] flex flex-col justify-between  ">
                                  <div className=" max-w-[935px] text-center text-[17px] font-bold leading-[2] text-[#061729]">
                                    <p>
                                      Luôn là người thất bại trong một tập thể,
                                      tôi thực sự không hiểu tại sao công sức bỏ
                                      ra là như nhau, thậm chí tôi đã làm việc
                                      không nghĩ đến sức khỏe. Nhưng bạn bè đồng
                                      nghiệp đều phát triển tốt còn tôi thì
                                      không. Đến khi đọc được câu nói “lựa chọn
                                      quan trọng hơn nỗ lực”, tôi đặt ra câu hỏi
                                      “liệu lựa chọn của mình đã phù hợp hay
                                      chưa?”. Để giải quyết vấn đề này, tôi bắt
                                      đầu đi khám phá sâu hơn bản thân. Tình cờ
                                      tôi đã biết đến trang web
                                      Tracuuthansohoc.com, nơi có tất cả thông
                                      tin mà mình luôn đi tìm kiếm. Trang web
                                      này cung cấp kiến thức cụ thể về tính
                                      cách, mối quan hệ, điểm mạnh yếu… của bản
                                      thân theo Thần Số Học Pitago. Từ những thứ
                                      đó tôi đã vẽ cho mình con đường phù hợp
                                      nhất. Sau một năm trải nghiệm, tôi thấy
                                      đây là lựa chọn hoàn toàn đúng đắn. Hơn
                                      nữa tôi thấy Nhân số học khá thú vị và sẽ
                                      tìm hiểu sâu hơn về lĩnh vực này.
                                    </p>
                                  </div>
                                  <div className="mx-[auto] pb-[20px] pt-[50px] text-center">
                                    <div className="relative m-[0_auto_1em] h-[118px] w-[118px]">
                                      <img
                                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/nam-20220810073543-1-80x80.png"
                                        alt=""
                                        className="w-[100%] rounded-[999px] object-cover transition-[opacity_1s]"
                                      />
                                    </div>
                                    <strong className="block text-center text-[25px] leading-[1.6] text-[#092035]">
                                      Đức Anh
                                    </strong>
                                    <span className="text-center text-[16px] leading-[1.6] text-[#092035]">
                                      Diễn viên & Tiktoker
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          {/* <section className="relative flex flex-row flex-nowrap justify-center px-[30px] py-0">
                            <div className="relative justify-items-center">
                              <div className="mx-[auto]  text-center">
                                <div className="mx-[auto] flex flex-col justify-between  ">
                                  <div className=" max-w-[935px] text-center text-[17px] font-bold leading-[2] text-[#061729]">
                                    <p>
                                      Dù mới biết đến Thần số học Pitago trong
                                      thời gian gần đây nhưng đọc một số bài
                                      mình thấy nội dung bài viết chính xác đến
                                      khó tin. Mình tự nhận thấy bản thân là một
                                      người lạc quan, thích được kết nối với mọi
                                      người xung quanh. Đi cùng với đó là những
                                      điểm yếu như khó khăn trong quản lý tiền
                                      bạc, đôi khi sống hời hợt và chịu sự chi
                                      phối của cảm xúc. Mình luôn thắc mắc tại
                                      sao lại có nét tính cách như vậy, có cách
                                      nào để khắc phục những vấn đề trên không?
                                      Sau khi tra cứu thần số học trên trang web
                                      Tracuuthansohoc.com, mình được biết vì bản
                                      thân sở hữu con số chủ đạo là con số 3 nên
                                      có các đặc điểm như vậy. Bên cạnh đó mình
                                      còn biết thêm về các chỉ số quan trọng
                                      trong cuộc đời. Nếu tận dụng tốt hiểu biết
                                      về bản thân thông qua Nhân số học, mình
                                      tin tất cả mọi người sẽ sớm tìm ra một lối
                                      đi phù hợp để phát triển hơn trong tương
                                      lai.
                                    </p>
                                  </div>
                                  <div className="mx-[auto] pb-[20px] pt-[50px] text-center">
                                    <div className="relative m-[0_auto_1em] h-[118px] w-[118px]">
                                      <img
                                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/nu-4-20220912025000-1-80x80.png"
                                        alt=""
                                        className="w-[100%] rounded-[999px] object-cover transition-[opacity_1s]"
                                      />
                                    </div>
                                    <strong className="block text-center text-[25px] leading-[1.6] text-[#092035]">
                                      Bông Mai
                                    </strong>
                                    <span className="text-center text-[16px] leading-[1.6] text-[#092035]">
                                      Kinh Doanh
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="relative flex flex-row flex-nowrap justify-center px-[30px] py-0">
                            <div className="relative justify-items-center">
                              <div className="mx-[auto]  text-center">
                                <div className="mx-[auto] flex flex-col justify-between  ">
                                  <div className=" max-w-[935px] text-center text-[17px] font-bold leading-[2] text-[#061729]">
                                    <p>
                                      Trước đây tôi thường xuyên có những mối
                                      quan hệ không tốt và đem đến những ảnh
                                      hưởng tiêu cực. Khi có quá nhiều mối hệ
                                      như vậy khiến tôi băn khoăn suy nghĩ có
                                      phải vấn đề đến từ chính bản thân mình hay
                                      không?”. Suy nghĩ này khiến cho tôi từ một
                                      người đầy tự tin trở nên rụt rè, chỉ biết
                                      thu mình lại ở những nơi đông người. Nhưng
                                      từ khi biết đến Nhân số học, tôi nhận ra
                                      vấn đề không phải do cá nhân chưa đủ tốt,
                                      lí do là bởi tôi không biết cách chọn lọc.
                                      Bằng cách tra cứu Thần số học Pythagoras,
                                      tôi hiểu thêm về chính mình và bản thân
                                      phù hợp với những người như thế nào.
                                    </p>
                                  </div>
                                  <div className="mx-[auto] pb-[20px] pt-[50px] text-center">
                                    <div className="relative m-[0_auto_1em] h-[118px] w-[118px]">
                                      <img
                                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/nam-20211204084038-1-80x80.png"
                                        alt=""
                                        className="w-[100%] rounded-[999px] object-cover transition-[opacity_1s]"
                                      />
                                    </div>
                                    <strong className="block text-center text-[25px] leading-[1.6] text-[#092035]">
                                      Junes
                                    </strong>
                                    <span className="text-center text-[16px] leading-[1.6] text-[#092035]">
                                      Designer & MC
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section> */}
                        </div>
                        <button className="absolute bottom-[40%] left-0  top-[40%] m-0 w-[50px] p-0 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-[40px] w-[40px] "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <button className="absolute bottom-[40%] right-0 top-[40%] m-0 w-[50px] p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-[40px] w-[40px]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[auto] w-[100%] flex-row items-center p-[30px_0] py-[30px]">
          <div className=" relative z-[1] w-[100%]  ">
            <div className="relative mx-auto flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
                <div className="relative ml-auto mr-0 w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                  <div className="flex flex-col items-center md:flex-row">
                    {/* hoa */}
                    <div className="w-[100%] max-w-[560px] pl-[40px] pr-5">
                      <ul className="relative m-[0_auto] flex h-[486px] w-[445px] list-none flex-row flex-wrap items-center justify-start p-0">
                        <li className="transition-[background-color .3s] absolute left-[152px] top-[-2px] ml-0 inline-block  h-auto w-[138px] p-0">
                          <button
                            className="z-50 inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/1b-20221007070653-xxnxx.png"
                              alt=""
                              className="aspect-[auto_414/495] w-[414px] overflow-clip"
                            />
                            <span
                              className={
                                listShowNumberMeaning[1]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] w-[399] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/1-20221007070653-g6rq3.png"
                                alt="1"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[250px] top-[30px] inline-block h-auto w-[138px] rotate-[36deg] p-0">
                          <button
                            className="inline-flex  flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/2b-20221007070653-ulbux.png"
                              alt=""
                              className="inline-block aspect-[auto_417/489] h-auto w-[414px] max-w-[100%] overflow-clip"
                            />
                            <span
                              className={
                                listShowNumberMeaning[2]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] h-auto w-[399] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/2-20221007070648-frb_e.png"
                                alt="2"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[305px] top-[110px] inline-block h-auto w-[138px] rotate-[72deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/3b-20221007070653-8ohau.png"
                              alt=""
                              className="inline-block aspect-[auto_417/489] h-auto w-[414px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[3]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] h-auto w-[399] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/3-20221007070648-cubjq.png"
                                alt="3"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[307px] top-[209px] inline-block h-auto w-[138px] rotate-[109deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/4b-20221007070653-3nm3v.png"
                              alt=""
                              className="inline-block aspect-[auto_417/489] h-auto w-[414px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[4]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] h-auto w-[399] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/4-20221007070648-49_sl.png"
                                alt="4"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[253px] top-[289px] inline-block h-auto w-[138px] rotate-[145deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/5b-20221007070653-ut61y.png"
                              alt=""
                              className="inline-block aspect-[auto_450/528] h-auto w-[450px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[5]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] h-auto w-[399] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/5-20221007070648-iimfr.png"
                                alt="5"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[157px] top-[321px] inline-block h-auto w-[138px] rotate-[180deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/6b-20221007070653-gxtmw.png"
                              alt=""
                              className="inline-block aspect-[auto_450/528] h-auto w-[450px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[6]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_450/538] h-auto w-[450] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/6-20221007070648-wa_e7.png"
                                alt="6"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[61px] top-[291px] inline-block h-auto w-[138px] rotate-[216deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/7b-20221007070653-_lpbz.png"
                              alt=""
                              className="inline-block aspect-[auto_417/489] h-auto w-[417px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[7]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] h-auto w-[399] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/7-20221007070648-sfvxj.png"
                                alt="7"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[3px] top-[213px] inline-block h-auto w-[138px] rotate-[252deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/8b-20221007070653-jih6i.png"
                              alt=""
                              className="inline-block aspect-[auto_450/528] h-auto w-[450px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[8]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_450/538] h-auto w-[450] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/8-20221007070648-ni4u2.png"
                                alt="8"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-0 top-[112px] inline-block h-auto w-[138px] rotate-[289deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/9b-20221007070653-n7gnw.png"
                              alt=""
                              className="inline-block aspect-[auto_417/489] h-auto w-[417px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[9]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] h-auto w-[399] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/9-20221007070647-rc_1t.png"
                                alt="9"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] absolute left-[56px] top-[30px] inline-block h-auto w-[138px] rotate-[325deg] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/11b-20221007070648-hcjvn.png"
                              alt=""
                              className="inline-block aspect-[auto_450/528] h-auto w-[450px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[11]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_399/477] h-auto w-[399] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/11-20221007070647-qyjsf.png"
                                alt="11"
                              />
                            </span>
                          </button>
                        </li>
                        <li className="transition-[background-color .3s] translate-[-50%_-50%] absolute left-[153px] top-[175px] mr-0 inline-block h-auto w-[138px] p-0">
                          <button
                            className="relative inline-flex flex-wrap items-center font-bold uppercase no-underline"
                            onClick={handleChange}
                          >
                            <img
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/22-20221007073443-sjnwy.png"
                              alt=""
                              className="inline-block aspect-[auto_468/468] h-auto w-[468px] max-w-[100%] overflow-clip opacity-100"
                            />
                            <span
                              className={
                                listShowNumberMeaning[22]
                                  ? "absolute"
                                  : "absolute opacity-0 hover:opacity-100"
                              }
                            >
                              <img
                                className="aspect-[auto_312/312] h-auto w-[312] max-w-[100%] overflow-clip"
                                src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/22-b-20221007073443-enh-a.png"
                                alt="22"
                              />
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="w-[100%] pl-5">
                      <h3 className="text-center text-xl font-bold uppercase leading-[1.4] md:text-left md:text-[40px]">
                        Ý NGHĨA CÁC CON SỐ <br />
                        TRONG THẦN SỐ HỌC
                      </h3>
                      <div className="pt-[1em] text-center text-[15px] leading-[1.6] md:text-justify">
                        <div
                          className={
                            listShowNumberMeaning[1]
                              ? "block p-0 "
                              : "invisible h-0"
                          }
                        >
                          <p className="mb-[1.3em] mt-0">
                            Thần số học số 1 là hiện thân của sự táo bạo, đổi
                            mới, chấp nhận rủi ro, khả năng phục hồi và đi theo
                            trái tim mình. Nhân số học số 1 giúp phát triển sự
                            sáng tạo và sự tự tin của bạn trong mọi khía cạnh
                            của cuộc sống. Mục đích sống của những người có số
                            chủ đạo 1 là mang tới năng lượng sáng tạo tích cực,
                            đạt được sự độc lập trong các mối quan hệ của bản
                            thân.
                          </p>
                          <Link
                            className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                            href="https://tracuuthansohoc.com/than-so-hoc-so-1/"
                            target="_self"
                            type="button"
                          >
                            <span className="font-bol">XEM CHI TIẾT</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </Link>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[2]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 2 là hiện thân cho sự kiên nhẫn,
                              công bằng, khả năng ngoại giao và một tấm lòng yêu
                              thương, nhân ái. Nhiệm vụ của số chủ đạo 2 là trở
                              thành người kết nối, hòa giải, đem tình yêu thương
                              vào các mối quan hệ trong mọi khía cạnh cuộc sống.
                              Mục đích sống của những người này là học được cách
                              làm việc hài hòa, cân bằng và tôn trọng lẫn nhau.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-1/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[3]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 3 là hiện thân của sự năng động,
                              vui tươi, khả năng cân bằng cảm xúc và truyền được
                              nhiều nguồn cảm hứng. Nhiệm vụ của những người
                              mang số 3 trong Thần số học là người sử dụng cách
                              diễn đạt sáng tạo, phát triển khả năng kết nối,
                              tình cảm lành mạnh trong mọi khía cạnh của cuộc
                              sống. Mục đích sống của những người này là sử dụng
                              cảm xúc, tài năng sáng tạo của mình để nâng cao
                              tinh thần và truyền cảm hứng tới mọi người.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-3/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[4]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 4 là hiện thân cho những định
                              hướng, sự chia sẻ thực tế, làm việc chỉn chu.
                              Nhiệm vụ của bạn là tạo ra sự ổn định và an toàn
                              khi cần hoàn thành một điều gì đó mang giá trị lâu
                              dài. Mục đích của những người này là tạo nên sự
                              bền vững trong quá trình hướng tới mục tiêu cuộc
                              đời. Việc mang lại sự an toàn cho chính mình và
                              mọi người là điều mà nhân số học số 4 khao khát
                              mạnh mẽ.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-4/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[5]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 5 là hiện thân cho sự mạo hiểm, bản
                              tính thích phiêu lưu, không sợ hãi và muốn truyền
                              tải tới mọi người cách sống tự do. Nhiệm vụ của số
                              5 trong thần số học là phát triển sự tự do theo
                              thiên hướng xây dựng, bạn vừa có kỷ luật vừa có
                              mong muốn trải nghiệm những điều tốt đẹp cuộc sống
                              mang lại. Mục đích cuộc sống của bạn là tìm thấy
                              sự tự do bên trong những quy tắc, luật lệ và trải
                              nghiệm cuộc sống.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-5/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[6]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 6 là hiện thân cho trách nhiệm,
                              không phán xét, không chỉ trích những hành động và
                              lựa chọn của người khác, bạn có tầm nhìn xa và khả
                              năng nhìn thấy toàn cảnh trước mắt. Nhiệm vụ của
                              thần số học số 6 là phát triển và trau dồi khả
                              năng nhìn xa trông rộng, cũng như học cách chấp
                              nhận cuộc sống đa chiều. Mục đích sống của nhân số
                              học số 6 là dung hòa lý tưởng cao đẹp với những
                              thứ khiếm khuyết, không ngừng bồi bổ thêm tình yêu
                              thương trong mọi việc bạn đã, đang và sẽ làm.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-6/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[7]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 7 là hiện thân của trực giác, trí
                              tuệ, không ngại mở lòng với người khác. Nhiệm vụ
                              của thần số học số 7 là phát triển niềm tin vào
                              dòng chảy của cuộc sống, mở ra sự phát triển và
                              nhận thức cho các giá trị cá nhân và tinh thần.
                              Mục đích cuộc sống của bạn là tin tưởng vào bản
                              thân, vào quá trình bạn cảm thấy an toàn để có thể
                              mở lòng và chia sẻ trí tuệ bên trong của mình ra
                              thế giới.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-7/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[8]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 8 là hiện thân cho sự dư dả về tài
                              chính, sử dụng quyền lực khôn ngoan, luôn dành
                              nhiều thời gian, tiền bạc và sức ảnh hưởng của
                              mình để làm thế giới tốt đẹp hơn. Nhiệm vụ của số
                              8 trong nhân số học là tạo ra sự dồi dào về vật
                              chất. Mục đích cuộc sống của bạn là sử dụng ảnh
                              hưởng, quyền lực tài chính của mình để tạo ra dấu
                              ấn trên thế giới và giúp đỡ những người khác.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-8/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[9]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 9 là hiện thân của người lắng nghe,
                              biết đồng cảm và cởi mở trong cuộc sống. Nhiệm vụ
                              của nhân số học số 9 là trở thành người chính trực
                              trên con đường theo đuổi sự sáng tạo và cống hiến.
                              Mục đích của bạn là sống với các tiêu chuẩn chính
                              trực, sắp xếp cuộc sống song song giữa trí tuệ và
                              trái tim, truyền cảm hứng cho mọi người.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-9/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[11]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              Thần số học số 11 nhận được món quà thượng đế ban
                              cho bạn là trực giác rất phong phú. Bạn tốt bụng
                              và bạn là người giỏi gìn giữ hòa bình. Nhân số học
                              số 11 có khả năng phát hiện các xu hướng mới và
                              vượt qua các ranh giới cố hữu. Bạn cũng có thể bị
                              lôi kéo và có khả năng cực đoan. Bài học dành cho
                              bạn là tính quyết đoán và kiên trì, không từ bỏ
                              ước mơ của mình.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-11/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={
                            listShowNumberMeaning[22]
                              ? "block p-0"
                              : "invisible h-0"
                          }
                        >
                          <div>
                            <p className="mb-[1.3em] mt-0">
                              22 là một trong bộ ba số quan trọng trong Nhân số
                              học (11, 22, 33). Theo đó, cả 3 số này được liên
                              kết với nhau và tạo thành “Tam giác của sự khai
                              sáng” (theo tiếng Anh là Triangle of
                              Enlightenment). Mỗi con số trên đều mang một biểu
                              tượng lớn và nhiều ý nghĩa nhỏ đặc thù. Những
                              người mang vận mệnh thần số học số 22 thường có
                              tham vọng lớn, khát khao phát triển cuộc đời. Đặc
                              biệt, họ luôn có tố chất, phong thái của nhà lãnh
                              đạo thông minh, tài ba.
                            </p>
                            <Link
                              className="m-[20px_0_0] inline-flex h-[43px] items-center rounded-[99px] bg-[#af3689] px-[25px] text-center text-[18px] leading-[1.6] text-white no-underline "
                              href="https://tracuuthansohoc.com/than-so-hoc-so-22/"
                              target="_self"
                              type="button"
                            >
                              <span className="font-bol">XEM CHI TIẾT</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[auto] flex-row items-center bg-[#ffffff] p-[30px_0] pb-[150px] pt-0">
          <div className="absolute left-0 right-0 top-0 m-0 h-[100%] bg-[url('https://tracuuthansohoc.com/wp-content/uploads/2022/10/800-20221007094032-stp6d-1.png')] bg-cover bg-fixed bg-[50%_50%] bg-no-repeat p-0 opacity-100 "></div>
          <div className="relative w-[100%]">
            <div className="mx-[auto] flex  max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-[100%] basis-[100%] p-[0_15px_30px]">
                <div className="relative  ml-[auto] mr-0 w-[100%] bg-cover bg-[50%_50%] bg-no-repeat text-center">
                  <div className="mx-[auto] mb-[70px] mt-[30px] max-w-[1230px]  px-0">
                    <div className="relative mx-[auto] flex flex-row flex-wrap items-center justify-between">
                      <h2 className=" w-[100%]">
                        <span className="m-[0_15px] text-center text-[35px] font-bold uppercase leading-[1.6] text-[#061729]">
                          ĐÔI LỜI CHIA SẺ VỀ THẦN SỐ HỌC Miễn phí
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="mx-[auto] text-center text-[#f1f1f1]">
                    <div className="">
                      <Accordion
                        collapseAll
                        className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                      >
                        <Accordion.Panel className="border-[#243c5a]">
                          <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  ">
                            <span>Thần số học là gì?</span>
                          </Accordion.Title>
                          <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                            <p className="mb-[1.3em]">
                              <strong>Thần số học</strong> (nhân số học) là một
                              lĩnh vực nghiên cứu và giải mã con người trong
                              phạm trù huyền học. Bộ môn này đi sâu nghiên cứu
                              về ý nghĩa, mối liên hệ giữa các chữ số và con
                              người.
                            </p>
                            <p className="mb-[1.3em]">
                              Mỗi con số đại diện cho một lĩnh vực thuộc nhận
                              thức và kinh nghiệm của con người. Theo Nhân số
                              học, chỉ có bộ số tự nhiên 1, 2, 3, 4, 5, 6, 7, 8,
                              9 và hai số chính 11, 22 được sử dụng. Trong đó,
                              con số chủ đạo nhiều hơn một chữ số đại diện cho
                              cấp độ cao hơn về tiềm năng của con người so với
                              các số đơn lẻ.
                            </p>
                            <p className="mb-[1.3em]">
                              <em>
                                Để hiểu hơn về nội dung này, mời bạn tham khảo
                                bài viết:
                                <strong>
                                  <a
                                    href="than-so-hoc-la-gi/index.htm"
                                    data-wpel-link="internal"
                                  >
                                    Thần Số Học Là Gì ? Khám Phá Bản Thân Qua
                                    Những Con Số
                                  </a>
                                </strong>
                              </em>
                            </p>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                      <Accordion
                        collapseAll
                        className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                      >
                        <Accordion.Panel className="border-[#243c5a]">
                          <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  dark:text-[red]">
                            <span>Khám phá bản thân theo nhân số học</span>
                          </Accordion.Title>
                          <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                            <p className="mb-[1.3em]">
                              <strong>
                                Thần số học là bộ môn nghiên cứu về năng lượng
                                rung động của các con số và tác động của chúng
                                với cá nhân mỗi người. Đây là lĩnh vực huyền học
                                đơn giản để bạn có thể tiếp thu và nắm vững.{" "}
                              </strong>
                            </p>
                            <p className="mb-[1.3em]">
                              Sử dụng Nhân số học, bạn có thể khám phá điểm mạnh
                              và điểm yếu, tài năng, nhu cầu nội tâm, phản ứng
                              cảm xúc, cách đối nhân xử thế của một người. Bạn
                              có thể tự cải thiện bản thân bằng cách nhận thức
                              được tính cách của chính mình. Đồng thời, qua xem
                              thần số học miễn phí bạn cũng có thể học cách hiểu
                              và ứng xử với những người khác như gia đình, bạn
                              bè, người yêu, lãnh đạo, cấp dưới. Bạn có thể tìm
                              ra năng lượng tiềm ẩn, khó khăn, áp lực hiện đang
                              tồn tại trong cuộc sống của mình và trong cuộc
                              sống của những người xung quanh. Bạn cũng có thể
                              xác định những thời điểm tốt nhất cho các dấu mốc
                              quan trọng của cuộc đời như kết hôn, thay đổi công
                              việc, di chuyển, suy đoán, đi du lịch.
                            </p>
                            <p className="mb-[1.3em]">
                              Trong hầu hết lĩnh vực, những nhà nghiên cứu đã
                              tìm thấy mối tương quan giữa một số hiện tượng vật
                              lý có thể quan sát rõ ràng và các hoạt động bên
                              trong của con người. Nói cách khác, vũ trụ dường
                              như đã cung cấp nhiều chìa khóa để khai mở bản
                              chất con người. Trong chiêm tinh học, chìa khóa là
                              mối liên hệ giữa vị trí của các hành tinh khi một
                              người sinh ra với các đặc điểm của người đó; trong
                              sinh trắc vân tay, chìa khóa là mối quan hệ giữa
                              đường chỉ tay với đặc điểm tính cách; còn với Thần
                              số học Pitago, chìa khóa này là mối liên hệ giữa
                              tên và ngày sinh của một người với bản chất của
                              người đó. Đáng chú ý là tất cả các bản báo cáo,
                              nghiên cứu thuộc các lĩnh vực đều nhất quán với
                              nhau – các báo cáo khác nhau thường có thông tin
                              tương tự hoặc bao gồm các khía cạnh khác nhau,
                              nhưng có liên quan đến đặc điểm của một người.
                            </p>
                            <p className="mb-[1.3em]">
                              Đây là Tracuuthansohoc.com, mục tiêu hàng đầu của
                              chúng tôi là hỗ trợ bạn trong hành trình nhận thức
                              sâu sắc về bản ngã và trở nên tự tin hơn. Khi xem
                              thần số học miễn phí, bạn sẽ không chỉ tìm thấy
                              các biểu đồ chỉ số bí mật cho riêng mình, mà còn
                              sử dụng vô số các công cụ khác để phát triển bản
                              thân. Đội ngũ tuyệt vời của chúng tôi bao gồm các
                              nhà vật lý học, chuyên gia huyền học, chúng tôi ở
                              đây để giúp bạn hiểu về Thần số học Pitago và
                              truyền cảm hứng về bộ môn này. Từ đó bạn có thể
                              cải thiện và phát triển bản thân tốt hơn.
                            </p>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                      <Accordion
                        collapseAll
                        className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                      >
                        <Accordion.Panel className="border-[#243c5a]">
                          <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  ">
                            <span>Tracuuthansohoc có thể giúp gì cho bạn?</span>
                          </Accordion.Title>
                          <Accordion.Content className="bg-[white] text-[black]">
                            <p className="mb-[1.3em]">
                              Sứ mệnh của chúng tôi ở đây là tạo ra một công cụ
                              tính đầy đủ các chỉ số và giải thích ý nghĩa các
                              chỉ số của thần số học. Tracuuthansohoc muốn đem
                              một công cụ tính toán tiềm năng của bản thân đến
                              với mọi người với một mức phí phù hợp!
                              Tracuuthansohoc.com không chỉ tính một chỉ số!
                              Chúng tôi có đội ngũ các chuyên gia kết hợp với
                              nhau để chỉ ra hơn 20 chỉ số và sự kết hợp của
                              chúng cho riêng bạn.
                            </p>
                            <table className="h-[105px] w-[100%]">
                              <tbody>
                                <tr className="h-[21px]">
                                  <td className="h-[21px] w-[50%]">
                                    <strong>Chỉ số</strong>
                                  </td>
                                  <td className="width: 50%; h-[21px]">
                                    <strong>Ý nghĩa</strong>
                                  </td>
                                </tr>
                                <tr className="height: 21px">
                                  <td className="width: 50%; height: 21px">
                                    <strong>Số sứ mệnh</strong>
                                  </td>
                                  <td className="width: 50%; height: 21px">
                                    Số sứ mệnh được tìm thấy bằng cách sử dụng
                                    ánh xạ ra số trong tên khai sinh. Nó tiết lộ
                                    những khuyết điểm, khả năng và tài năng của
                                    bạn mà bạn sẽ trải qua trong cuộc đời. Tại
                                    sao sứ mệnh lại sử dụng tên của bạn? Tên của
                                    bạn cho biết lịch sử cá nhân của bạn cho đến
                                    thời điểm bạn sinh ra. Dù lịch sử của bạn là
                                    gì, nó đã hun đúc bạn thành con người của
                                    bạn. Cha mẹ của bạn, trước khi bạn đến với
                                    cuộc sống, đã nắm bắt những rung động của
                                    bạn và chọn tên của bạn cho phù hợp. Tên
                                    khai sinh của bạn là những gì bạn muốn nhận
                                    và thể hiện cái tôi ra ngoài thế giới xung
                                    quanh
                                  </td>
                                </tr>
                                <tr className="height: 21px">
                                  <td className="width: 50%; height: 21px">
                                    <strong>Chỉ số tính cách</strong>
                                  </td>
                                  <td className="width: 50%; height: 21px">
                                    Đây là chỉ số cho biết ấn tượng của người
                                    khác đối với bạn là gì. Đó là biểu hiện bên
                                    ngoài của bạn. Tính cách bên ngoài (nhân
                                    cách) của bạn sẽ được phản ánh qua hành vi,
                                    thái độ, phản ứng của bạn, cho dù có ý thức
                                    hay là vô thức.
                                  </td>
                                </tr>
                                <tr className="height: 21px">
                                  <td className="width: 50%; height: 21px">
                                    <strong>Chỉ số linh hồn</strong>
                                  </td>
                                  <td className="width: 50%; height: 21px">
                                    Đây là con số nói lên mong muốn của trái tim
                                    mỗi con người. Nó có tên gọi khác là Heart’s
                                    Desire Number (Số mong muốn trái tim), hiểu
                                    được
                                    <strong>
                                      <a
                                        href="chi-so-linh-hon/index.htm"
                                        data-wpel-link="internal"
                                      >
                                        chỉ số linh hồn
                                      </a>
                                    </strong>
                                    của một cá nhân, bạn sẽ rất dễ kết thân với
                                    người đó. Đó là nơi ước mơ, mong muốn, khao
                                    khát và động lực thực sự của mỗi hành động.
                                  </td>
                                </tr>
                                <tr className="height: 21px">
                                  <td className="width: 50%; height: 21px">
                                    <strong>Chỉ số trưởng thành</strong>
                                  </td>
                                  <td className="width: 50%; height: 21px">
                                    Bạn sẽ không cảm nhận được con số trưởng
                                    thành một cách mạnh mẽ cho đến khi bạn bước
                                    qua tuổi 40 và nó sẽ không được hiện thực
                                    hóa cho đến khi bạn khoảng 50 tuổi. Con số
                                    này là nơi con người thật của bạn được tìm
                                    thấy và cuối cùng có thể giúp bạn cảm thấy
                                    thoải mái trong trái tim của chính mình. Con
                                    số này cho biết nửa sau của cuộc đời bạn sẽ
                                    như thế nào.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-[auto] flex max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-[100%] p-[0_15px_30px]">
                <div className="mx-[auto] mb-[70px] mt-[30px] px-0">
                  <div className="flex flex-row flex-wrap items-center justify-between">
                    <h2 className="w-[100%]">
                      <span className="text-center text-[35px] font-bold leading-[1.6] text-white">
                        KIẾN THỨC THÚ VỊ TRONG THẦN SỐ HỌC PYTHAGORAS
                      </span>
                    </h2>
                  </div>
                </div>
                <div>
                  <Accordion
                    collapseAll
                    className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                  >
                    <Accordion.Panel className="border-[#243c5a]">
                      <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  dark:text-[red]">
                        <span>Con số chủ đạo (Chỉ đường đời)</span>
                      </Accordion.Title>
                      <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                        <p className="mb-[1.3em]">
                          <strong>
                            <Link href="con-so-chu-dao/index.htm">
                              Số chủ đạo
                            </Link>
                          </strong>{" "}
                          chỉ đơn giản là rút gọn của toàn bộ ngày sinh của bạn.
                          Số đường đời này cho thấy bạn là ai và những đặc điểm
                          mà bạn có ngay từ khi được sinh ra. Đường đời là con
                          số quan trọng mà chúng ta sẽ bàn đến trong nhân số
                          học. Đó là bản chất của hành trình cuộc đời bạn. Đa số
                          các nhà số học tin rằng mọi người đều có tiền kiếp.
                          Trước khi được sinh ra trong cuộc sống hiện tại này,
                          bạn phải dành thời gian để nhìn lại cuộc sống trước
                          đây của mình trong khi tìm ra những gì bạn muốn học
                          trong lần này. Điều này có nghĩa là ngày sinh của bạn
                          là sự kết hợp của các số mà bạn đã chọn. Bạn hoàn toàn
                          có thể tìm được con số chủ đạo của mình khi xem thần
                          số học miễn phí tại hệ thống Tracuuthansohoc.com
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                  <Accordion
                    collapseAll
                    className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                  >
                    <Accordion.Panel className="border-[#243c5a]">
                      <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  dark:text-[red]">
                        <span>Biểu đồ ngày sinh</span>
                      </Accordion.Title>
                      <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                        <p className="mb-[1.3em]">
                          <strong>
                            <Link
                              href="bieu-do-ngay-sinh/index.htm"
                              data-wpel-link="internal"
                            >
                              Biểu đồ ngày sinh
                            </Link>
                          </strong>{" "}
                          có thể được coi như chiếc chìa khóa để mở cánh cửa
                          khám phá tiềm năng tận cùng ở sâu bên trong mỗi người.
                          Dựa trên nguyên tắc của nhà số học Pythagoras, mỗi
                          ngày sinh khác nhau tương ứng với một biểu đồ ngày
                          sinh nhất định.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                  <Accordion
                    collapseAll
                    className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                  >
                    <Accordion.Panel className="border-[#243c5a]">
                      <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  dark:text-[red]">
                        <span>Năm cá nhân</span>
                      </Accordion.Title>
                      <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                        <p className="mb-[1.3em]">
                          Thần số học (Nhân số học) hoạt động theo vòng chu kỳ 9
                          năm. Mỗi một năm trong chu kỳ 9 năm đó đều có đặc điểm
                          và nhu cầu riêng. Do đó, mỗi người cần nắm được những
                          ý nghĩa và giá trị ở trong từng năm để biết mình đang
                          ở đâu và mình cần làm gì để mở ra những bí ẩn trong
                          cuộc đời. Nói cách khác,
                          <strong>
                            <Link href="nam-ca-nhan-than-so-hoc/index.htm">
                              {" "}
                              năm cá nhân trong Thần Số Học{" "}
                            </Link>
                          </strong>
                          được đúc kết từ năm sinh và chu kì vận số của từng
                          người. Qua chỉ số này, bạn sẽ biết được năm nay bạn sẽ
                          có tính cách như thế nào, bạn cần làm gì trong năm nay
                          là phù hợp… Tuy nhiên, mỗi một năm thì con số năm cá
                          nhân mỗi người đều thay đổi bởi sự ảnh hưởng của năng
                          lượng chung của năm thế giới.
                        </p>
                        <p className="mb-[1.3em]">
                          ⏩⏩⏩ Xem ngay bài viết:
                          <Link href="nam-the-gioi-than-so-hoc-2023/index.htm">
                            <strong>
                              {" "}
                              Năm Thế Giới Thần Số Học 2023: Thức Tỉnh Linh Hồn
                              Và Khát Vọng
                            </strong>
                          </Link>
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                  <Accordion
                    collapseAll
                    className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                  >
                    <Accordion.Panel className="border-[#243c5a]">
                      <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  dark:text-[red]">
                        <span>
                          4 đỉnh cao đời người trong thần số học Pitago
                        </span>
                      </Accordion.Title>
                      <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                        <p className="mb-[1.3em]">
                          Biểu đồ kim tự tháp trong Thần số học tương ứng với 4
                          đỉnh cao của đời người theo chu kỳ 9 năm. Biểu đồ này
                          được chia làm 3 chu kỳ, mỗi chu kỳ tương ứng với giai
                          đoạn 27 năm. Vào mỗi cuối chu kỳ 9 năm, cá nhân mỗi
                          người đều sẽ gặt hái được những thành công mà con số ở
                          mỗi đỉnh kim tự tháp đem lại. Ngoài ra, biểu tượng của
                          kim tự tháp còn thể hiện những khát vọng tiềm ẩn bên
                          trong mỗi con người.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                  <Accordion
                    collapseAll
                    className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                  >
                    <Accordion.Panel className="border-[#243c5a]">
                      <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  dark:text-[red]">
                        <span>
                          Các chỉ số trong thần số học và ý nghĩa của chúng
                        </span>
                      </Accordion.Title>
                      <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                        <table className=" collapse h-[105px] w-[100%]">
                          <tbody>
                            <tr className="h-[21px] ">
                              <td className="h-[21px] w-[50%]">
                                <strong>Chỉ số</strong>
                              </td>
                              <td className="width: 50%; height: 21px">
                                <strong>Ý nghĩa</strong>
                              </td>
                            </tr>
                            <tr className="height: 21px">
                              <td className="width: 50%; height: 21px">
                                <strong>Số sứ mệnh</strong>
                              </td>
                              <td className="width: 50%; height: 21px">
                                Số sứ mệnh được tìm thấy bằng cách sử dụng ánh
                                xạ ra số trong tên khai sinh. Nó tiết lộ những
                                khuyết điểm, khả năng và tài năng của bạn mà bạn
                                sẽ trải qua trong cuộc đời. Tại sao sứ mệnh lại
                                sử dụng tên của bạn? Tên của bạn cho biết lịch
                                sử cá nhân của bạn cho đến thời điểm bạn sinh
                                ra. Dù lịch sử của bạn là gì, nó đã hun đúc bạn
                                thành con người của bạn. Cha mẹ của bạn, trước
                                khi bạn đến với cuộc sống, đã nắm bắt những rung
                                động của bạn và chọn tên của bạn cho phù hợp.
                                Tên khai sinh của bạn là những gì bạn muốn nhận
                                và thể hiện cái tôi ra ngoài thế giới xung quanh
                              </td>
                            </tr>
                            <tr className="height: 21px">
                              <td className="width: 50%; height: 21px">
                                <strong>Chỉ số tính cách</strong>
                              </td>
                              <td className="width: 50%; height: 21px">
                                Đây là chỉ số cho biết ấn tượng của người khác
                                đối với bạn là gì. Đó là biểu hiện bên ngoài của
                                bạn. Tính cách bên ngoài (nhân cách) của bạn sẽ
                                được phản ánh qua hành vi, thái độ, phản ứng của
                                bạn, cho dù có ý thức hay là vô thức.
                              </td>
                            </tr>
                            <tr className="height: 21px">
                              <td className="width: 50%; height: 21px">
                                <strong>Chỉ số linh hồn</strong>
                              </td>
                              <td className="width: 50%; height: 21px">
                                Đây là con số nói lên mong muốn của trái tim mỗi
                                con người. Nó có tên gọi khác là Heart’s Desire
                                Number (Số mong muốn trái tim), hiểu được
                                <strong>
                                  <a
                                    href="chi-so-linh-hon/index.htm"
                                    data-wpel-link="internal"
                                  >
                                    chỉ số linh hồn
                                  </a>
                                </strong>
                                của một cá nhân, bạn sẽ rất dễ kết thân với
                                người đó. Đó là nơi ước mơ, mong muốn, khao khát
                                và động lực thực sự của mỗi hành động.
                              </td>
                            </tr>
                            <tr className="height: 21px">
                              <td className="width: 50%; height: 21px">
                                <strong>Chỉ số trưởng thành</strong>
                              </td>
                              <td className="width: 50%; height: 21px">
                                Bạn sẽ không cảm nhận được con số trưởng thành
                                một cách mạnh mẽ cho đến khi bạn bước qua tuổi
                                40 và nó sẽ không được hiện thực hóa cho đến khi
                                bạn khoảng 50 tuổi. Con số này là nơi con người
                                thật của bạn được tìm thấy và cuối cùng có thể
                                giúp bạn cảm thấy thoải mái trong trái tim của
                                chính mình. Con số này cho biết nửa sau của cuộc
                                đời bạn sẽ như thế nào.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                  <Accordion
                    collapseAll
                    className="mb-[10px] rounded-none border-none bg-[linear-gradient(90deg,#092c49,#af3688)]"
                  >
                    <Accordion.Panel className="border-[#243c5a]">
                      <Accordion.Title className="text-[22px] font-bold leading-[1.6] text-[#fff] hover:text-[black]  dark:text-[red]">
                        <span>Công cụ bói tình yêu theo thần số học</span>
                      </Accordion.Title>
                      <Accordion.Content className="mb-[50px] border-[1px_solid_#092c49] bg-[white] p-[1em_2.3em] text-justify text-[18px] leading-[1.6] text-[black]">
                        <p className="mb-[1.3em]">
                          Công cụ{" "}
                          <strong>
                            <Link
                              href="boi-tinh-yeu/index.htm"
                              data-wpel-link="internal"
                            >
                              bói tình yêu
                            </Link>
                          </strong>{" "}
                          theo tên và ngày sinh sử dụng phương pháp thần số học
                          dự đoán chính xác độ hòa hợp giữa hai người chỉ bằng 2
                          cái tên. Xem ngay!
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex w-[100%] flex-row items-center bg-white p-[30px_0] py-[90px]">
          <div className="absolute left-0 right-0 top-0 m-0 h-[100%]  bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/0-20221007110242-aesyt-1.png)] bg-cover  bg-[50%_50%] bg-no-repeat p-0 opacity-100"></div>
          <div className="relative z-[1] w-[100%]">
            <div className="mx-[auto] flex w-[100%] max-w-[1222.5px] flex-row flex-wrap">
              <div className="relative m-0 max-w-[100%] basis-[100%] p-[0_9.8px_19.6px] pb-0 md:max-w-[75%] md:basis-[75%] ">
                <div className="relative ml-[auto] mr-0 w-[100%] bg-cover bg-no-repeat">
                  <div className="mx-[auto] mb-[1.5em] max-w-[1230px] px-0">
                    <h2 className="relative flex w-[100%]  flex-row flex-wrap items-center justify-center">
                      <span className="m-[0_15px] text-center text-[35px] font-bold leading-[1.6]">
                        {" "}
                        BLOG TRA CỨU THẦN SỐ HỌC
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="relative m-[0_auto] mb-5 flex w-[100%] items-center bg-white">
                  <div className="relative m-[0_auto] h-auto w-[100%] max-w-[52%] p-[10px]">
                    <div className="relative h-[auto] bg-cover bg-[50%_50%]">
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/09/cach-tinh-than-so-hoc.jpg"
                        alt=""
                        className="bottom-0 left-0 right-0 top-0 h-[100%] w-[100%]"
                      />
                    </div>
                  </div>
                  <div className="max-w-[48%] p-[10px] text-left">
                    <div>
                      <p className="mb-2 text-[19px] font-bold leading-[1.4]">
                        <strong>
                          Cách tính Thần số học chuẩn Pythagoras theo tên và
                          ngày sinh mới nhất 2023
                        </strong>
                      </p>
                      <p className="mb-2 text-justify text-[15px] font-bold leading-[1.4]">
                        Bài viết hướng dẫn chi tiết nhất cách tính thần số học,
                        nhân số học từ ngày tháng năm sinh và họ tên, kèm luận
                        giải cho riêng bạn…
                      </p>
                      <Link
                        href="https://tracuuthansohoc.com/cach-tinh-than-so-hoc/"
                        target="_self"
                        type="button"
                        className=" m-[18px_0_0] inline-flex  min-h-[38px] flex-wrap rounded-[99px] border border-[#af3689] bg-[#af3689] pl-[40px] pr-[25px] pt-1 text-center text-[18px] leading-[1.6] text-[white] no-underline hover:bg-[white] hover:text-[#af3689]"
                      >
                        <span className=" text-[16px] font-bold">
                          Xem chi tiết
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative mx-[-10px] mb-0 flex w-[auto] max-w-[1222.5px] flex-row flex-wrap px-0">
                  <div className="relative m-0 w-[100%] max-w-[33.33%] basis-[33.33%] p-[0_9.8px_19.6px]">
                    <div className="relative ml-[auto] mr-0 w-[100%] bg-no-repeat">
                      <div className="relative m-[0_auto] w-[100%] bg-white">
                        <div className="relative m-[0_auto] h-[auto] overflow-hidden p-[10px]">
                          <img
                            className="m-[0_auto] inline-block h-[auto] w-[100%] max-w-[100%] align-middle"
                            src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/bang-chu-cai-than-so-hoc-1.jpg"
                            alt="Bảng Chữ Cái Thần Số Học Pitago Và Cách Quy Đổi Tên Ra Các Con Số"
                          />
                        </div>
                        <div className="relative h-[210px] w-[100%] p-[0_10px_10px] text-left">
                          <div className="min-h-[200px] text-left ">
                            <p className="mb-[5px] text-[19px] leading-[1.4] text-black">
                              <strong>
                                Giải Mã Chi Tiết Bảng Chữ Cái Thần Số Học Chính
                                Xác Nhất
                              </strong>
                            </p>
                            <p>
                              <Link
                                href="https://tracuuthansohoc.com/bang-chu-cai-than-so-hoc/"
                                className="text-justify text-[16px] font-bold leading-[1.4] text-[#af3689] no-underline"
                              >
                                Xem chi tiết »
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative m-0 w-[100%] max-w-[33.33%] basis-[33.33%] p-[0_9.8px_19.6px]">
                    <div className="relative ml-[auto] mr-0 w-[100%] bg-no-repeat">
                      <div className="relative m-[0_auto] w-[100%] bg-white">
                        <div className="relative m-[0_auto] h-[auto] overflow-hidden p-[10px]">
                          <img
                            className="m-[0_auto] inline-block h-[auto] w-[100%] max-w-[100%] align-middle"
                            src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/bang-chu-cai-than-so-hoc-1.jpg"
                            alt="Bảng Chữ Cái Thần Số Học Pitago Và Cách Quy Đổi Tên Ra Các Con Số"
                          />
                        </div>
                        <div className="relative h-[210px] w-[100%] p-[0_10px_10px] text-left">
                          <div className="min-h-[200px] text-left ">
                            <p className="mb-[5px] text-[19px] leading-[1.4] text-black">
                              <strong>
                                Giải Mã Chi Tiết Bảng Chữ Cái Thần Số Học Chính
                                Xác Nhất
                              </strong>
                            </p>
                            <p>
                              <Link
                                href="https://tracuuthansohoc.com/bang-chu-cai-than-so-hoc/"
                                className="text-justify text-[16px] font-bold leading-[1.4] text-[#af3689] no-underline"
                              >
                                Xem chi tiết »
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative m-0 w-[100%] max-w-[33.33%] basis-[33.33%] p-[0_9.8px_19.6px]">
                    <div className="relative ml-[auto] mr-0 w-[100%] bg-no-repeat">
                      <div className="relative m-[0_auto] w-[100%] bg-white">
                        <div className="relative m-[0_auto] h-[auto] overflow-hidden p-[10px]">
                          <img
                            className="m-[0_auto] inline-block h-[auto] w-[100%] max-w-[100%] align-middle"
                            src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/bang-chu-cai-than-so-hoc-1.jpg"
                            alt="Bảng Chữ Cái Thần Số Học Pitago Và Cách Quy Đổi Tên Ra Các Con Số"
                          />
                        </div>
                        <div className="relative h-[210px] w-[100%] p-[0_10px_10px] text-left">
                          <div className="min-h-[200px] text-left ">
                            <p className="mb-[5px] text-[19px] leading-[1.4] text-black">
                              <strong>
                                Giải Mã Chi Tiết Bảng Chữ Cái Thần Số Học Chính
                                Xác Nhất
                              </strong>
                            </p>
                            <p>
                              <Link
                                href="https://tracuuthansohoc.com/bang-chu-cai-than-so-hoc/"
                                className="text-justify text-[16px] font-bold leading-[1.4] text-[#af3689] no-underline"
                              >
                                Xem chi tiết »
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%] p-[0_9.8px_19.6px] pb-0  md:max-w-[25%] md:basis-[25%]">
                <div className="relative ml-0 mr-[auto] w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                  <div className="mb-0 ml-[-10px] mr-[-10px] flex w-[auto] max-w-[1222.5px] flex-row flex-wrap px-0">
                    <div className="relative m-0 mb-0  w-[100%] max-w-[50%] basis-[50%]  p-[0_9.8px_19.6px] md:max-w-[100%] md:basis-[100%]">
                      <div className="relative ml-0 mr-[auto] w-[100%] bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-[100%]">
                            <div className=" relative m-[0_auto] h-auto w-[100%] max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="relative h-auto overflow-hidden bg-cover bg-[50%_50%] pt-[100%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%]
                                 object-cover object-[50%_50%] opacity-100"
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/bang-title.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="bg-white p-[10px_10px_10px_5px] text-left">
                              <div>
                                <p className="mb-2 text-[14px] font-bold leading-[1.4] text-black">
                                  Tên Băng mang ý nghĩa gì? Số phận của Băng sẽ
                                  như thế nào?
                                </p>
                                <div className="text-[.8em] text-black">
                                  {" "}
                                  08/10/2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="relative m-0 mb-0 w-[100%] max-w-[50%] basis-[50%]  p-[0_9.8px_19.6px] md:max-w-[100%] md:basis-[100%]">
                      <div className="relative ml-0 mr-[auto] w-[100%] bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-[100%]">
                            <div className=" relative m-[0_auto] h-auto w-[100%] max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="relative h-auto overflow-hidden bg-cover bg-[50%_50%] pt-[100%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%]
                                 object-cover object-[50%_50%] opacity-100"
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/bang-title.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="bg-white p-[10px_10px_10px_5px] text-left">
                              <div>
                                <p className="mb-2 text-[14px] font-bold leading-[1.4] text-black">
                                  Tên Băng mang ý nghĩa gì? Số phận của Băng sẽ
                                  như thế nào?
                                </p>
                                <div className="text-[.8em] text-black">
                                  {" "}
                                  08/10/2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="relative m-0 mb-0 w-[100%] max-w-[50%] basis-[50%]  p-[0_9.8px_19.6px] md:max-w-[100%] md:basis-[100%]">
                      <div className="relative ml-0 mr-[auto] w-[100%] bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-[100%]">
                            <div className=" relative m-[0_auto] h-auto w-[100%] max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="relative h-auto overflow-hidden bg-cover bg-[50%_50%] pt-[100%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%]
                                 object-cover object-[50%_50%] opacity-100"
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/bang-title.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="bg-white p-[10px_10px_10px_5px] text-left">
                              <div>
                                <p className="mb-2 text-[14px] font-bold leading-[1.4] text-black">
                                  Tên Băng mang ý nghĩa gì? Số phận của Băng sẽ
                                  như thế nào?
                                </p>
                                <div className="text-[.8em] text-black">
                                  {" "}
                                  08/10/2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="relative m-0 mb-0 w-[100%] max-w-[50%] basis-[50%]  p-[0_9.8px_19.6px] md:max-w-[100%] md:basis-[100%]">
                      <div className="relative ml-0 mr-[auto] w-[100%] bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-[100%]">
                            <div className=" relative m-[0_auto] h-auto w-[100%] max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="relative h-auto overflow-hidden bg-cover bg-[50%_50%] pt-[100%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%]
                                 object-cover object-[50%_50%] opacity-100"
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/bang-title.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="bg-white p-[10px_10px_10px_5px] text-left">
                              <div>
                                <p className="mb-2 text-[14px] font-bold leading-[1.4] text-black">
                                  Tên Băng mang ý nghĩa gì? Số phận của Băng sẽ
                                  như thế nào?
                                </p>
                                <div className="text-[.8em] text-black">
                                  {" "}
                                  08/10/2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="relative m-0 mb-0 w-[100%] max-w-[50%] basis-[50%]  p-[0_9.8px_19.6px] md:max-w-[100%] md:basis-[100%]">
                      <div className="relative ml-0 mr-[auto] w-[100%] bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-[100%]">
                            <div className=" relative m-[0_auto] h-auto w-[100%] max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="relative h-auto overflow-hidden bg-cover bg-[50%_50%] pt-[100%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%]
                                 object-cover object-[50%_50%] opacity-100"
                                  src="https://tracuuthansohoc.com/wp-content/uploads/2023/09/bang-title.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="bg-white p-[10px_10px_10px_5px] text-left">
                              <div>
                                <p className="mb-2 text-[14px] font-bold leading-[1.4] text-black">
                                  Tên Băng mang ý nghĩa gì? Số phận của Băng sẽ
                                  như thế nào?
                                </p>
                                <div className="text-[.8em] text-black">
                                  {" "}
                                  08/10/2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative m-0 mb-0 w-[100%] max-w-[100%] basis-[100%] p-[0_9.8px_19.6px]">
                <div className="relative ml-0 mr-[auto] w-[100%] bg-cover bg-[50%_50%] bg-no-repeat text-center">
                  <Link href="https://tracuuthansohoc.com/kien-thuc/"></Link>
                  <Link
                    href="https://tracuuthansohoc.com/kien-thuc/"
                    target="_self"
                    type="button"
                    className=" my-5 inline-flex min-h-[50px]  w-[100%] max-w-[360px] flex-wrap justify-center rounded-[99px] border border-[#af3689] bg-[#af3689] px-[30px] pt-1 text-center text-[18px] leading-[1.6] text-[white] no-underline hover:bg-[white] hover:text-[#af3689]"
                  >
                    <span className=" text-[18px] font-bold leading-[1.6]">
                      Xem theem
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[auto] w-[100%] flex-row items-center overflow-hidden px-0 pb-[520px] pt-[26px]">
          <div className="absolute left-0 right-0 top-0 m-0 h-[100%] w-[100%] bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/1200-20221007025022-qfzm3-1.png)] bg-cover bg-scroll bg-center bg-repeat bg-origin-content p-0 opacity-100"></div>
          <div className="relative z-[1] w-[100%]">
            <div className=" mx-[auto] flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px] pb-0">
                <div className="relative ml-[auto] mr-0 w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                  <p className="mt-[-50px] text-[85px] leading-[1.6] tracking-normal text-[#061729] md:text-[150px]">
                    <strong>LOUIS NGUYỄN</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-[21] mx-[auto] flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px]">
                <div className="relative ml-[auto] mr-0 w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-0 rounded-none border-[3px] border-[#ea5793] border-[1px_solid_#ececec]"></div>
                  <div className="mx-[-15px] flex w-[auto] max-w-[1230px] flex-row flex-wrap px-0">
                    <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px] pb-0 md:max-w-[58%] md:basis-[58%]">
                      <div className="relative ml-[auto] mr-0 w-[100%] bg-cover bg-[50%_50%] bg-no-repeat p-[0px_15px_0px_45px] ">
                        <h2 className="mt-[15px] w-[100%]">
                          <span className="text-[27px] font-bold leading-[1.6] text-[#af3689]">
                            NHÀ NGHIÊN CỨU THẦN SỐ HỌC PITAGO{" "}
                          </span>{" "}
                          <strong className="text-[53px] font-bold leading-[1.6] text-white">
                            THẦY{" "}
                          </strong>
                          <strong className="text-[53px] font-bold leading-[1.6] text-white">
                            LOUIS NGUYỄN
                          </strong>
                        </h2>
                        <ul className="mb-[1.3em] mt-0 p-0 pt-5 text-[16px] text-white">
                          <li className="relative mb-[15px] list-none pl-[30px] leading-[1.6]">
                            <strong>
                              CEO Tra cứu thần số học Louis Nguyễn – Nhà nghiên
                              cứu thần số học
                            </strong>
                          </li>
                          <li className="relative mb-[15px] list-none pl-[30px] leading-[1.6]">
                            <strong>
                              Nhà sáng lập hệ thống Tra cứu thần số học hàng đầu
                              Việt Nam
                            </strong>
                          </li>
                          <li className="relative mb-[15px] list-none pl-[30px] leading-[1.6]">
                            <strong>
                              Hơn 7 năm nghiên cứu và ứng dụng Nhân số học vào
                              đời sống
                            </strong>
                          </li>
                          <li className="relative mb-[15px] list-none pl-[30px] leading-[1.6]">
                            <strong>
                              Hơn 100 khóa đào tạo thần số học cho đại chúng
                              Việt Nam
                            </strong>
                          </li>
                          <li className="relative mb-[15px] list-none pl-[30px] leading-[1.6]">
                            <strong>
                              Cố vấn định hướng cho hơn 50 doanh nghiệp lớn nhỏ
                              trong kỷ nguyên chuyển đổi số
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px] pb-0 md:max-w-[42%] md:basis-[42%]">
                      <div className="relative ml-0 mr-[auto] w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                        <div className="relative z-[6] mx-auto mt-0 w-[100%] max-w-[330px] md:mt-[-100px] md:max-w-none">
                          <div className=" relative overflow-hidden">
                            <img
                              className="inline-block h-auto w-[100%] max-w-[100%] opacity-100 transition-[opacity_1s]"
                              src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/paratimevn-ihado-0930-min-20221010034159-sznb0.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-230px] z-[1] h-[302px] w-[100%]">
              <div className="absolute h-[100%] w-[100%]">
                <div className="absolute m-[0_auto] h-[100%] w-[100%] bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_1.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className="absolute bottom-[-520px] z-[2] h-[595px] w-[100%]">
              <div className="absolute h-[100%] w-[100%]">
                <div className="absolute m-[0_auto] h-[100%] w-[100%] bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_2.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className=" absolute bottom-[-410px] right-0 z-[4] h-[278px] w-[452px]">
              <div className="absolute h-[100%] w-[100%]">
                <div className="absolute m-[0_auto] h-[100%] w-[100%] bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_3.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className="absolute bottom-[-310px] z-[4] h-[163px] w-[370px]">
              <div className=" absolute h-[100%] w-[100%]">
                <div className="absolute m-[0_auto] h-[100%] w-[100%] bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_4.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className="absolute bottom-[-440px]"></div>
          </div>
        </section>

        <section className="relative flex min-h-[auto] w-[100%] flex-row items-center bg-white p-[30px_0] pb-[70px] pt-0">
          <div className="absolute left-0 right-0 top-0 m-0 h-[100%] w-[100%] overflow-hidden bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/750-20221007030937-wtq5h.png)] bg-scroll bg-center bg-repeat bg-origin-content p-0 opacity-100"></div>
          <div className="relative z-[1] w-[100%]">
            <div className=" px-15px mx-[auto] mb-[1.5em]  max-w-[1230px]">
              <h2 className="relative mt-0 flex w-[100%] flex-row flex-wrap items-center justify-center text-[black]">
                <span className="m-[0_15px] text-center text-[30px] font-bold uppercase leading-[1.6] md:text-[35px]">
                  CHƯƠNG TRÌNH ĐÀO TẠO THần SỐ Học <br />
                  DO THẦY LOUIS NGUYỄN TRỰC TIẾP ĐỨNG LỚP
                </span>
              </h2>
            </div>
            <div className=" mx-[auto] flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-[100%] max-w-[100%] basis-[100%] p-[0_15px_30px] pb-0">
                <div className="relative ml-[auto] mr-0 w-[100%] bg-cover bg-[50%_50%] bg-no-repeat">
                  <div className="relative mx-[-15px] mb-0 flex w-auto max-w-[1230px] flex-row flex-wrap px-0">
                    <div className="relative block w-[100%]">
                      <div className="relative h-[587px] touch-pan-y overflow-hidden">
                        {/* transfrom translate */}
                        <div className="absolute left-0 h-[100%] w-[100%]">
                          <section className="absolute left-[0%] m-0 flex min-h-[auto] w-[100%] max-w-[50%] flex-row items-center px-[15px] pb-0 pt-[30px]">
                            <div className="relative z-[1] h-[100%] w-[100%] pb-[15px]">
                              <div className="relative m-[0_auto] w-[100%] bg-white shadow-[7px_7px_9px_0_rgba(51,51,51,.2)] transition-[opacity_.3s,transform_.3s,background-color_.3s]">
                                <div className="relative m-[0_auto] block h-auto overflow-hidden transition-[opacity_.3s,transform_.3s,background-color_.3s]">
                                  <Link
                                    className="block "
                                    href="khoa-hoc-than-so-hoc"
                                  >
                                    <div className="relative block h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                      <img
                                        className="bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%] opacity-100"
                                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/khoa-hoc-than-so-hoc-chuyen-sau.jpg"
                                        alt="Khóa học Thần số học chuyên sâu"
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="relative h-[322px] w-[100%]  p-5 text-left md:p-[20px_30px_100px_50px]">
                                  <div className="text-justify text-black">
                                    <h3 className="mb-[15px] mt-[unset] h-[65px] overflow-hidden text-[23px] leading-[1.4]">
                                      Khóa học thần số học chuyên sâu
                                    </h3>
                                    <p className="text-[15px]  leading-[1.6] ">
                                      Khóa học giúp bạn thấu hiểu chính mình,
                                      phát huy điểm mạnh, khắc phục điểm yếu;
                                      thấu hiểu người thân, tìm thấy giải pháp
                                      vun đắp mối quan hệ; thấu hiểu khách hàng,
                                      từ đó đưa ra hướng dẫn phù hợp; dẫn lối
                                      trở thành chuyên gia thần số học có khả
                                      năng lắng nghe, chia sẻ, coaching hỗ trợ
                                      giải quyết vấn đề cho mọi người và kiếm
                                      thu nhập từ công việc này.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="absolute left-[50%] m-0 flex min-h-[auto] w-[100%] max-w-[50%] flex-row items-center px-[15px] pb-0 pt-[30px]">
                            <div className="relative z-[1] h-[100%] w-[100%] pb-[15px]">
                              <div className="relative m-[0_auto] w-[100%] bg-white shadow-[7px_7px_9px_0_rgba(51,51,51,.2)] transition-[opacity_.3s,transform_.3s,background-color_.3s]">
                                <div className="relative m-[0_auto] block h-auto overflow-hidden transition-[opacity_.3s,transform_.3s,background-color_.3s]">
                                  <Link
                                    className="block "
                                    href="khoa-hoc-than-so-hoc"
                                  >
                                    <div className="relative block h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                      <img
                                        className="bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%] opacity-100"
                                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/khoa-hoc-than-so-hoc-chuyen-sau.jpg"
                                        alt="Khóa học Thần số học chuyên sâu"
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="relative h-[322px] w-[100%] p-5 text-left md:p-[20px_30px_100px_50px]">
                                  <div className=" text-justify text-black">
                                    <h3 className="mb-[15px] mt-[unset] h-[65px] overflow-hidden text-[23px] leading-[1.4]">
                                      Khóa học thần số học chuyên sâu
                                    </h3>
                                    <p className="text-[15px]  leading-[1.6] ">
                                      Khóa học giúp bạn thấu hiểu chính mình,
                                      phát huy điểm mạnh, khắc phục điểm yếu;
                                      thấu hiểu người thân, tìm thấy giải pháp
                                      vun đắp mối quan hệ; thấu hiểu khách hàng,
                                      từ đó đưa ra hướng dẫn phù hợp; dẫn lối
                                      trở thành chuyên gia thần số học có khả
                                      năng lắng nghe, chia sẻ, coaching hỗ trợ
                                      giải quyết vấn đề cho mọi người và kiếm
                                      thu nhập từ công việc này.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="absolute left-[100%] m-0 flex min-h-[auto] w-[100%] max-w-[50%] flex-row items-center px-[15px] pb-0 pt-[30px]">
                            <div className="relative z-[1] h-[100%] w-[100%] pb-[15px]">
                              <div className="relative m-[0_auto] w-[100%] bg-white shadow-[7px_7px_9px_0_rgba(51,51,51,.2)] transition-[opacity_.3s,transform_.3s,background-color_.3s]">
                                <div className="relative m-[0_auto] block h-auto overflow-hidden transition-[opacity_.3s,transform_.3s,background-color_.3s]">
                                  <Link
                                    className="block "
                                    href="khoa-hoc-than-so-hoc"
                                  >
                                    <div className="relative block h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                      <img
                                        className="bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-[100%] w-[100%] max-w-[100%] opacity-100"
                                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/khoa-hoc-than-so-hoc-chuyen-sau.jpg"
                                        alt="Khóa học Thần số học chuyên sâu"
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="relative h-[322px] w-[100%] p-5 text-left md:p-[20px_30px_100px_50px]">
                                  <div className=" text-justify text-black">
                                    <h3 className="mb-[15px] mt-[unset] h-[65px] overflow-hidden text-[23px] leading-[1.4]">
                                      Khóa học thần số học chuyên sâu
                                    </h3>
                                    <p className="text-[15px]  leading-[1.6] ">
                                      Khóa học giúp bạn thấu hiểu chính mình,
                                      phát huy điểm mạnh, khắc phục điểm yếu;
                                      thấu hiểu người thân, tìm thấy giải pháp
                                      vun đắp mối quan hệ; thấu hiểu khách hàng,
                                      từ đó đưa ra hướng dẫn phù hợp; dẫn lối
                                      trở thành chuyên gia thần số học có khả
                                      năng lắng nghe, chia sẻ, coaching hỗ trợ
                                      giải quyết vấn đề cho mọi người và kiếm
                                      thu nhập từ công việc này.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[auto] w-[100%] flex-row items-center px-0 py-[50px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-0 h-[100%] w-[100%] overflow-hidden bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/800-20221007032056-iam-w-1.png)] bg-cover bg-scroll bg-center bg-repeat bg-origin-content p-0 opacity-100"></div>
          <div className="relative z-[1] w-[100%]">
            <div className=" mb-[30px] ">
              <div className="mx-auto mb-[1.5em] w-[100%] max-w-[1230px] px-[15px]">
                <h2 className="relative flex w-[100%] flex-row flex-wrap items-center justify-center">
                  <span className="m-[0_15px] text-center text-[30px] font-bold uppercase leading-[1.6] text-black">
                    Ứng dụng Thần số học <br />
                    thầy Louis Nguyễn nghiên cứu
                  </span>
                </h2>
              </div>
            </div>

            <div className="mx-[auto] flex w-[100%] max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-[100%] max-w-[50%] basis-[50%] p-[0_15px_30px]">
                <div className="relative ml-[auto] mr-0 w-[100%] bg-[50%_50%] bg-no-repeat">
                  <div className="relative m-[0_auto] flex w-[100%] bg-white">
                    <div className="relative m-[0_auto] h-auto w-[30%] max-w-[250px] basis-[250px] overflow-hidden p-[15px]">
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/bao-cao-20221007031024-mhudg.png"
                        className="m-[0_auto] inline-block h-auto w-[100%] max-w-[100%] overflow-clip opacity-100"
                      ></img>
                    </div>
                    <div className="h-[359px] w-[100%] bg-white p-[15px_15px_15px_0]">
                      <div className="text-left">
                        <div className="text-left text-black">
                          <h3 className="mb-[15px] w-[100%] text-lg leading-[1.2] md:text-[23px]">
                            Báo cáo thần số học trọn đời
                          </h3>
                          <ul className="mb-[1.3em] mt-0 list-none p-0 text-sm leading-[1.2] md:text-base">
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative pl-[15px] ">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                          </ul>
                        </div>
                        {/* btn */}
                        <Link
                          href="/than-so-hoc-tron-doi"
                          className="transition-transform-[transform_.3s,box-shadow_.3s,background-color_.3s,color_.3s,opacity_.3s] mb-[20px] mt-[1em] inline-flex min-h-[64px] items-center overflow-hidden rounded-[99px] bg-[#af3689] pl-[40px] pr-[25px] text-center text-[18px] leading-[1.6] shadow-[0_10px_20px_rgba(0,0,0,.19),_0_6px_6px_rgba(0,0,0,.22)]"
                        >
                          <span>Tìm hiểu thêm</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative m-0 w-[100%] max-w-[50%] basis-[50%] p-[0_15px_30px]">
                <div className="relative ml-0 mr-[auto] w-[100%] bg-[50%_50%] bg-no-repeat">
                  <div className="relative m-[0_auto] flex w-[100%] bg-white">
                    <div className="relative m-[0_auto] h-auto w-[30%] max-w-[250px] basis-[250px] overflow-hidden p-[15px]">
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/bao-cao-20221007031024-mhudg.png"
                        className="m-[0_auto] inline-block h-auto w-[100%] max-w-[100%] overflow-clip opacity-100"
                      ></img>
                    </div>
                    <div className="h-[359px] w-[100%] bg-white p-[15px_15px_15px_0]">
                      <div className="text-left">
                        <div className="text-left text-black">
                          <h3 className="mb-[15px] w-[100%] text-lg leading-[1.2] md:text-[23px]">
                            Báo cáo thần số học trọn đời
                          </h3>
                          <ul className="mb-[1.3em] mt-0 list-none p-0 text-[16px] leading-[1.2]">
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative pl-[15px] ">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                          </ul>
                        </div>
                        {/* btn */}
                        <Link
                          href="/than-so-hoc-tron-doi"
                          className="transition-transform-[transform_.3s,box-shadow_.3s,background-color_.3s,color_.3s,opacity_.3s] mb-[20px] mt-[1em] inline-flex min-h-[64px] items-center overflow-hidden rounded-[99px] bg-[#af3689] pl-[40px] pr-[25px] text-center text-[18px] leading-[1.6] shadow-[0_10px_20px_rgba(0,0,0,.19),_0_6px_6px_rgba(0,0,0,.22)]"
                        >
                          <span>Tìm hiểu thêm</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative m-0 w-[100%] max-w-[50%] basis-[50%] p-[0_15px_30px]">
                <div className="relative ml-0 mr-[auto] w-[100%] bg-[50%_50%] bg-no-repeat">
                  <div className="relative m-[0_auto] flex w-[100%] bg-white">
                    <div className="relative m-[0_auto] h-auto w-[30%] max-w-[250px] basis-[250px] overflow-hidden p-[15px]">
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/bao-cao-20221007031024-mhudg.png"
                        className="m-[0_auto] inline-block h-auto w-[100%] max-w-[100%] overflow-clip opacity-100"
                      ></img>
                    </div>
                    <div className="h-[359px] w-[100%] bg-white p-[15px_15px_15px_0]">
                      <div className="text-left">
                        <div className="text-left text-black">
                          <h3 className="mb-[15px] w-[100%] text-[23px] leading-[1.2]">
                            Báo cáo thần số học trọn đời
                          </h3>
                          <ul className="mb-[1.3em] mt-0 list-none p-0 text-[16px] leading-[1.2]">
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative pl-[15px] ">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                          </ul>
                        </div>
                        {/* btn */}
                        <Link
                          href="/than-so-hoc-tron-doi"
                          className="transition-transform-[transform_.3s,box-shadow_.3s,background-color_.3s,color_.3s,opacity_.3s] mb-[20px] mt-[1em] inline-flex min-h-[64px] items-center overflow-hidden rounded-[99px] bg-[#af3689] pl-[40px] pr-[25px] text-center text-[18px] leading-[1.6] shadow-[0_10px_20px_rgba(0,0,0,.19),_0_6px_6px_rgba(0,0,0,.22)]"
                        >
                          <span>Tìm hiểu thêm</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative m-0 w-[100%] max-w-[50%] basis-[50%] p-[0_15px_30px]">
                <div className="relative ml-0 mr-[auto] w-[100%] bg-[50%_50%] bg-no-repeat">
                  <div className="relative m-[0_auto] flex w-[100%] bg-white">
                    <div className="relative m-[0_auto] h-auto w-[30%] max-w-[250px] basis-[250px] overflow-hidden p-[15px]">
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/10/bao-cao-20221007031024-mhudg.png"
                        className="m-[0_auto] inline-block h-auto w-[100%] max-w-[100%] overflow-clip opacity-100"
                      ></img>
                    </div>
                    <div className="h-[359px] w-[100%] bg-white p-[15px_15px_15px_0]">
                      <div className="text-left">
                        <div className="text-left text-black">
                          <h3 className="mb-[15px] w-[100%] text-[23px] leading-[1.2]">
                            Báo cáo thần số học trọn đời
                          </h3>
                          <ul className="mb-[1.3em] mt-0 list-none p-0 text-[16px] leading-[1.2]">
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative mb-[16px] pl-[15px]">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                            <li className="relative pl-[15px] ">
                              Dự báo từng năm trong cuộc đời và các hướng phát
                              triển phù hợp
                            </li>
                          </ul>
                        </div>
                        {/* btn */}
                        <Link
                          href="/than-so-hoc-tron-doi"
                          className="transition-transform-[transform_.3s,box-shadow_.3s,background-color_.3s,color_.3s,opacity_.3s] mb-[20px] mt-[1em] inline-flex min-h-[64px] items-center overflow-hidden rounded-[99px] bg-[#af3689] pl-[40px] pr-[25px] text-center text-[18px] leading-[1.6] shadow-[0_10px_20px_rgba(0,0,0,.19),_0_6px_6px_rgba(0,0,0,.22)]"
                        >
                          <span>Tìm hiểu thêm</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <SignOutButton />
      </div> */}
    </main>
  )
}
