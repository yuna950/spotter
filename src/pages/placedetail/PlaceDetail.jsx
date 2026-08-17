import Section_2 from "./components/Section_2";
import Section_1 from "./components/Section_1";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getAreaFestival,
  getAreaTour,
  getdetail,
  getRelatedTour,
  getTourDetail,
} from "../api/TourApi";
import Loading from "../../components/Loading";
import BackBtn from "../../components/BackBtn";
import { useScrollTop } from "../../lib/useScrollTop";
import Section_3 from "./components/Section_3";

export default function PlaceDetail() {
  useScrollTop();

  const { contentid } = useParams();

  const [loading, setLoading] = useState(true);

  const [tourData, setTourData] = useState();
  const [detailData, setDetailData] = useState();
  const [areaTourData, setAreaTourData] = useState([]);
  const [festivalData, setFestivalData] = useState([]);
  const [relatedData, setRelatedData] = useState();

  useEffect(() => {
    (async () => {
      try {
        // 관광지 상세정보
        const tourDetail = await getTourDetail(contentid, 12);

        const item = tourDetail?.response?.body?.items?.item?.[0];

        setTourData(item);

        // 관광지 상세 추가정보
        const detail = await getdetail(contentid, 12);

        const detailItem = detail?.response?.body?.items?.item?.[0];

        setDetailData(detailItem);

        // 지역 관광지
        if (item?.lDongRegnCd) {
          const tourResponse = await getAreaTour(item.lDongRegnCd);

          const tours = tourResponse?.response?.body?.items?.item?.[0];

          setAreaTourData(tours);
        }

        // 관련 축제
        if (item?.lDongRegnCd) {
          const festivalResponse = await getAreaFestival(
            item.lDongRegnCd,
            item.lDongSignguCd,
          );

          const festivals = festivalResponse?.response?.body?.items?.item || [];

          // 축제 각각의 상세정보 가져오기
          const festivalsWithDetail = await Promise.all(
            festivals.map(async (festival) => {
              const festivalDetail = await getdetail(festival.contentid, 15);

              const detail = festivalDetail?.response?.body?.items?.item[0];

              return {
                ...festival,
                detail,
              };
            }),
          );

          setFestivalData(festivalsWithDetail);

          // 근처 관광지
          if (item?.lDongRegnCd && item?.lDongSignguCd) {
            const related = await getRelatedTour(
              item.lDongRegnCd,
              item.lDongSignguCd,
            );

            const relatedItems = related?.response?.body?.items?.item || [];

            setRelatedData(relatedItems);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [contentid]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-[40px] lg:px-[70px] xl:px-[400px] py-[50px]">
      <Link to={`/place/${tourData?.lDongRegnCd}`}>
        <BackBtn />
      </Link>

      <div className="aspect-[2/1] w-full bg-gray-500 rounded-xl overflow-hidden">
        <img
          src={tourData?.firstimage}
          alt={tourData?.title}
          className="w-full h-full object-cover"
        />
      </div>

      <Section_1 data={tourData} detail={detailData} />
      <Section_2 tour={areaTourData} festival={festivalData} />
      <Section_3 data={relatedData} />
    </div>
  );
}
