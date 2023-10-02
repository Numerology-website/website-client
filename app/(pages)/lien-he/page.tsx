import { redirect } from "next/navigation";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-[1230px] px-[15px]">
          <a href="" className="text-[#af3689] hover:text-black">
            Trang chủ
          </a>
          {" » "}
          Liên hệ
        </div>
      </div>
      <div className="bg-white py-[30px] ">
        <div className="container mx-auto flex w-[1230px] flex-col">
          <div className="mb-6 px-[15px]">
            <h3 className="mb-[30px]  ">
              <b></b>
              <span className="  after:border-b-1 mr-5 text-[28px] font-semibold after:contents after:grow after:border-solid after:border-black">
                XIN CHÀO! CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?
              </span>

              <b></b>
            </h3>
          </div>

          <div className="flex flex-row">
            <div className="px-[15px] pb-[30px]">
              <div>
                <p className="mb-5 text-base">
                  <strong>TRỢ GIÚP VÀ HỖ TRỢ</strong>
                </p>
                <p className="mb-5">
                  Bạn có thắc mắc hay cần báo cáo vấn đề xảy ra với sản phẩm
                  hoặc dịch vụ của Tracuuthansohoc? Chúng tôi luôn sẵn sàng hỗ
                  trợ bạn.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="px-[15px] pb-[30px] ">
              <div className="w-[330px]">
                <h3 className="mr[15px] mb-[30px]">
                  <strong className="text-xl">Địa chỉ</strong>
                </h3>
                <p className="mb-5">71 Nguyễn Chí Thanh, Hà Nội</p>
              </div>
            </div>
            <div className="px-[15px] pb-[30px]">
              <div className="w-[330px]">
                <h3 className="mr[15px] mb-[30px]">
                  <strong className="text-xl">Zalo</strong>
                </h3>
                <p>
                  <a
                    type="button"
                    href="https://zalo.me/0962984269"
                    target="_blank"
                    className="mb-[14px] mr-[14px] rounded-lg border bg-[#af3689] px-[16.8px] py-2 text-white"
                  >
                    Chat với chúng tôi trên Zalo
                  </a>
                </p>
              </div>
            </div>
            <div className="px-[15px] pb-[30px]">
              <div className="w-[330px]">
                <h3 className="mr[15px] mb-[30px]">
                  <strong className="text-xl">Mail</strong>
                </h3>
                <p>
                  <a
                    href="mailto:Tracuuthansohoc@gmail.com"
                    className="text-[#af3689] hover:text-black"
                  >
                    Tracuuthansohoc@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
