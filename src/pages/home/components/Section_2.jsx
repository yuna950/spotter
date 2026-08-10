import SearchIcon from "@iconify-react/griddy-icons/search";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAreaTour, getLdongs } from "../../api/TourApi";

export default function Section_2() {
  const [areaData, setAreaData] = useState();

  useEffect(() => {
    (async () => {
      try {
        // 지역코드 확인
        const data = await getLdongs();
        // console.log(data.response.body.items.item);

        // 지역기반 관광정보 조회
        const areaTour = await getAreaTour();
        setAreaData(areaTour);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, []);

  const getAreaData = areaData?.response;
  //   console.log(data);

  return (
    <div className="py-[100px]">
      <div className="flex justify-between items-end">
        <h2 className="text-[30px] lg:text-[50px] xl:text-[70px] font-bold  ">
          지역별 여행
        </h2>

        <form className="w-full lg:w-[400px] xl:w-[600px] pb-[10px]  border-b border-[#BDBDBD] flex items-center justify-between ">
          <input type="text" placeholder="어디로 떠나고 싶으신가요?" />
          <button>
            <SearchIcon height="1.3em" style={{ color: "#2563EB" }} />
          </button>
        </form>
      </div>

      <div>
        <Link to={"/place"}>
          <div></div>
        </Link>
      </div>
    </div>
  );
}
