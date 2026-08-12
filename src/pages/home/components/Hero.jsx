import Tag from "../../../components/Tag";
import { Link } from "react-router-dom";

export default function Hero({ spot, tour }) {
  return (
    <div className="max-w-[1920px] w-full flex justify-center text-white">
      <div
        className="w-[1770px] h-[70vh] bg-gray-400 rounded-2xl flex flex-col px-[200px] py-[80px] justify-between"
        style={{
          background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.00) 50%), url(${tour.firstimage}) no-repeat center/cover`,
        }}
      >
        <div className="text-[24px] font-bold ">오늘의 추천 SPOT✨</div>

        <div>
          <Tag name={spot.region} />
          <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-bold  ">
            {tour.title}
          </h2>
          <p className="w-[830px] text-[18px] text-white/60 ">
            {tour.overview?.slice(0, 80)}...
          </p>
          <Link to={`/Place/detail/${tour.contentid}`}>
            <p className="pt-5 pb-2 border-b border-white/60 text-white/60 w-[95px] hover:border-white hover:text-white cursor-pointer transition  ">
              자세히 보기 +
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
