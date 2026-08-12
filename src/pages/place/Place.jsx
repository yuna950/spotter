import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { getAreaTour } from "../api/TourApi";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import { useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

export default function Place() {
  useScrollTop();
  const [loading, setLoading] = useState(true);
  const { regioncode } = useParams();
  const [tourData, setTourData] = useState([]);
  const [festivalData, setFestivalData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        console.log("현재 지역 코드:", regioncode);

        const tourResponse = await getAreaTour(regioncode);
        const tours = tourResponse?.response?.body?.items?.item || [];
        setTourData(tours);

        console.log("관광지:" + tourResponse);
        // 지역 관광지-----------------------------------

        const festivalResponse = await getAreaTour(regioncode, 15);
        const festivals = festivalResponse?.response?.body?.items?.item;
        setFestivalData(festivals);

        console.log("축제" + festivalData);
        // 축제 ------------------------------------------
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [regioncode]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  console.log(festivalData);
  return (
    <div>
      <div className="w-full h-[40vh] bg-gray-300 px-[20px] lg:px-[40px] xl:px-[250px] flex flex-col justify-end py-[80px]">
        <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-bold mb-3 text-white">
          지역
        </h2>
      </div>

      <div className="px-[20px] lg:px-[40px] xl:px-[250px]">
        <Section_2 data={tourData} />
        <Section_3 festivalData={festivalData} tourData={tourData} />
      </div>
    </div>
  );
}
