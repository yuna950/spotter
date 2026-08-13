import SearchIcon from "@iconify-react/griddy-icons/search";
import { Link } from "react-router-dom";

export default function Section_2({ data }) {
  return (
    <div className="py-[100px]">
      <div className="flex justify-between items-end">
        <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] font-bold  ">
          지역별 여행
        </h2>
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
