import SearchIcon from "@iconify-react/griddy-icons/search";
import { Link } from "react-router-dom";

export default function Section_2({ data }) {
  return (
    <div className="py-[100px]">
      <div className="flex justify-between items-end">
        <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] font-bold  ">
          지역별 여행
        </h2>

        <form className="w-full lg:w-[400px] xl:w-[600px] pb-[10px]  border-b border-[#BDBDBD] flex items-center justify-between ">
          <input
            type="text"
            placeholder="어디로 떠나고 싶으신가요?"
            className="w-full h-full "
          />
          <button>
            <SearchIcon height="1.3em" style={{ color: "#2563EB" }} />
          </button>
        </form>
      </div>

      <div className="w-[100%] flex flex-wrap gap-[10px] justify-between pt-9">
        {data.map((region) => (
          <Link
            key={region.code}
            to={`/place/${region.code}`}
            className="w-[24%] h-[300px]"
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
