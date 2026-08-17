import { useEffect, useState } from "react";
import { getdetail, getTourDetail } from "../../api/TourApi";

export default function Section_2({ course }) {
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
    <div>
      <div>
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-[3%]">
          {placeData?.map((place) => (
            <div key={place.contentid} className="">
              <div className="aspect-[2/1] rounded-2xl overflow-hidden">
                <img
                  src={place?.detail?.firstimage}
                  alt={place.detail?.title}
                />
              </div>
              <p className="text-center font-bold mt-3">
                {place?.detail?.title}
              </p>
            </div>
          ))}
        </div>
        <p className="text-lg text-center whitespace-pre-line m-auto w-[300px] lg:w-[800px] xl:w-[1200px] py-[100px]">
          {course?.crsContents?.replace(/<br\s*\/?>/gi, "\n")}
        </p>
      </div>

      {placeData?.map((place) => (
        <div
          key={place.contentid}
          className="px-[20px] lg:px-[40px] xl:px-[100px] py-[50px]"
        >
          <div className="flex gap-3 pb-[50px]">
            <div className="w-2 h-10 bg-[#2563EB]"></div>
            <h2 className="text-3xl font-bold">{place?.detail?.title}</h2>
          </div>
          <div className="">
            <div className="w-full rounded-2xl overflow-hidden aspect-[2/1] mb-5">
              <img src={place?.detail?.firstimage} alt={place?.detail?.title} />
            </div>

            <p className="text-gray-700 text-lg mb-10 text-center py-[50px]">
              {place?.detail?.overview}
            </p>

            <div className="w-full flex flex-col lg:flex-row justify-between gap-5 lg:gap-[3%] border border-[#2563EB] rounded-2xl p-5">
              <div className="w-full lg:w-[33%] text-center">
                <p className="font-bold text-lg mb-3">주소</p>
                <p>{place?.detail?.addr1}</p>
              </div>
              <div className="w-full lg:w-[33%] text-center">
                <p className="font-bold text-lg  mb-3">이용시간</p>
                <p>{formatUsetime(place?.intro?.usetime)}</p>
              </div>
              <div className="w-full lg:w-[33%] text-center">
                <p className="font-bold text-lg  mb-3">번호</p>
                <p>{place?.intro?.infocenter}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
