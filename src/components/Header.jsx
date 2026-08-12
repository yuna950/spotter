import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-[20px] lg:px-[40px] xl:px-[250px] flex justify-between">
      <div className="font-bold text-[20px] lg:text-[30px] leading-[60px] lg:leading-[80px] flex ">
        <Link to={"/"}>SPOTTER</Link>
        <div className="flex gap-5 leading-[60px] lg:leading-[80px] ml-10 text-lg font-semibold">
          <div className="cursor-pointer hover:text-[#2563EB] transition">
            <Link to={"/place"}>지역별 여행</Link>
          </div>
          <div className="cursor-pointer hover:text-[#2563EB] transition">
            <Link to={"/festival"}>전국 축제</Link>
          </div>
        </div>
      </div>

      <div className="h-[60px] lg:h-[80px] flex items-center">
        <BiSearch size={25} />
      </div>
    </header>
  );
}
