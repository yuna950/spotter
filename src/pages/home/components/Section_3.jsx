import { Link } from "react-router-dom";
import Tag from "../../../components/Tag";
import { useEffect, useState } from "react";
import { getdetail, getTourDetail } from "../../api/TourApi";

export default function Section_3({ course }) {
  const coursePlaces = [
    {
      contentid: "2504464",
      contenttypeid: 12,
      title: "송도해상케이블카",
    },
    {
      contentid: "126122",
      contenttypeid: 12,
      title: "송도해수욕장",
    },
    {
      contentid: "128829",
      contenttypeid: 12,
      title: "암남공원",
    },
  ];

  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const places = await Promise.all(
          coursePlaces.map(async (place) => {
            const detailResponse = await getTourDetail(place.contentid);

            const detail = detailResponse?.response?.body?.items?.item?.[0];

            const introResponse = await getdetail(
              place.contentid,
              place.contenttypeid,
            );

            const intro = introResponse?.response?.body?.items?.item?.[0];

            return {
              ...place,
              detail,
              intro,
            };
          }),
        );

        setPlaceData(places);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlaces();
  }, []);

  const formatUsetime = (text) => {
    if (!text) return null;

    const parts = text.split(/(?=\s*[-※])/);

    return parts.map((part, index) => {
      const trimmed = part.trim();

      if (trimmed.startsWith("※")) {
        return (
          <p key={index} className="text-sm text-[#EB2528] mt-1">
            {trimmed}
          </p>
        );
      }

      return <p key={index}>{trimmed}</p>;
    });
  };

  return (
    <div className="py-[50px]">
      <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] font-bold  ">
        코스 여행
      </h2>

      <div className="h-[550px]  w-full mt-10 flex flex-col lg:flex-row justify-between items-end">
        <div className="h-[30vh] lg:h-full w-full lg:w-[48%] bg-gray-300 rounded-2xl  overflow-hidden relative mb-5 lg:mb-0">
          <div className=" h-full">
            <img
              src={placeData[1]?.detail?.firstimage}
              alt={placeData[1]?.detail?.title}
              className="object-cover h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>

          <div className="absolute top-12 left-12">
            <Tag name={course.sigun} />
            <p className="text-[35px] font-bold">{course.crsKorNm}</p>
          </div>

          <Link to={"/theme"}>
            <div className="px-[20px] py-[10px] inline-grid text-[12px] lg:text-[18px] text-[#BDBDBD] border border-[#BDBDBD] rounded-4xl hover:text-white hover:border-white transition absolute bottom-12 left-12 cursor-pointer">
              자세히 보기 +
            </div>
          </Link>
        </div>

        <div className="lg:w-[50%] grid grid-cols-3 gap-[3%]">
          {placeData?.map((place) => (
            <div key={place.contentid} className="">
              <div className="aspect-[1/1.3] rounded-2xl overflow-hidden">
                <img
                  src={place?.detail?.firstimage}
                  alt={place?.detail?.title}
                  className="object-cover h-full"
                />
              </div>
              <p className="text-center font-bold mt-3">
                {place?.detail?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
