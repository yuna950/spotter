import Tag from "../../../components/Tag";
import { Link } from "react-router-dom";

export default function Hero({ spot, tour }) {
  return (
    <div className="max-w-[1920px] w-full flex justify-center text-white">
      <div className="w-[1770px] h-[70vh] bg-gray-400 rounded-2xl flex flex-col px-[200px] py-[80px] justify-between relative overflow-hidden">
        <div className="absolute bottom-[-30%] left-0 w-full blur-[1.5px]">
          <img
            src={tour.firstimage}
            alt={tour.title}
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="text-[24px] font-bold absolute top-20 left-[200px] z-2">
          오늘의 추천 SPOT✨
        </div>

        <div className="absolute bottom-20 left-[200px] z-2">
          <Tag name={spot.region} />
          <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-bold  ">
            {tour.title}
          </h2>
          <p className="w-[830px] text-[18px] text-white/60 mb-6">
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
