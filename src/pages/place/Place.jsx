import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { getAreaTour, getdetail, getLdongs } from "../api/TourApi";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import { Link, useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";
import BackBtn from "../../components/BackBtn";

// 지역명 가공
const getRegionName = (name) => {
  if (!name) return "";

  const regionNames = {
    서울특별시: "서울",
    부산광역시: "부산",
    대구광역시: "대구",
    인천광역시: "인천",
    광주광역시: "광주",
    대전광역시: "대전",
    울산광역시: "울산",
    세종특별자치시: "세종",
    경기도: "경기",
    강원특별자치도: "강원",
    충청북도: "충북",
    충청남도: "충남",
    전북특별자치도: "전북",
    전라남도: "전남",
    경상북도: "경북",
    경상남도: "경남",
    제주특별자치도: "제주",
  };

  return regionNames[name] || name;
};

export default function Place() {
  useScrollTop();

  const { regioncode, signgucode } = useParams();

  const [loading, setLoading] = useState(true);

  const [tourData, setTourData] = useState([]);
  const [festivalData, setFestivalData] = useState([]);
  const [regionName, setRegionName] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // 관광지
        const tourResponse = await getAreaTour(regioncode, 12, signgucode);

        const tours = tourResponse?.response?.body?.items?.item || [];

        setTourData(tours);

        // 축제
        const festivalResponse = await getAreaTour(regioncode, 15, signgucode);

        const festivals = festivalResponse?.response?.body?.items?.item || [];

        // 축제마다 상세 소개정보 가져오기
        const festivalsWithDetail = await Promise.all(
          festivals.map(async (festival) => {
            try {
              const detailResponse = await getdetail(festival.contentid, 15);

              const detail = detailResponse?.response?.body?.items?.item?.[0];

              return {
                ...festival,
                detail: detail || {},
              };
            } catch (error) {
              console.log(`${festival.title} 상세정보 가져오기 실패:`, error);

              return {
                ...festival,
                detail: {},
              };
            }
          }),
        );

        setFestivalData(festivalsWithDetail);

        const regionResponse = await getLdongs();

        const regions = regionResponse?.response?.body?.items?.item || [];

        const currentRegion = regions.find((region) => {
          if (signgucode) {
            // 시군구 페이지
            return (
              region.lDongRegnCd === regioncode &&
              region.lDongSignguCd === signgucode
            );
          }

          // 광역시 / 도 페이지
          return region.lDongRegnCd === regioncode;
        });

        const name = signgucode
          ? currentRegion?.lDongSignguNm
          : currentRegion?.lDongRegnNm;

        setRegionName(
          name?.replace(
            /(통합특별시|특별자치도|특별자치시|특별시|광역시|도|시|군|구)$/,
            "",
          ) || "",
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [regioncode, signgucode]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="w-full py-[30px] px-[20px] lg:px-[40px] xl:px-[250px] flex flex-col justify-center items-start">
        <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-bold mb-3 ">
          {regionName}
        </h2>
      </div>

      <div className="px-[20px] lg:px-[40px] xl:px-[250px]">
        <Section_2 regioncode={regioncode} signgucode={signgucode} />

        <Section_3 festivalData={festivalData} tourData={tourData} />
      </div>
    </div>
  );
}
