import { useEffect, useState } from "react";
import { getFestival } from "../api/TourApi";
import { Link } from "react-router-dom";
import Tag from "../../components/Tag";
import Loading from "../../components/Loading";
import { useScrollTop } from "../../lib/useScrollTop";
import { NO_IMG } from "../../constant/imgUrl";

export default function Festival() {
  useScrollTop();
  const [festivalData, setFestivalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // 축제
        const getFestivalData = await getFestival();
        setFestivalData(getFestivalData?.response?.body?.items?.item);
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

  const getRegion = (address) => {
    if (!address) return "";

    const [first, second] = address.split(" ");

    if (
      first.endsWith("특별시") ||
      first.endsWith("광역시") ||
      first.endsWith("특별자치시")
    ) {
      return first.replace(/특별시|광역시|특별자치시|통합/g, "");
    }

    if (first.endsWith("도") || first.endsWith("특별자치도")) {
      return second?.replace(/시$/, "") || "";
    }

    return first;
  };

  return (
    <div className="px-[20px] lg:px-[40px] xl:px-[250px] py-[50px]">
      <h2 className="text-[30px] lg:text-[50px] xl:text-[70px] font-bold mb-[50px] ">
        전국 축제 / 행사🎊
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {festivalData.map((festival) => (
          <Link
            key={festival.contentid}
            to={`/festival/${festival.contentid}`}
            className="cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#dddddd] rounded-xl mb-[15px] relative">
              {festival?.firstimage ? (
                <img
                  src={festival.firstimage}
                  alt={festival.title}
                  className="w-full h-full object-cover absolute top-0 left-0 hover:scale-105 transition"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <img src={NO_IMG} alt="no_img" className="w-[100%]" />
                </div>
              )}

              <div className="absolute top-3 left-3">
                <Tag name={getRegion(festival?.addr1)} />
              </div>
            </div>

            <p className="text-md font-semibold mt-1 ">{festival.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
