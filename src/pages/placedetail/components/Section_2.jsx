import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function Section_2({ tour, festival }) {
  const formatDate = (date) => {
    if (!date) return "";

    return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
  };
  return (
    <div className="py-[50px] mt-[50px]">
      <h2 className="text-[25px] lg:text-[35px] xl:text-[45px]  font-bold mb-9 ">
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
          {festival.map((data) => (
            <SwiperSlide key={data.contentid}>
              <div className="xl:w-[800px] border border-gray-800 rounded-2xl p-[50px] flex flex-col lg:flex-row gap-[30px] lg:gap-[100px] m-auto">
                <div className=" aspect-[3/4] w-full lg:w-[40%]  bg-gray-300 rounded-2xl overflow-hidden">
                  <img
                    src={data.firstimage}
                    alt={data.contentid}
                    className="h-full object-cover"
                  />
                </div>
                <div className="text-center lg:text-start">
                  <div className=" mb-[50px]">
                    <p className="text-[#2563EB]">
                      {data.addr1?.split(" ")[0]}
                    </p>
                    <p className="text-[23px] lg:text-[33px] xl:text-[43px]  font-bold mt-2.5">
                      {data.title}
                    </p>
                  </div>

                  <div className="mb-5">
                    <p className="text-xl font-bold mb-2.5">기간</p>
                    <p>
                      {formatDate(data.detail?.eventstartdate)}
                      {" ~ "}
                      {formatDate(data.detail?.eventenddate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2.5">장소</p>
                    <p>{data.detail?.eventplace}</p>
                  </div>

                  <Link to={`/festival/${data.contentid}`}>
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
            size={80}
            className="drop-shadow-lg"
          />
        </button>

        {/* 오른쪽 버튼 */}
        <button className="festival-next absolute right-[-30px] top-[45%] z-10">
          <IoIosArrowDroprightCircle
            color="white"
            size={80}
            className="drop-shadow-lg"
          />
        </button>
      </div>
    </div>
  );
}
