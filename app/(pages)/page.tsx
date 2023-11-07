/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import ShareAboutNumerology from "@/components/pages/ShareAboutNumerology"
import { FormReadNumerology } from "@/components/xem/FormReadNumerology"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { NumbersMeaningInNumerology } from "@/components/pages/NumbersMeaningInNumerology"
import CarouselSharingFromIndivisuals from "@/components/blogs/CarouselSharingFromIndivisuals"
import CarouselNumerologyTrainningProgram from "@/components/blogs/CarouselNumerologyTrainningProgram"
import CarouselApplyOfNumerology from "@/components/blogs/CarouselApplyOfNumerology"

export default function Home() {
  return (
    <main className="box-border flex min-h-screen  flex-col justify-between ">
      <div className="">
        <section className="overflow-hidden bg-[url('/assets/images/861-20221007022759-jydbt-1-1536x689.png.webp')] bg-cover bg-[50%_50%] py-[40px]">
          <div className="relative w-full">
            <div className="mb-[30px] w-full md:mb-0">
              <div className="relative mx-auto flex w-full max-w-[1230px] flex-row flex-wrap ">
                <div className="mb-0 hidden w-full max-w-[33.33%] basis-[33.33%] px-[10px] md:block">
                  <div className="absolute bottom-[-40px] left-[50%] top-[-40px] ml-[-32%] w-full max-w-[1200px]"></div>
                  <div className="w-full">
                    <div className="  ">
                      <img
                        className="box-border h-[501px] w-[350px] opacity-100"
                        src="assets/images/e-nha-a-20221007021752-trrzz.png"
                        alt="e nha a 20221007021752 trrzz"
                      />
                    </div>
                  </div>
                </div>

                <div className=" relative m-0 flex w-full  max-w-full basis-full justify-center px-[0_9.8px_19.6px] pb-0 align-middle md:max-w-[66.67%] md:basis-[66.67%]">
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
                      <li className=" relative  flex pl-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="my-auto mr-3 h-6 w-6 text-[#e35cb0] md:h-8 md:w-8"
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
                          className="my-auto mr-3 h-4 w-4 text-[#e35cb0] md:h-8 md:w-8"
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
            <div className="mx-auto flex max-w-[1260px] flex-wrap">
              {[
                { number: "26.564.889", title: "Lượt tra cứu" },
                { number: "896.401", title: "Báo cáo xuất bản" },
                { number: "79.526", title: "Học viên qua các khóa học" },
              ].map((item, index) => (
                <div className="flex w-1/3 flex-col px-2" key={index}>
                  <div className="relative mx-auto flex min-h-[130px] w-full items-center justify-center bg-[#092C49] bg-cover bg-no-repeat p-[10px] shadow-[0_0_10px_0px_#572557]">
                    <div className=" text-center">
                      <span className="font-semibold text-[#e35cb0]">
                        {item.number}+
                      </span>

                      <p className="text-lg leading-[1.6] text-white md:text-[21px]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" mx-[auto] max-w-[1230px]">
              <div className="relative flex w-full max-w-full basis-full justify-center px-[15px] pb-[30px]">
                <div className="pt-[15px] text-center">
                  <Link
                    href="/xem"
                    target="_self"
                    type="button"
                    className="inline rounded-full border border-[#af3689] bg-[#af3689] px-3 py-1.5 text-white no-underline transition-[all_.6s_ease] hover:bg-[white] hover:text-[#af3689] md:px-10 md:py-5"
                  >
                    <span className="flex items-center justify-center text-sm font-semibold ">
                      TRA CỨU CÁC CHỈ SỐ CỦA BẠN NGAY
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative flex w-full max-w-full basis-full px-[15px] pb-[30px] md:hidden">
                <div className="relative mx-auto w-full bg-cover bg-[50%_50%] bg-no-repeat">
                  <div>
                    <div className="relative m-[0_auto] w-full max-w-[268px]">
                      <img
                        className="h-auto w-full max-w-full"
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/04/e-nha-a-20221007021752-trrzz.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full max-w-full basis-full px-[15px] pb-0 md:pb-[30px]">
                <div className="relative mx-auto w-full">
                  <p className="relative mb-5 text-center text-sm text-white">
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
          className=" relative flex min-h-[auto] w-full flex-row items-center px-0 pt-[80px] text-white"
        >
          <div className=" absolute bottom-0 left-0 right-0 top-0 m-0 h-full w-full bg-[url('https://tracuuthansohoc.com/wp-content/uploads/2022/10/650-20221007033516-af-dr-1.png')] bg-cover bg-[50%_50%] bg-no-repeat p-0 opacity-100"></div>
          <div className="relative mb-36 w-full">
            <div className="mb-[15px] md:mb-[30px]">
              <div className="mb-0 w-full md:mb-[40px]">
                <h2 className="relative flex w-full flex-row flex-wrap items-center justify-center text-center text-2xl font-bold uppercase md:text-4xl">
                  Công cụ xem Thần số học Online Louis Nguyễn
                </h2>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 mb-0 w-full max-w-full basis-full p-[0_15px_30px]">
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
          <div className="mx-[auto] flex h-auto w-full max-w-[1230px] flex-row flex-wrap">
            <div className="relative mt-[120px] basis-full px-[15px] pb-[30px] md:mt-[-120px]">
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
                  <div className="relative flex h-full w-full justify-center overflow-hidden">
                    <CarouselSharingFromIndivisuals />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <NumbersMeaningInNumerology /> */}

        <ShareAboutNumerology />

        <section className="relative flex w-full flex-row items-center bg-white p-[30px_0] py-[90px]">
          <div className="absolute left-0 right-0 top-0 m-0 h-full  bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/0-20221007110242-aesyt-1.png)] bg-cover  bg-[50%_50%] bg-no-repeat p-0 opacity-100"></div>
          <div className="relative z-[1] w-full">
            <div className="mx-[auto] flex w-full max-w-[1222.5px] flex-row flex-wrap">
              <div className="relative m-0 max-w-full basis-full p-[0_9.8px_19.6px] pb-0 md:max-w-[75%] md:basis-[75%] ">
                <div className="relative ml-[auto] mr-0 w-full bg-cover bg-no-repeat">
                  <div className="mx-[auto] mb-[1.5em] max-w-[1230px] px-0">
                    <h2 className="relative flex w-full  flex-row flex-wrap items-center justify-center">
                      <span className="m-[0_15px] text-center text-[35px] font-bold leading-[1.6]">
                        {" "}
                        BLOG TRA CỨU THẦN SỐ HỌC
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="relative m-[0_auto] mb-5 flex w-full flex-col bg-white md:flex-row">
                  <div className="relative m-[0_auto] h-auto w-full max-w-full p-[10px] md:max-w-[52%]">
                    <div className="relative h-[auto] bg-cover bg-[50%_50%]">
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2022/09/cach-tinh-than-so-hoc.jpg"
                        alt=""
                        className="bottom-0 left-0 right-0 top-0 h-full w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full max-w-full p-[10px] text-center md:max-w-[48%] md:text-left">
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
                  <div className="relative m-0 w-full max-w-full basis-full p-[0_9.8px_19.6px] md:max-w-[33.33%] md:basis-[33.33%]">
                    <div className="relative ml-[auto] mr-0 w-full bg-no-repeat">
                      <div className="relative m-[0_auto] flex w-full flex-row bg-white md:flex-col">
                        <div className="relative m-[0_auto] h-[auto] w-full max-w-[40%] overflow-hidden  p-[10px] md:max-w-full">
                          <img
                            className="m-[0_auto] inline-block h-[auto] w-full max-w-full align-middle"
                            src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/bang-chu-cai-than-so-hoc-1.jpg"
                            alt="Bảng Chữ Cái Thần Số Học Pitago Và Cách Quy Đổi Tên Ra Các Con Số"
                          />
                        </div>
                        <div className="relative h-[210px] w-full max-w-[60%] p-[0_10px_10px] text-left md:max-w-full">
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
                  <div className="relative m-0 w-full max-w-full basis-full p-[0_9.8px_19.6px] md:max-w-[33.33%] md:basis-[33.33%]">
                    <div className="relative ml-[auto] mr-0 w-full bg-no-repeat">
                      <div className="relative m-[0_auto] flex w-full flex-row bg-white md:flex-col">
                        <div className="relative m-[0_auto] h-[auto] w-full max-w-[40%] overflow-hidden  p-[10px] md:max-w-full">
                          <img
                            className="m-[0_auto] inline-block h-[auto] w-full max-w-full align-middle"
                            src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/bang-chu-cai-than-so-hoc-1.jpg"
                            alt="Bảng Chữ Cái Thần Số Học Pitago Và Cách Quy Đổi Tên Ra Các Con Số"
                          />
                        </div>
                        <div className="relative h-[210px] w-full max-w-[60%] p-[0_10px_10px] text-left md:max-w-full">
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
                  <div className="relative m-0 w-full max-w-full basis-full p-[0_9.8px_19.6px] md:max-w-[33.33%] md:basis-[33.33%]">
                    <div className="relative ml-[auto] mr-0 w-full bg-no-repeat">
                      <div className="relative m-[0_auto] flex w-full flex-row bg-white md:flex-col">
                        <div className="relative m-[0_auto] h-[auto] w-full max-w-[40%] overflow-hidden  p-[10px] md:max-w-full">
                          <img
                            className="m-[0_auto] inline-block h-[auto] w-full max-w-full align-middle"
                            src="https://tracuuthansohoc.com/wp-content/uploads/2022/08/bang-chu-cai-than-so-hoc-1.jpg"
                            alt="Bảng Chữ Cái Thần Số Học Pitago Và Cách Quy Đổi Tên Ra Các Con Số"
                          />
                        </div>
                        <div className="relative h-[210px] w-full max-w-[60%] p-[0_10px_10px] text-left md:max-w-full">
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
              <div className="relative m-0 mb-0 w-full max-w-full basis-full p-[0_9.8px_19.6px] pb-0  md:max-w-[25%] md:basis-[25%]">
                <div className="relative ml-0 mr-[auto] w-full bg-cover bg-[50%_50%] bg-no-repeat">
                  <div className="mb-0 ml-[-10px] mr-[-10px] flex w-[auto] max-w-[1222.5px] flex-row flex-wrap px-0">
                    <div className="relative m-0 mb-0  w-full max-w-full basis-full  p-[0_9.8px_19.6px] sm:max-w-[50%] sm:basis-[50%] md:max-w-full md:basis-full">
                      <div className="relative ml-0 mr-[auto] w-full bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-full">
                            <div className=" relative m-[0_auto] h-auto w-full max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="pt-full relative h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-full w-full max-w-full
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
                    <div className="relative m-0 mb-0  w-full max-w-full basis-full  p-[0_9.8px_19.6px] sm:max-w-[50%] sm:basis-[50%] md:max-w-full md:basis-full">
                      <div className="relative ml-0 mr-[auto] w-full bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-full">
                            <div className=" relative m-[0_auto] h-auto w-full max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="pt-full relative h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-full w-full max-w-full
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
                    <div className="relative m-0 mb-0  w-full max-w-full basis-full  p-[0_9.8px_19.6px] sm:max-w-[50%] sm:basis-[50%] md:max-w-full md:basis-full">
                      <div className="relative ml-0 mr-[auto] w-full bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-full">
                            <div className=" relative m-[0_auto] h-auto w-full max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="pt-full relative h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-full w-full max-w-full
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
                    <div className="relative m-0 mb-0  w-full max-w-full basis-full  p-[0_9.8px_19.6px] sm:max-w-[50%] sm:basis-[50%] md:max-w-full md:basis-full">
                      <div className="relative ml-0 mr-[auto] w-full bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-full">
                            <div className=" relative m-[0_auto] h-auto w-full max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="pt-full relative h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-full w-full max-w-full
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
                    <div className="relative m-0 mb-0  w-full max-w-full basis-full  p-[0_9.8px_19.6px] sm:max-w-[50%] sm:basis-[50%] md:max-w-full md:basis-full">
                      <div className="relative ml-0 mr-[auto] w-full bg-white bg-cover bg-[50%_50%] bg-no-repeat">
                        <Link
                          href="https://tracuuthansohoc.com/ten-bang/"
                          className="text-de bg-[#092035] no-underline transition-[color_.3s,opacity_.3s,transform_.3s]"
                        >
                          <div className="relative m-[0_auto] flex w-full">
                            <div className=" relative m-[0_auto] h-auto w-full max-w-[130px] overflow-hidden bg-[#092035] p-2">
                              <div className="pt-full relative h-auto overflow-hidden bg-cover bg-[50%_50%]">
                                <img
                                  className="absolute bottom-0 left-0 right-0 top-0 m-[0_auto] inline-block h-full w-full max-w-full
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
              <div className="relative m-0 mb-0 w-full max-w-full basis-full p-[0_9.8px_19.6px]">
                <div className="relative ml-0 mr-[auto] w-full bg-cover bg-[50%_50%] bg-no-repeat text-center">
                  <Link href="https://tracuuthansohoc.com/kien-thuc/"></Link>
                  <Link
                    href="https://tracuuthansohoc.com/kien-thuc/"
                    target="_self"
                    type="button"
                    className=" my-5 inline-flex min-h-[50px]  w-full max-w-[360px] flex-wrap justify-center rounded-[99px] border border-[#af3689] bg-[#af3689] px-[30px] pt-1 text-center text-[18px] leading-[1.6] text-[white] no-underline hover:bg-[white] hover:text-[#af3689]"
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

        <section className="relative flex min-h-[auto] w-full flex-row items-center overflow-hidden px-0 pb-[520px] pt-[26px]">
          <div className="absolute left-0 right-0 top-0 m-0 h-full w-full bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/1200-20221007025022-qfzm3-1.png)] bg-cover bg-scroll bg-center bg-repeat bg-origin-content p-0 opacity-100"></div>
          <div className="relative z-[1] w-full">
            <div className=" mx-[auto] flex w-full max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px] pb-0">
                <div className="relative ml-[auto] mr-0 w-full bg-cover bg-[50%_50%] bg-no-repeat">
                  <p className="mt-[-50px] text-[85px] leading-[1.6] tracking-normal text-[#061729] md:text-[150px]">
                    <strong>LOUIS NGUYỄN</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-[21] mx-[auto] flex w-full max-w-[1230px] flex-row flex-wrap">
              <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px]">
                <div className="relative ml-[auto] mr-0 w-full bg-cover bg-[50%_50%] bg-no-repeat">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-0 rounded-none border-[3px] border-[#ea5793] border-[1px_solid_#ececec]"></div>
                  <div className="mx-[-15px] flex w-[auto] max-w-[1230px] flex-row flex-wrap px-0">
                    <div className="relative my-auto  w-full max-w-full basis-full p-[0_15px_30px] pb-0 md:max-w-[58%] md:basis-[58%]">
                      <div className="relative ml-[auto] mr-0 w-full bg-cover bg-[50%_50%] bg-no-repeat p-[0px_15px_0px_45px] ">
                        <h2 className="mt-[15px] w-full">
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
                        <ul className="mb-[1.3em] ml-[30px] mt-0 list-disc p-0 pt-5 text-base text-white ">
                          <li className="relative mb-[15px] pl-2  ">
                            <strong>
                              CEO Tra cứu thần số học Louis Nguyễn – Nhà nghiên
                              cứu thần số học
                            </strong>
                          </li>
                          <li className="relative mb-[15px] pl-2  ">
                            <strong>
                              Nhà sáng lập hệ thống Tra cứu thần số học hàng đầu
                              Việt Nam
                            </strong>
                          </li>
                          <li className="relative mb-[15px] pl-2">
                            <strong>
                              Hơn 7 năm nghiên cứu và ứng dụng Nhân số học vào
                              đời sống
                            </strong>
                          </li>
                          <li className="relative mb-[15px] pl-2">
                            <strong>
                              Hơn 100 khóa đào tạo thần số học cho đại chúng
                              Việt Nam
                            </strong>
                          </li>
                          <li className="relative mb-[15px] pl-2 ">
                            <strong>
                              Cố vấn định hướng cho hơn 50 doanh nghiệp lớn nhỏ
                              trong kỷ nguyên chuyển đổi số
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative m-0 w-full max-w-full basis-full p-[0_15px_30px] pb-0 md:max-w-[42%] md:basis-[42%]">
                      <div className="relative ml-0 mr-[auto] w-full bg-cover bg-[50%_50%] bg-no-repeat">
                        <div className="relative z-[6] mx-auto mt-0 w-full max-w-[330px] md:mt-[-100px] md:max-w-none">
                          <div className=" relative overflow-hidden">
                            <img
                              className="inline-block h-auto w-full max-w-full opacity-100 transition-[opacity_1s]"
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
            <div className="absolute bottom-[-230px] z-[1] h-[302px] w-full">
              <div className="absolute h-full w-full">
                <div className="absolute m-[0_auto] h-full w-full bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_1.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className="absolute bottom-[-520px] z-[2] h-[595px] w-full">
              <div className="absolute h-full w-full">
                <div className="absolute m-[0_auto] h-full w-full bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_2.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className=" absolute bottom-[-410px] right-0 z-[4] h-[278px] w-[452px]">
              <div className="absolute h-full w-full">
                <div className="absolute m-[0_auto] h-full w-full bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_3.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className="absolute bottom-[-310px] z-[4] h-[163px] w-[370px]">
              <div className=" absolute h-full w-full">
                <div className="absolute m-[0_auto] h-full w-full bg-[url('https://tracuuthansohoc.com/wp-content/themes/devvn-child/images/research_bg_4.png')] bg-cover bg-scroll bg-left-top bg-no-repeat bg-origin-content"></div>
              </div>
            </div>
            <div className="absolute bottom-[-440px]"></div>
          </div>
        </section>

        <section className="relative flex h-auto w-full flex-row items-center overflow-hidden bg-white bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/750-20221007030937-wtq5h.png)] bg-cover bg-scroll bg-center bg-repeat p-[30px_0] pb-[70px]  pt-0">
          <div className="relative z-[1] w-full">
            <div className=" px-15px mx-[auto] mb-[1.5em]  max-w-[1230px]">
              <h2 className="relative mt-0 flex w-full flex-row flex-wrap items-center justify-center text-[black]">
                <span className="m-[0_15px] text-center text-[30px] font-bold uppercase leading-[1.6] md:text-[35px]">
                  CHƯƠNG TRÌNH ĐÀO TẠO THần SỐ Học <br />
                  DO THẦY LOUIS NGUYỄN TRỰC TIẾP ĐỨNG LỚP
                </span>
              </h2>
            </div>
            <div className=" mx-[auto] flex w-full max-w-[1230px] flex-row flex-wrap">
              <div className="relative  w-full max-w-full basis-full p-[0_15px_30px] pb-0">
                <div className="relative h-[587px]  overflow-hidden">
                  <div className="absolute flex h-full w-full flex-row">
                    <CarouselNumerologyTrainningProgram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[auto] w-full flex-row items-center px-0 py-[50px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-0 h-full w-full overflow-hidden bg-[url(https://tracuuthansohoc.com/wp-content/uploads/2022/10/800-20221007032056-iam-w-1.png)] bg-cover bg-scroll bg-center bg-repeat bg-origin-content p-0 opacity-100"></div>
          <div className="relative z-[1] w-full">
            <div className=" mb-[30px] ">
              <div className="mx-auto mb-[1.5em] w-full max-w-[1230px] px-[15px]">
                <h2 className="relative flex w-full flex-row flex-wrap items-center justify-center">
                  <span className="m-[0_15px] text-center text-[30px] font-bold uppercase leading-[1.6] text-black">
                    Ứng dụng Thần số học <br />
                    thầy Louis Nguyễn nghiên cứu
                  </span>
                </h2>
              </div>
            </div>
            <div className="relative">
              <CarouselApplyOfNumerology />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
