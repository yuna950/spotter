import SearchIcon from "@iconify-react/griddy-icons/search";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAreaTour, getLdongs } from "../../api/TourApi";

const regions = [
  {
    name: "서울",
    code: "11",
  },
  {
    name: "부산",
    code: "26",
  },
  {
    name: "강릉",
    code: "51",
  },
  {
    name: "제주",
    code: "50",
  },
];

export default function Section_2() {
  const [areaData, setAreaData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // 지역코드 확인
        // const data = await getLdongs();
        // console.log(data.response.body.items.item);

        // 지역기반 관광정보 조회

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
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, []);

  //   console.log(areaData);

  return (
    <div className="py-[100px]">
      <div className="flex justify-between items-end">
        <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-bold  ">
          지역별 여행
        </h2>

        <form className="w-full lg:w-[400px] xl:w-[600px] pb-[10px]  border-b border-[#BDBDBD] flex items-center justify-between ">
          <input type="text" placeholder="어디로 떠나고 싶으신가요?" />
          <button>
            <SearchIcon height="1.3em" style={{ color: "#2563EB" }} />
          </button>
        </form>
      </div>

      <div className="w-[100%] h-[700px] flex flex-wrap gap-[30px] justify-between pt-9">
        {areaData.map((region) => (
          <Link
            key={region.code}
            to={`/place/${region.code}`}
            className="w-[48%] h-[300px]"
          >
            <div className="group relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  className="w-[100%] h-[100%] object-cover transition-transform duration-500 group-hover:scale-110"
                  src={region.tour?.firstimage}
                  alt={region.name}
                />
              </div>
              <p className="absolute bottom-5 left-5 text-[30px] font-bold text-white">
                {region.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
