import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Tag from "../../../components/Tag";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Section_3({ data }) {
  return (
    <div>
      {data.length > 0 && (
        <div className="py-[50px] mt-[50px]">
          <h2 className="text-[30px] lg:text-[50px] font-bold mb-9 ">
            근처 관광지
          </h2>
          <div className="relative">
            <Swiper
              slidesPerView={3.2}
              centeredSlides={true}
              navigation={{
                prevEl: ".festival-prev",
                nextEl: ".festival-next",
              }}
              modules={[Navigation]}
            >
              {data.map((place) => (
                <SwiperSlide key={place.contentid}>
                  <Link to={`place/${place.contentid}`}>
                    <div className="p-[30px] flex flex-col gap-4">
                      {/* 이미지 */}
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                        {place.firstimage ? (
                          <img
                            src={place.firstimage}
                            alt={place.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200" />
                        )}
                      </div>

                      {/* 태그 */}
                      <Tag
                        name={place.contenttypeid === "12" ? "관광지" : ""}
                      />

                      {/* 장소명 */}
                      <p className="text-xl font-bold">{place.title}</p>
                    </div>
                  </Link>
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
      )}
    </div>
  );
}
