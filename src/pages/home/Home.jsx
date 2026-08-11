import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";
import { getAreaTour, getFestival, getTourDetail } from "../api/TourApi";
import Loading from "../../components/Loading";

const heroSpots = [
  { region: "부산", contentId: "126078" },
  { region: "제주", contentId: "590415" },
  { region: "순천", contentId: "3076316" },
  { region: "여수", contentId: "127547" },
];

const regions = [
  { name: "서울", code: "11" },
  { name: "부산", code: "26" },
  { name: "강릉", code: "51" },
  { name: "제주", code: "50" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [areaData, setAreaData] = useState();
  const [tourData, setTour] = useState(null);
  const [festivalData, setFestivalData] = useState([]);
  const [heroSpot] = useState(() => {
    const randomIndex = Math.floor(Math.random() * heroSpots.length);

    return heroSpots[randomIndex];
  });

  useEffect(() => {
    (async () => {
      try {
        const tourData = await getTourDetail(heroSpot.contentId);

        const item = tourData.response.body.items.item[0];
        // console.log(item);

        setTour(item);
        console.log(tourData);

        // hero -----------------------------------------

        const data = await Promise.all(
          regions?.map(async (region) => {
            const response = await getAreaTour(region.code);

            const item = response?.response?.body.items.item?.[0];

            return {
              ...region,
              tour: item,
            };
          }),
        );
        setAreaData(data);

        // 지역 관광 ------------------------------------

        const getFestivalData = await getFestival();
        setFestivalData(getFestivalData?.response?.body?.items?.item);

        // 축제 ------------------------------------------
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Hero spot={heroSpot} tour={tourData} />

      <div className="px-[20px] lg:px-[40px] xl:px-[250px]">
        <Section_2 data={areaData} />
        <Section_3 />
        <Section_4 data={festivalData} />
      </div>
    </div>
  );
}
