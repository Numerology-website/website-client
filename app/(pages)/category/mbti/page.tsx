import { redirect } from "next/navigation"

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#af368929] py-[10px]">
        <div className="container mx-auto flex w-[1230px] px-[15px]">
          <a href="" className="text-[#af3689] hover:text-black">
            Trang chủ
          </a>
          {" » "}
          MBTI
        </div>
      </div>
      <div className="bg-white py-[30px] ">
        <div className="container mx-auto flex w-[1230px] flex-col">
          <div className="px-[15px] pb-[30px]">
            <h3>
              <b></b>
              <span className="  after:border-b-1 text-[30px] font-bold after:contents after:grow after:border-solid after:border-black">
                MBTI
              </span>

              <b></b>
            </h3>
          </div>
        </div>
        <div className="container mx-auto flex w-[1230px] flex-col">
          <div className="px-[15px]">
            <div className="mb-6">
              <h2>
                <span className="  after:border-b-1 text-[25px] font-bold after:contents after:grow after:border-solid after:border-black">
                  Bài viết mới nhất
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex w-[1230px] flex-col">
          <div className="px-[15px] pb-[30px]">
            <div className="flex flex-wrap ">
              <div className="mb-5 px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  <a
                    href="https://tracuuthansohoc.com/istp/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/mbti-istp3.jpg"
                        alt="MBTI ISTP là gì?"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        MBTI ISTP: Nhóm tính cách độc lập, logic, lý trí và nhạy
                        bén trong công việc{" "}
                      </h3>
                      <p className="mb-[10px] text-sm">
                        Nhóm ISTP có xu hướng tư duy cá nhân và rất độc lập.
                        Nhóm tính...{" "}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-5 px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  {" "}
                  <a
                    href="https://tracuuthansohoc.com/mbti-isfj/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/mbti-isfj-7.jpg"
                        alt="MBTI ISFJ là gì?"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        MBTI ISFJ: Nhóm người trách nhiệm và quyết tâm trong
                        công việc
                      </h3>
                      <p className="mb-[10px] text-sm">
                        MBTI ISFJ là một trong 16 nhóm tính cách được xác định
                        dựa trên bài...
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-5 px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  {" "}
                  <a
                    href="https://tracuuthansohoc.com/tinh-cach-istj-trong-mbti/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/tinh-cach-istj-trong-mbti-3-1.jpg"
                        alt="Tính cách ISTJ trong MBTI là gì?"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        Nhóm tính cách ISTJ trong MBTI: Nhà tổ chức thiên bẩm
                        của cuộc sống
                      </h3>
                      <p className="mb-[10px] text-sm">
                        Nhóm tính cách ISTJ trong MBTI có xu hướng dè dặt nhưng
                        lý trí trong...
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-5  px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  {" "}
                  <a
                    href="https://tracuuthansohoc.com/isfp/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/ISFP-4-1.png"
                        alt="ISFP là gì?"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        ISFP: Nhóm tính cách của người đồng hành, người nghệ sĩ
                        trong MBTI
                      </h3>
                      <p className="mb-[10px] text-sm">
                        Nhóm ISFP trong MBTI là những người hướng nội mang vẻ
                        trầm lặng và bí...
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-5  px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  <a
                    href="https://tracuuthansohoc.com/tinh-cach-intj-trong-mbti/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/tinh-cach-intj-trong-mbti-1.jpg"
                        alt="thủ đoạn nhất"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        Nhóm tính cách INTJ trong MBTI: Độc lập, sáng tạo và
                        không ngừng học hỏi
                      </h3>
                      <p className="mb-[10px] text-sm">
                        Nhóm tính cách INTJ trong MBTI là những người giải quyết
                        vấn đề có tính...
                      </p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="mb-5 px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  <a
                    href="https://tracuuthansohoc.com/tinh-cach-enfp-trong-mbti/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/tinh-cach-enfp-trong-mbti.png"
                        alt="Tinh cách ENFP trong MBTI"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        Tính cách ENFP trong MBTI: Người dẫn dắt ước mơ, nhiệt
                        tình và sáng tạo
                      </h3>
                      <p className="mb-[10px] text-sm">
                        Nhóm tính cách ENFP trong MBTI tập trung vào khả năng và
                        sự nhiệt tình...
                      </p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="mb-5 px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  <a
                    href="https://tracuuthansohoc.com/tinh-cach-infj-trong-mbti/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/tinh-cach-infj-trong-mbti-7-1.jpg"
                        alt="Tính cách INFJ trong MBTI"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        Tính cách INFJ trong MBTI: Nhóm tính cách hiếm nhất của
                        MBTI
                      </h3>
                      <p className="mb-[10px] text-sm">
                        Nhóm tính cách INFJ trong MBTI là những người có khả
                        năng sáng tạo và...
                      </p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="mb-5 px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  <a
                    href="https://tracuuthansohoc.com/16-tinh-cach-mbti/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/16-tinh-cach-mbti-1.jpg"
                        alt="16 tính cách MBTI"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        16 tính cách MBTI: Đặc điểm và các lĩnh vực phát triển
                        phù hợp nhất
                      </h3>
                      <p className="mb-[10px] text-sm">
                        16 tính cách MBTI được phân chia dựa trên lý thuyết của
                        Carl Gustav Jung...
                      </p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="mb-5 px-[15px] pb-[30px]">
                <div className="h-[306px] w-[270px]">
                  <a
                    href="https://tracuuthansohoc.com/bai-trac-nghiem-tinh-cach-mbti/"
                    className="text-black no-underline"
                  >
                    <div>
                      <img
                        src="https://tracuuthansohoc.com/wp-content/uploads/2023/07/bai-trac-nghiem-tinh-cach-mbti.jpg"
                        alt="bai-trac-nghiem-tinh-cach-mbti"
                        className="h-[155px] w-[277px] "
                      />
                    </div>
                    <div className="pb-5 pt-[10px]">
                      <h3 className="text-[16px] font-bold ">
                        Bài trắc nghiệm tính cách MBTI: Công cụ hữu hiệu giúp
                        định vị bản thân
                      </h3>
                      <p className="mb-[10px] text-sm">
                        Bài trắc nghiệm tính cách MBTI là một trong những đánh
                        giá được sử dụng...
                      </p>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
