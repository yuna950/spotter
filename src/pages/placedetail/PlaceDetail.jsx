import Section_1 from "./components/Section_1";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { getTourDetail } from "../api/TourApi";
import { Link, useParams } from "react-router-dom";

export default function PlaceDetail() {
  const [loading, setLoading] = useState(true);
  const { contentid } = useParams();
  const [tourData, setTourDetail] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const tourDetail = await getTourDetail(contentid);
        const item = tourDetail?.response?.body?.items?.item[0];
        setTourDetail(item);

        // 관광지 상세정보 -----------------------------------
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

  console.log(tourData);

  return (
    <div className=" px-[40px] lg:px-[70px] xl:px-[400px] py-[50px]">
      <Link to={"/place"}>
        <div>목록으로 돌아가기</div>
      </Link>
      <div className="w-full xl:h-[600px] bg-gray-500 rounded-xl overflow-hidden ">
        <img
          src={tourData.firstimage}
          alt={tourData.contentid}
          className="object-bottom"
        />
      </div>

      <Section_1 data={tourData} />
    </div>
  );
}
