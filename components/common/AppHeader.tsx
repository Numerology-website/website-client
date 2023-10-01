const AppHeader = () => {
  return (
    <>
      <div className="sticky top-0 bg-white ">
        <div className="container mx-auto flex h-[63px] w-[1230px] justify-between px-[15px] ">
          <div className="my-auto flex lg:flex-1">
            <a href="#" className="">
              <img
                className="w-[148px] "
                src="https://tracuuthansohoc.com/wp-content/uploads/2023/02/logo-color-min.png"
                alt=""
              />
            </a>
          </div>
          {/* Mobile Right Elements */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              // onClick={() => setMobileMenuOpen(true)}
            >
              <div className="show-for-medium flex-right flex-col">
                <ul className="mobile-nav nav nav-right ">
                  <li className="nav-icon has-icon">
                    <a
                      href="#"
                      data-open="#main-menu"
                      data-pos="right"
                      data-bg="main-menu-overlay"
                      data-color=""
                      className="is-small"
                      aria-label="Menu"
                      aria-controls="main-menu"
                      aria-expanded="false"
                    >
                      <i className="icon-menu"></i>
                      <span className="menu-title hide-for-small uppercase">
                        Menu
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
          {/* Mobile Right Elements */}
          <div id="main-menu" className="flex lg:hidden">
            <div className="sidebar-menu no-scrollbar ">
              <ul
                className="nav nav-sidebar nav-vertical nav-uppercase"
                data-tab="1"
              >
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-791 current_page_item menu-item-793">
                  <a
                    href="index-3.htm"
                    aria-current="page"
                    data-wpel-link="internal"
                  >
                    Trang Chủ
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6082">
                  <a href="ve-chung-toi/index-1.htm" data-wpel-link="internal">
                    Giới thiệu
                  </a>
                  <ul className="sub-menu nav-sidebar-ul children">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6083">
                      <a href="lien-he/index-1.htm" data-wpel-link="internal">
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-980">
                  <a
                    href="index-4.htm"
                    data-wpel-link="external"
                    rel="nofollow"
                  >
                    Tra Cứu
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12738">
                  <a
                    href="purchase.html"
                    data-wpel-link="external"
                    rel="nofollow"
                  >
                    Mua vip
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1398">
                  <a>Dịch vụ</a>
                  <ul className="sub-menu nav-sidebar-ul children">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4520">
                      <a
                        href="thansohoctrondoi/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Thần số học trọn đời
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4091">
                      <a href="danhxung/index-1.htm" data-wpel-link="internal">
                        Đặt tên danh xưng
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4090">
                      <a
                        href="tenkhaisinh/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Đặt Tên Khai Sinh
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6525">
                      <a
                        href="nghenghiep/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Báo cáo định hướng nghề nghiệp
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4314">
                      <a
                        href="khoahocthansohoc/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Đào tạo thần số học
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7219">
                      <a
                        href="dattenthuonghieu/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Đặt tên thương hiệu
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4092">
                      <a href="coaching/index-1.htm" data-wpel-link="internal">
                        Coaching 1-1 với chuyên gia
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6516">
                      <a
                        href="canbangnangluong/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Khóa học: Cân bằng năng lượng
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1935">
                  <a href="affiliate/index-1.htm" data-wpel-link="internal">
                    Affiliate
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1868">
                  <a href="kien-thuc/index-1.htm" data-wpel-link="internal">
                    Kiến thức
                  </a>
                  <ul className="sub-menu nav-sidebar-ul children">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4268">
                      <a
                        href="boi-tinh-yeu/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Bói Tình Yêu
                      </a>
                      <ul className="sub-menu nav-sidebar-ul">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11346">
                          <a
                            href="boi-tinh-yeu-theo-cung/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Bói Tình Yêu Theo Cung Hoàng Đạo
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-13447">
                          <a
                            href="boi-tu-vi-tinh-yeu/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Bói Tử Vi Tình Yêu
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-13448">
                          <a
                            href="boi-duong-tinh-duyen/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Bói Đường Tình Duyên
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-13449">
                          <a
                            href="boi-bai-tarot-tinh-yeu/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Bói Bài Tarot Tình Yêu
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-13450">
                          <a
                            href="boi-tinh-yeu-bang-bai-52-la/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Bói Tình Yêu Bằng Bài 52 Lá
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-13451">
                          <a
                            href="boi-tinh-yeu-bang-ten-tren-giay/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Bói Tình Yêu Bằng Tên Trên Giấy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-9844">
                      <a
                        href="category/cung-hoang-dao/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Cung Hoàng Đạo
                      </a>
                      <ul className="sub-menu nav-sidebar-ul">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11598">
                          <a
                            href="12-cung-hoang-dao/index-1.htm"
                            data-wpel-link="internal"
                          >
                            12 cung hoàng đạo
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4269">
                      <a
                        href="xem-y-nghia-ten/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Xem Ý Nghĩa Tên
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2660">
                      <a
                        href="y-nghia-cac-con-so/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Ý nghĩa các con số
                      </a>
                      <ul className="sub-menu nav-sidebar-ul">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1205">
                          <a
                            href="than-so-hoc-so-1/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 1
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1207">
                          <a
                            href="than-so-hoc-so-2/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 2
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1208">
                          <a
                            href="than-so-hoc-so-3/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 3
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1209">
                          <a
                            href="than-so-hoc-so-4/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 4
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1210">
                          <a
                            href="than-so-hoc-so-5/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 5
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1211">
                          <a
                            href="than-so-hoc-so-6/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 6
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1212">
                          <a
                            href="than-so-hoc-so-7/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 7
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1213">
                          <a
                            href="than-so-hoc-so-8/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 8
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1214">
                          <a
                            href="than-so-hoc-so-9/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 9
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3057">
                          <a
                            href="than-so-hoc-so-10/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 10
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1796">
                          <a
                            href="y-nghia-than-so-hoc-so-11/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 11
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3056">
                          <a
                            href="than-so-hoc-22/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Thần số học số 22
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-12751">
                      <a
                        href="category/dat-ten/index-1.htm"
                        data-wpel-link="internal"
                      >
                        Đặt tên
                      </a>
                      <ul className="sub-menu nav-sidebar-ul">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2220">
                          <a
                            href="dat-ten-con-trai/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Đặt tên con trai
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2221">
                          <a
                            href="ten-con-gai/index-1.htm"
                            data-wpel-link="internal"
                          >
                            Đặt tên con gái
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13445">
                      <a
                        href="category/disc/index-1.htm"
                        data-wpel-link="internal"
                      >
                        DISC
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13661">
                      <a
                        href="category/mbti/index-1.htm"
                        data-wpel-link="internal"
                      >
                        MBTI
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7855">
                  <a href="login.html" data-wpel-link="external" rel="nofollow">
                    Đăng nhập
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-auto hidden text-base font-semibold text-black lg:flex lg:gap-x-12">
            <ul className="justify-start">
              <li className="mr-[35px] inline-block ">
                <a href="">Home</a>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Giới thiệu</a>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Tra cứu</a>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px]">
                      <a
                        className="  mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        Tra cứu thần số học
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        Thần số học cho con
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px]  hover:text-fuchsia-800"
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Tra cứu DISC
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Dịch vụ</a>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Thần số học trọn đời
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt tên danh xưng
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt Tên Khai Sinh
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Báo cáo định hướng nghề nghiệp
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đào tạo thần số học
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt tên thương hiệu
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Coaching 1-1 với chuyên gia
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Khóa học: Cân bằng năng lượng
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <a className="mr-1">Blog</a>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white pt-1 group-hover:block">
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Kiến thức thần số học
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        DISC
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Cung hoàng đạo
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Đặt tên
                      </a>
                    </li>
                    <li className="w-[260px]">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Bói tình yêu
                      </a>
                    </li>
                    <li className="w-[260px] ">
                      <a
                        className=" mx-[10px] block border-b px-[5px] py-[15px] hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        Ý nghĩa các con số
                      </a>
                    </li>
                    <li className="w-[260px]  ">
                      <a
                        className=" mx-[10px] block px-[5px] py-[15px]  hover:text-fuchsia-800 "
                        href="lien-he/index-1.htm"
                      >
                        {" "}
                        MBTI
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mr-[35px] inline-block">
                <a href="">Affiliate</a>
              </li>
              <li className="mr-[35px] inline-block">
                <a href="">Đăng nhập</a>
              </li>
              <li className="inline-block">
                <div className="group relative inline-block">
                  <button className="  inline-flex items-center rounded font-semibold">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                  <ul className="absolute hidden border bg-white p-5 group-hover:block">
                    <li className="w-[260px]">
                      <div className="m-auto">
                        <div className="searchform-wrapper ux-search-box is-normal relative">
                          <form
                            method="get"
                            className="searchform"
                            action="https://beta.tracuuthansohoc.com/"
                            role="search"
                          >
                            <div className="relative flex-row">
                              <div className="flex-grow flex-col">
                                <input
                                  type="search"
                                  className="search-field mb-0"
                                  name="s"
                                  defaultValue=""
                                  id="s"
                                  placeholder="Search&hellip;"
                                />
                              </div>
                              <div className="flex-col">
                                <button
                                  type="submit"
                                  className="ux-search-submit submit-button secondary button icon mb-0"
                                  aria-label="Submit"
                                >
                                  <i className="icon-search"></i>{" "}
                                </button>
                              </div>
                            </div>
                            <div className="live-search-results z-top text-left"></div>
                          </form>
                        </div>{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppHeader
