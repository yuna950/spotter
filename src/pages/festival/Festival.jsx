import { useEffect, useState } from "react";
import { getFestival } from "../api/TourApi";
import { Link } from "react-router-dom";
import Tag from "../../components/Tag";
import Loading from "../../components/Loading";

export default function Festival() {
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

  return (
    <div className="px-[20px] lg:px-[40px] xl:px-[250px] py-[50px]">
      <h2 className="text-[30px] lg:text-[50px] xl:text-[70px] font-bold mb-[50px] ">
        전국 축제 / 행사🎊
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {festivalData.map((festival) => (
          <Link
            key={festival.contentid}
            to={`/festivalDetail/${festival.contentid}`}
            className="cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-300 rounded-xl mb-[15px] relative">
              <img
                src={festival.firstimage}
                alt={festival.title}
                className="w-full h-full object-cover absolute top-0 left-0 hover:scale-105 transition"
              />
              <div className="absolute top-3 left-3">
                <Tag name={festival.addr1?.split(" ")[0]} />
              </div>
            </div>

            <p className="text-md font-semibold mt-1 ">{festival.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
