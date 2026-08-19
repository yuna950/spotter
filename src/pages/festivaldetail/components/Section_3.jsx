import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function Section_3({ data }) {
  return (
    <div>
      {data?.img && (
        <div className=" mt-[150px] relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation={{
              prevEl: ".festival-prev",
              nextEl: ".festival-next",
            }}
            modules={[Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data
              ?.filter((img) => !img?.imgname?.includes("포스터"))
              .map((img) => (
                <SwiperSlide>
                  <div className="aspect-[4/3] bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src={img.originimgurl}
                      alt={img.imgname}
                      className="object-cover h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <button className="festival-prev absolute left-[-30px] top-[45%] z-10">
            <IoIosArrowDropleftCircle
              color="white"
              size={50}
              className=" drop-shadow-md"
            />
          </button>

          <button className="festival-next absolute right-[-30px] top-[45%] z-10">
            <IoIosArrowDroprightCircle
              color="white"
              size={50}
              className="drop-shadow-md"
            />
          </button>
        </div>
      )}
      ;
    </div>
  );
}
