import { IoSearchCircleOutline } from "react-icons/io5";
import RegionMenu from "../../../components/RegionMenu";
import { BiSearch } from "react-icons/bi";

export default function Section_2({ data }) {
  return (
    <div className="py-[100px] ">
      <div className="flex justify-between mb-12">
        <div className="flex gap-8">
          <RegionMenu name={"관광지"} />
          <RegionMenu name={"문화시설"} />
          <RegionMenu name={"액티비티"} />
          <RegionMenu name={"맛집"} />
          <RegionMenu name={"쇼핑"} />
        </div>
        <form className="w-full lg:w-[400px] xl:w-[600px] pb-[10px]  border-b border-[#BDBDBD] flex items-center justify-between ">
          <input type="text" placeholder="" />
          <button>
            <BiSearch size={25} style={{ color: "#2563EB" }} />
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-[50px]">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full xl:h-[400px] bg-gray-300 rounded-2xl"></div>
          <p className="text-2xl font-bold "></p>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="w-full xl:h-[400px] bg-gray-300"></div>
          <p className="text-2xl font-bold ">장소명</p>
        </div>
      </div>
    </div>
  );
}
