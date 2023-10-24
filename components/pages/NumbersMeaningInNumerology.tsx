"use client"
import Link from "next/link"
import { useState } from "react"

export default function NumbersMeaningInNumerology() {
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
                        Thần số học số 1 là hiện thân của sự táo bạo, đổi mới,
                        chấp nhận rủi ro, khả năng phục hồi và đi theo trái tim
                        mình. Nhân số học số 1 giúp phát triển sự sáng tạo và sự
                        tự tin của bạn trong mọi khía cạnh của cuộc sống. Mục
                        đích sống của những người có số chủ đạo 1 là mang tới
                        năng lượng sáng tạo tích cực, đạt được sự độc lập trong
                        các mối quan hệ của bản thân.
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
                        listShowNumberMeaning[2] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 2 là hiện thân cho sự kiên nhẫn, công
                          bằng, khả năng ngoại giao và một tấm lòng yêu thương,
                          nhân ái. Nhiệm vụ của số chủ đạo 2 là trở thành người
                          kết nối, hòa giải, đem tình yêu thương vào các mối
                          quan hệ trong mọi khía cạnh cuộc sống. Mục đích sống
                          của những người này là học được cách làm việc hài hòa,
                          cân bằng và tôn trọng lẫn nhau.
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
                        listShowNumberMeaning[3] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 3 là hiện thân của sự năng động, vui
                          tươi, khả năng cân bằng cảm xúc và truyền được nhiều
                          nguồn cảm hứng. Nhiệm vụ của những người mang số 3
                          trong Thần số học là người sử dụng cách diễn đạt sáng
                          tạo, phát triển khả năng kết nối, tình cảm lành mạnh
                          trong mọi khía cạnh của cuộc sống. Mục đích sống của
                          những người này là sử dụng cảm xúc, tài năng sáng tạo
                          của mình để nâng cao tinh thần và truyền cảm hứng tới
                          mọi người.
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
                        listShowNumberMeaning[4] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 4 là hiện thân cho những định hướng, sự
                          chia sẻ thực tế, làm việc chỉn chu. Nhiệm vụ của bạn
                          là tạo ra sự ổn định và an toàn khi cần hoàn thành một
                          điều gì đó mang giá trị lâu dài. Mục đích của những
                          người này là tạo nên sự bền vững trong quá trình hướng
                          tới mục tiêu cuộc đời. Việc mang lại sự an toàn cho
                          chính mình và mọi người là điều mà nhân số học số 4
                          khao khát mạnh mẽ.
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
                        listShowNumberMeaning[5] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 5 là hiện thân cho sự mạo hiểm, bản
                          tính thích phiêu lưu, không sợ hãi và muốn truyền tải
                          tới mọi người cách sống tự do. Nhiệm vụ của số 5 trong
                          thần số học là phát triển sự tự do theo thiên hướng
                          xây dựng, bạn vừa có kỷ luật vừa có mong muốn trải
                          nghiệm những điều tốt đẹp cuộc sống mang lại. Mục đích
                          cuộc sống của bạn là tìm thấy sự tự do bên trong những
                          quy tắc, luật lệ và trải nghiệm cuộc sống.
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
                        listShowNumberMeaning[6] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 6 là hiện thân cho trách nhiệm, không
                          phán xét, không chỉ trích những hành động và lựa chọn
                          của người khác, bạn có tầm nhìn xa và khả năng nhìn
                          thấy toàn cảnh trước mắt. Nhiệm vụ của thần số học số
                          6 là phát triển và trau dồi khả năng nhìn xa trông
                          rộng, cũng như học cách chấp nhận cuộc sống đa chiều.
                          Mục đích sống của nhân số học số 6 là dung hòa lý
                          tưởng cao đẹp với những thứ khiếm khuyết, không ngừng
                          bồi bổ thêm tình yêu thương trong mọi việc bạn đã,
                          đang và sẽ làm.
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
                        listShowNumberMeaning[7] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 7 là hiện thân của trực giác, trí tuệ,
                          không ngại mở lòng với người khác. Nhiệm vụ của thần
                          số học số 7 là phát triển niềm tin vào dòng chảy của
                          cuộc sống, mở ra sự phát triển và nhận thức cho các
                          giá trị cá nhân và tinh thần. Mục đích cuộc sống của
                          bạn là tin tưởng vào bản thân, vào quá trình bạn cảm
                          thấy an toàn để có thể mở lòng và chia sẻ trí tuệ bên
                          trong của mình ra thế giới.
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
                        listShowNumberMeaning[8] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 8 là hiện thân cho sự dư dả về tài
                          chính, sử dụng quyền lực khôn ngoan, luôn dành nhiều
                          thời gian, tiền bạc và sức ảnh hưởng của mình để làm
                          thế giới tốt đẹp hơn. Nhiệm vụ của số 8 trong nhân số
                          học là tạo ra sự dồi dào về vật chất. Mục đích cuộc
                          sống của bạn là sử dụng ảnh hưởng, quyền lực tài chính
                          của mình để tạo ra dấu ấn trên thế giới và giúp đỡ
                          những người khác.
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
                        listShowNumberMeaning[9] ? "block p-0" : "invisible h-0"
                      }
                    >
                      <div>
                        <p className="mb-[1.3em] mt-0">
                          Thần số học số 9 là hiện thân của người lắng nghe,
                          biết đồng cảm và cởi mở trong cuộc sống. Nhiệm vụ của
                          nhân số học số 9 là trở thành người chính trực trên
                          con đường theo đuổi sự sáng tạo và cống hiến. Mục đích
                          của bạn là sống với các tiêu chuẩn chính trực, sắp xếp
                          cuộc sống song song giữa trí tuệ và trái tim, truyền
                          cảm hứng cho mọi người.
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
                          Thần số học số 11 nhận được món quà thượng đế ban cho
                          bạn là trực giác rất phong phú. Bạn tốt bụng và bạn là
                          người giỏi gìn giữ hòa bình. Nhân số học số 11 có khả
                          năng phát hiện các xu hướng mới và vượt qua các ranh
                          giới cố hữu. Bạn cũng có thể bị lôi kéo và có khả năng
                          cực đoan. Bài học dành cho bạn là tính quyết đoán và
                          kiên trì, không từ bỏ ước mơ của mình.
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
                          22 là một trong bộ ba số quan trọng trong Nhân số học
                          (11, 22, 33). Theo đó, cả 3 số này được liên kết với
                          nhau và tạo thành “Tam giác của sự khai sáng” (theo
                          tiếng Anh là Triangle of Enlightenment). Mỗi con số
                          trên đều mang một biểu tượng lớn và nhiều ý nghĩa nhỏ
                          đặc thù. Những người mang vận mệnh thần số học số 22
                          thường có tham vọng lớn, khát khao phát triển cuộc
                          đời. Đặc biệt, họ luôn có tố chất, phong thái của nhà
                          lãnh đạo thông minh, tài ba.
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
  )
}
