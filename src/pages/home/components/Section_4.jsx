import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Tag from "../../../components/Tag";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Navigation } from "swiper/modules";
import { NO_IMG } from "../../../constant/imgUrl";

export default function Section_4({ data }) {
  return (
    <div className="py-[100px]">
      <div className="flex justify-between items-end">
        <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] font-bold  ">
          전국 축제 / 행사🎊
        </h2>

        <Link to={"/festival"}>
          <div className="px-[20px] py-[10px] inline-grid text-[12px] lg:text-[18px] text-[#BDBDBD] border border-[#BDBDBD] rounded-4xl hover:text-[#2563EB] hover:border-[#2563EB] transition">
            더보기 +
          </div>
        </Link>
      </div>

      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            prevEl: ".festival-prev",
            nextEl: ".festival-next",
          }}
          modules={[Navigation]}
        >
          {data.map((festival) => (
            <SwiperSlide key={festival.contentid} className="cursor-pointer">
              <Link to={`/festival/${festival.contentid}`}>
                <div className="aspect-[3/4] overflow-hidden bg-[#dddddd] rounded-xl mt-[50px] mb-[15px] relative">
                  {festival.firstimage ? (
                    <img
                      src={festival.firstimage}
                      alt={festival.title}
                      className="w-full h-full object-cover absolute top-0 left-0 hover:scale-105 transition"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <img src={NO_IMG} alt="no_img" className="w-[100%]" />
                    </div>
                  )}

                  <div className="absolute top-3 left-3">
                    <Tag name={festival.addr1?.split(" ")[0]} />
                  </div>
                </div>

                <p className="text-xl font-semibold mt-1 ">{festival.title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 왼쪽 버튼 */}
        <button className="festival-prev absolute left-[-30px] top-[45%] z-10">
          <IoIosArrowDropleftCircle
            color="white"
            size={50}
            className=" drop-shadow-md"
          />
        </button>

        {/* 오른쪽 버튼 */}
        <button className="festival-next absolute right-[-30px] top-[45%] z-10">
          <IoIosArrowDroprightCircle
            color="white"
            size={50}
            className="drop-shadow-md"
          />
        </button>
      </div>
    </div>
  );
}
