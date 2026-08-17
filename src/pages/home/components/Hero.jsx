import Tag from "../../../components/Tag";
import { Link } from "react-router-dom";

export default function Hero({ spot, tour }) {
  return (
    <div className="max-w-[1920px] w-full flex justify-center text-white">
      <div className="w-[95%] xl:w-[1770px] h-[40vh] lg:h-[50vh] xl:h-[70vh] bg-gray-400 rounded-2xl flex flex-col px-[200px] py-[80px] justify-between relative overflow-hidden">
        <div className="absolute top-0 xl:bottom-[-30%] left-0 h-full w-full blur-[1.5px]">
          <img
            src={tour.firstimage}
            alt={tour.title}
            className="object-cover h-full "
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="text-lg lg:text-xl  xl:text-2xl font-bold absolute top-5 lg:top-[40px] xl:top-20 left-[20px] lg:left-[40px] xl:left-[200px] z-2">
          오늘의 추천 SPOT✨
        </div>

        <div className="absolute bottom-5 lg:bottom-[40px] xl:bottom-20 left-[20px] lg:left-[40px] xl:left-[200px] z-2">
          <Tag name={spot.region} />
          <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-bold  ">
            {tour.title}
          </h2>
          <p className="w-[70%] xl:w-[830px] text-sm lg:text-[18px] text-white/60 mb-6">
            {tour.overview?.slice(0, 80)}...
          </p>
          <p className="px-[20px] py-[10px] inline-grid text-[12px] lg:text-[18px] text-[#BDBDBD]/60 border border-[#BDBDBD]/60 rounded-4xl hover:text-[#BDBDBD] hover:border-[#BDBDBD] transition cursor-pointer">
            <Link to={`/Place/detail/${tour.contentid}`}>자세히 보기 +</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
