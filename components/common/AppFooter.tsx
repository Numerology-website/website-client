import Link from "next/link"
import { BiLogoTiktok } from "react-icons/bi"
import { AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { LiaPinterest } from "react-icons/lia"
import { IoLogoTwitch } from "react-icons/io"
function AppFooter() {
  return (
    <>
      <div className="bg-[#15143e] bg-[url('https://tracuuthansohoc.com/wp-content/uploads/2022/10/footer-bg.png')] bg-center bg-no-repeat pb-[20px]  pt-[55px]">
        <div className="mx-auto mb-0 flex w-[100%] max-w-[1230px] flex-col flex-wrap text-white md:flex-row">
          <div className="relative mb-6 w-[100%] max-w-[33.33%] basis-[33.33%] p-[0_15px_30px] pb-0">
            <Link href="/" className="mb-[30px] max-w-[300px]">
              <img
                className="mb-8 w-[300px]"
                src="https://tracuuthansohoc.com/wp-content/uploads/2021/04/logo-text.png"
                alt=""
              />
            </Link>

            <div className="mt-7">
              <div className="border-l-2 border-fuchsia-700">
                <div className="ml-8 italic">
                  <Link href="https://www.facebook.com/tracuuthansohoc/">
                    Tra Cứu Thần Số Học Louis Nguyễn
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[25px] text-white">
              <div className="flex w-[100%] max-w-[100%] px-0 text-left">
                <Link
                  className="mx-[0.12em] flex h-[1.8em] w-[1.8em] justify-center rounded-[999px] border-2 border-white px-0 pt-[0.2em] hover:border-none hover:bg-black"
                  target="_blank"
                  type="button"
                  href="https://www.tiktok.com/@tracuuthansohoc"
                >
                  <BiLogoTiktok />
                </Link>
                <Link
                  className="mx-[0.12em] flex h-[1.8em] w-[1.8em] justify-center rounded-[999px] border-2 border-white px-0 pt-[0.2em] hover:border-none hover:bg-[#0693e3]"
                  target="_blank"
                  type="button"
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FthansohocPitago"
                >
                  <AiOutlineTwitter />
                </Link>
                <Link
                  className="mx-[0.12em] flex h-[1.8em] w-[1.8em] justify-center rounded-[999px] border-2 border-white px-0 pt-[0.2em] hover:border-none hover:bg-red-600"
                  target="_blank"
                  type="button"
                  href="https://www.pinterest.com/tracuuthansohoc/"
                >
                  <LiaPinterest />
                </Link>
                <Link
                  className="mx-[0.12em] flex h-[1.8em] w-[1.8em] justify-center rounded-[999px] border-2 border-white px-0 pt-[0.2em] hover:border-none hover:bg-[#0693e3]"
                  target="_blank"
                  type="button"
                  href="https://www.linkedin.com/showcase/tracuuthansohocofficial"
                >
                  <AiFillLinkedin />
                </Link>
                <Link
                  className="mx-[0.12em] flex h-[1.8em] w-[1.8em] justify-center rounded-[999px] border-2 border-white px-0 pt-[0.2em] hover:border-none hover:bg-red-600"
                  target="_blank"
                  type="button"
                  href="https://www.youtube.com/channel/UCuTD16Y8UfPDKGr0OPgcmAA"
                >
                  <AiFillYoutube />
                </Link>
                <Link
                  className="mx-[0.12em] flex h-[1.8em] w-[1.8em] justify-center rounded-[999px] border-2 border-white px-0 pt-[0.2em] hover:border-none hover:bg-[#9b51e0]"
                  target="_blank"
                  type="button"
                  href="https://www.twitch.tv/tracuuthansohoc"
                >
                  <IoLogoTwitch />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mb-6 w-[100%] max-w-[33.33%] basis-[33.33%] p-[0_15px_30px] pb-0">
            <div className="mb-5">
              <span className="text-lg font-semibold">Thông tin chung</span>
            </div>

            <div className="text-sm">
              <ul className="list-none">
                <li className="mb-2">
                  <a href="chinh-sach-bao-mat/index-1.htm">
                    Chính sách bảo mật
                  </a>
                </li>
                <li className="mb-2">
                  <a href="dieu-khoan-su-dung/index-1.htm">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li className="mb-2">
                  <a href="kien-thuc/index-1.htm">Kiến thức</a>
                </li>
                <li className="mb-2">
                  <a href="lien-he/index-1.htm"> Liên hệ</a>
                </li>
                <li className="mb-2">
                  <a href="affiliate/index-1.htm">Chương trình Affiliate</a>
                </li>
                <li className="mb-2">
                  <a href="ve-chung-toi/index-1.htm"> Về chúng tôi</a>
                </li>
              </ul>
              <p className="mb-[18px] inline-block">
                Công cụ được tùy chỉnh theo ngày sinh và tên chính xác của bạn …
                Vì vậy, hãy lưu ý: thông tin bạn sắp nhận được có thể khiến bạn
                bị sốc.
              </p>
              <p className="mb-[18px]">Đội ngũ admin</p>
            </div>
          </div>
          <div className="relative mb-6 w-[100%] max-w-[33.33%] basis-[33.33%] p-[0_15px_30px] pb-0">
            <div className="mb-5">
              <span className="text-lg font-semibold">
                Liên hệ với chúng tôi
              </span>
            </div>

            <div className="text-sm">
              <ul>
                <li className="mb-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59587.94068932117!2d105.80753!3d21.022829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab186f28ab19%3A0x22986499af86a3b1!2zVsSDbiBQaMOybmcgVHJhIEPhu6l1IFRo4bqnbiBT4buRIEjhu41jIChUcmFjdXV0aGFuc29ob2MuY29tKSBMb3VpcyBOZ3V5ZW4!5e0!3m2!1svi!2sus!4v1695830951361!5m2!1svi!2sus"
                    width="380"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </li>
                <li className="mb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Địa chỉ: 71 Nguyễn Chí Thanh, Hà Nội
                </li>
                <li className="mb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Điện thoại: 0962.984.269
                </li>
                <li className="mb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Liên hệ hợp tác:
                  <Link href="mailto:tracuuthansohoc@gmail.com"></Link>
                  tracuuthansohoc@gmail.com
                </li>
              </ul>
              <p className="mb-4">
                “Chưa ở đâu có trang web như tracuuthansohoc. Trang web sử dụng
                phần mềm tính toán quá phức tạp, quá hay. Thông tin cực kì chi
                tiết!”
              </p>
              <p className="italic">– Một vị khách hàng đã tra cứu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-700 py-[15px] text-white">
        <div className="container mx-auto flex w-[1230px] ">
          <div className="text-xs">
            © 2023 Tracuuthansohoc.com | All rights reserved.| DMCA protected.{" "}
          </div>
        </div>
      </div>
    </>
  )
}

export default AppFooter
