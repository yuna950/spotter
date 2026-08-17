import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import RegionMenu from "../../../components/RegionMenu";
import { getAreaTour } from "../../api/TourApi";
import { NO_IMG } from "../../../constant/imgUrl";
import Loading from "../../../components/Loading";
import BackBtn from "../../../components/BackBtn";

export default function Section_2({ regioncode, signgucode }) {
  const [tourData, setTourData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const categories = [
    {
      name: "관광지",
      contentTypeId: 12,
    },
    {
      name: "문화시설",
      contentTypeId: 14,
    },
    {
      name: "액티비티",
      contentTypeId: 28,
    },
    {
      name: "맛집",
      contentTypeId: 39,
    },
    {
      name: "쇼핑",
      contentTypeId: 38,
    },
  ];

  const itemsPerPage = 8;

  // 카테고리 변경
  const handleCategory = (contentTypeId) => {
    setSelectedCategory(contentTypeId);
    setCurrentPage(1);
  };

  // 카테고리별 데이터 가져오기
  useEffect(() => {
    if (!regioncode) return;

    const fetchTourData = async () => {
      try {
        setLoading(true);

        const response = await getAreaTour(
          regioncode,
          selectedCategory,
          signgucode,
        );

        const items = response?.response?.body?.items?.item || [];

        setTourData(items);
      } catch (error) {
        console.log(error);
        setTourData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTourData();
  }, [regioncode, signgucode, selectedCategory]);

  // 전체 페이지 수
  const totalPages = Math.ceil(tourData.length / itemsPerPage);

  // 현재 페이지에 보여줄 데이터
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentData = tourData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pb-[50px] w-full">
      {/* 카테고리 */}

      <div className="w-full lg:w-[50%] flex justify-between lg:gap-8 mb-12">
        {categories.map((category) => (
          <RegionMenu
            key={category.contentTypeId}
            name={category.name}
            active={selectedCategory === category.contentTypeId}
            onClick={() => handleCategory(category.contentTypeId)}
          />
        ))}
      </div>

      {/* 관광지 */}
      {loading ? (
        <div className="h-[400px] flex items-center justify-center">
          <Loading />
        </div>
      ) : currentData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          {currentData.map((data) => (
            <Link
              key={data.contentid}
              to={`/place/detail/${data.contentid}`}
              className="group"
            >
              {/* 이미지 */}
              <div className="w-full h-[300px] xl:h-[400px] bg-gray-300 rounded-2xl overflow-hidden">
                {data.firstimage ? (
                  <img
                    src={data.firstimage}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#BDBDBD]">
                    <img src={NO_IMG} alt="no_img" />
                  </div>
                )}
              </div>

              {/* 이름 */}
              <p className="text-2xl font-bold mt-6 text-center">
                {data.title}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-[400px] flex items-center justify-center text-[#BDBDBD]">
          등록된 장소가 없습니다.
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-[60px] flex-wrap">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`
                w-10 h-10 rounded-full
                transition
                ${
                  currentPage === page
                    ? "bg-[#2563EB] text-white"
                    : "text-[#BDBDBD] hover:text-[#2563EB]"
                }
              `}
              >
                {page}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}
