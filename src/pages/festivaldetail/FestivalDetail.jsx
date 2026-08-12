import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import { getdetail, getImage, getTourDetail } from "../api/TourApi";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";

export default function FestivalDetail() {
  useScrollTop();
  const [loading, setLoading] = useState(true);
  const { contentid } = useParams();
  const [festivalData, setFestivalData] = useState();
  const [imgData, setImgData] = useState([]);
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    (async () => {
      try {
        // 축제 상세정보
        const festivalDetail = await getTourDetail(contentid, 15);
        const item = festivalDetail?.response?.body?.items?.item[0];
        setFestivalData(item);

        const detail = await getdetail(contentid, 15);
        const detailItem = detail?.response?.body?.items?.item[0];
        setDetailData(detailItem);

        // img
        const image = await getImage(contentid);
        const imgItem = image?.response?.body?.items?.item;
        setImgData(imgItem);
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

  console.log(detailData);

  return (
    <div>
      <div className="px-[20px] lg:px-[40px] xl:px-[250px] xl:py-[150px]">
        <div className=" flex items-center mb-[100px] gap-2.5">
          <div className="w-3 h-[90px] bg-[#2563EB]"></div>
          <h2 className="text-[20px] lg:text-[40px] xl:text-[60px] font-bold  ">
            {festivalData?.title}
          </h2>
        </div>

        <Section_2
          data={festivalData}
          imgData={imgData}
          detailData={detailData}
        />
        <Section_3 data={imgData} />
      </div>
    </div>
  );
}
