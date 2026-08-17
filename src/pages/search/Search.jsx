import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { getSearch } from "../api/TourApi";
import { NO_IMG } from "../../constant/imgUrl";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

export default function Search() {
  useScrollTop();
  const [keyword, setKeyword] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    // 검색어가 비어있으면 실행하지 않음
    if (!keyword.trim()) return;

    try {
      const response = await getSearch(keyword);

      const result = response?.response?.body?.items?.item || [];

      setSearchData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[20px] lg:px-[40px] xl:px-[250px] min-h-screen py-[50px]">
      <form
        onSubmit={handleSearch}
        className="flex justify-between border border-[#dbdbdb] rounded-2xl"
      >
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="px-5 py-3 w-full h-full outline-none focus:outline-none focus:ring-0"
        />

        <button type="submit" className="px-5 py-3">
          <BiSearch size={30} />
        </button>
      </form>

      {/* 검색 결과 */}
      <div className="grid grid-cols-2 gap-5 mt-10">
        {searchData.map((data) => (
          <Link to={`/place/detail/${data.contentid}`}>
            <div key={data.contentid} className="cursor-pointer">
              {data.firstimage ? (
                <img
                  src={data.firstimage}
                  alt={data.title}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-[300px] overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={NO_IMG}
                    alt="no_img"
                    className="h-full object-center "
                  />
                </div>
              )}

              <p className="text-xl font-bold mt-3 text-center">{data.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
