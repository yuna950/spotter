import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Navigation } from "swiper/modules";

export default function Section_3({ tourData, festivalData }) {
  return (
    <div className="py-[50px]">
      <h2 className="text-[30px] lg:text-[50px] font-bold mb-9 ">
        행사 / 축제
      </h2>

      <div className="relative">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            prevEl: ".festival-prev",
            nextEl: ".festival-next",
          }}
          modules={[Navigation]}
        >
          {festivalData.map((festival) => (
            <SwiperSlide key={festival.contentid} className="">
              <div className="xl:w-[1000px] border border-gray-800 rounded-2xl p-[50px] flex gap-[100px] m-auto">
                <div className=" w-[40%] bg-gray-300 rounded-2xl overflow-hidden">
                  <img
                    src={festival.firstimage}
                    alt={festival.contentid}
                    className="h-full object-cover"
                  />
                </div>
                <div>
                  <div className="mb-[80px]">
                    <p className="text-[#2563EB]">
                      {festival.addr1?.split(" ")[0]}
                    </p>
                    <p className="text-2xl font-bold mt-2.5">
                      {festival.title}
                    </p>
                  </div>

                  <div className="mb-5">
                    <p className="text-xl font-bold mb-2.5">기간</p>
                    <p>0000</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2.5">장소</p>
                    <p>{festival.addr1}</p>
                  </div>

                  <Link to={`/festival/${festival.id}`}>
                    <div className="px-[20px] py-[10px] inline-grid text-[12px] lg:text-[16px] text-[#BDBDBD] border border-[#BDBDBD] rounded-4xl hover:text-[#2563EB] hover:border-[#2563EB] transition mt-[50px] cursor-pointer ">
                      자세히 보기 +
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 왼쪽 버튼 */}
        <button className="festival-prev absolute left-[-30px] top-[45%] z-10">
          <IoIosArrowDropleftCircle
            color="white"
            size={100}
            className="drop-shadow-lg"
          />
        </button>

        {/* 오른쪽 버튼 */}
        <button className="festival-next absolute right-[-30px] top-[45%] z-10">
          <IoIosArrowDroprightCircle
            color="white"
            size={100}
            className="drop-shadow-lg"
          />
        </button>
      </div>
    </div>
  );
}
