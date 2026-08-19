import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Navigation } from "swiper/modules";

export default function Section_3({ tourData, festivalData }) {
  const formatDate = (date) => {
    if (!date) return "";

    return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
  };

  console.log("festivalData:", festivalData);
  console.log("첫 번째 축제:", festivalData?.[0]);
  console.log("첫 번째 축제 detail:", festivalData?.[0]?.detail);
  return (
    <div className="py-[50px] w-full ">
      <h2 className="text-[30px] lg:text-[50px] font-bold mb-9 ">
        행사 / 축제
      </h2>

      <div className="relative w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          navigation={{
            prevEl: ".festival-prev",
            nextEl: ".festival-next",
          }}
          modules={[Navigation]}
        >
          {festivalData?.map((festival) => (
            <SwiperSlide key={festival.contentid} className="">
              <div className="w-[70%] xl:w-[1200px] m-auto border border-gray-800 rounded-2xl p-[30px] lg:p-[50px] flex flex-col lg:flex-row gap-[30px] lg:gap-[100px] m-auto">
                <div className="w-full lg:w-[40%] bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={festival.firstimage}
                    alt={festival.contentid}
                    className="h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                  <div className="mb-8 lg:mb-[80px] text-center lg:text-start">
                    <p className="text-[#2563EB]">
                      {festival.addr1?.split(" ")[0]}
                    </p>
                    <p className="text-2xl font-bold mt-2.5">
                      {festival.title}
                    </p>
                  </div>

                  <div className="mb-5 text-center lg:text-start">
                    <p className="text-xl font-bold mb-2.5">기간</p>
                    <p>
                      {formatDate(festival?.detail?.eventstartdate)}
                      {" ~ "}
                      {formatDate(festival?.detail?.eventenddate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2.5 text-center lg:text-start">
                      장소
                    </p>
                    <p>{festival.addr1}</p>
                  </div>

                  <Link to={`/festival/${festival.contentid}`}>
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
        <button className="festival-prev absolute left-[-20px] top-[45%] z-10">
          <IoIosArrowDropleftCircle
            color="white"
            size={80}
            className="drop-shadow-lg"
          />
        </button>

        {/* 오른쪽 버튼 */}
        <button className="festival-next absolute right-[-20px] top-[45%] z-10">
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
