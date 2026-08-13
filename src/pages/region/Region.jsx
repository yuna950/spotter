import { Link } from "react-router-dom";
import { getLdongs } from "../api/TourApi";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function Region() {
  const [loading, setLoading] = useState(true);
  const [regionData, setRegionData] = useState();
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    ...new Map(
      regionData?.map((region) => [
        region.lDongRegnCd,
        {
          code: region.lDongRegnCd,
          name: region.lDongRegnNm,
        },
      ]),
    ).values(),
  ];

  useEffect(() => {
    (async () => {
      try {
        const regions = await getLdongs();
        setRegionData(regions?.response?.body?.items.item);
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

  const cities = selectedRegion
    ? regionData.filter((region) => region.lDongRegnCd === selectedRegion.code)
    : [];

  console.log(regionData);

  return (
    <div className="min-h-screen px-[20px] lg:px-[40px] xl:px-[250px] py-[50px]">
      <div className="flex justify-between items-end">
        <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] font-bold mb-15 ">
          지역을 선택 해 주세요
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {regions.map((region) => {
          const isProvince = region.name.endsWith("도");

          // 도
          if (isProvince) {
            return (
              <button
                key={region.code}
                onClick={() =>
                  setSelectedRegion(
                    selectedRegion?.code === region.code ? null : region,
                  )
                }
                className={`
                  w-full
                  h-[100px]
                  rounded-2xl
                  border
                  flex items-center justify-center
                  font-semibold
                  transition
                  ${
                    selectedRegion?.code === region.code
                      ? "border-[#2563EB] border-2 font-bold text-[#2563EB]"
                      : "border-gray-200 text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB]"
                  }
                `}
              >
                {region.name}
              </button>
            );
          }

          // 특별시 / 광역시 / 특별자치시
          return (
            <Link
              key={region.code}
              to={`/place/${region.code}`}
              className="h-[100px] rounded-2xl border border-gray-200 flex items-center justify-center font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition"
            >
              {region.name}
            </Link>
          );
        })}
      </div>

      {selectedRegion && (
        <div className="mt-[50px]">
          <h3 className="text-[30px] font-bold mb-[25px]">
            {selectedRegion.name}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {cities.map((city) => (
              <Link
                key={`${city.lDongRegnCd}-${city.lDongSignguCd}`}
                to={`/place/${city.lDongRegnCd}`}
                className="
                  h-[80px]
                  rounded-xl
                  border border-gray-200
                  flex items-center justify-center
                  font-medium
                  hover:border-[#2563EB]
                  hover:text-[#2563EB]
                  transition
                "
              >
                {city.lDongSignguNm}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
