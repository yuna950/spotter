import { useEffect, useState } from "react";
import Tag from "../../../components/Tag";
import { getTourDetail } from "../../api/TourApi";
import { Link } from "react-router-dom";

const heroSpots = [
  { region: "부산", contentId: "126078" },
  { region: "제주", contentId: "590415" },
  { region: "순천", contentId: "3076316" },
  { region: "여수", contentId: "127547" },
];

export default function Hero() {
  const [heroSpot] = useState(() => {
    const randomIndex = Math.floor(Math.random() * heroSpots.length);

    return heroSpots[randomIndex];
  });

  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getTourDetail(heroSpot.contentId);

        const item = data.response.body.items.item[0];
        console.log(item);

        setTour(item);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHero();
  }, [heroSpot.contentId]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  console.log(tour);

  return (
    <div className="max-w-[1920px] w-full flex justify-center text-white">
      <div
        className="w-[98%] h-[70vh] bg-gray-400 rounded-2xl flex flex-col px-[230px] py-[100px] justify-between"
        style={{
          background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.00) 50%), url(${tour.firstimage}) no-repeat center/cover`,
        }}
      >
        <div className="text-[25px] font-bold ">오늘의 추천 SPOT✨</div>

        <div>
          <Tag name={heroSpot.region} />
          <h2 className="text-[30px] lg:text-[50px] xl:text-[70px] font-bold  ">
            {tour.title}
          </h2>
          <p className="w-[830px] text-[20px] text-white/60 ">
            {tour.overview?.slice(0, 80)}...
          </p>
          <Link to={`/PlaceDetail/${tour.contentid}`}>
            <p className="pt-5 pb-2 border-b border-white/60 text-white/60 w-[95px] hover:vorder-white hover:text-white cursor-pointer transition  ">
              자세히 보기 +
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
