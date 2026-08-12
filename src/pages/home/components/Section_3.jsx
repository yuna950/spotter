import { Link } from "react-router-dom";
import Tag from "../../../components/Tag";

export default function Section_3() {
  return (
    <div className="py-[100px]">
      <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] font-bold  ">
        테마 여행
      </h2>

      <div className="h-[550px]  w-full mt-10  flex justify-between items-end">
        <div className="h-full w-[40%] bg-gray-300 rounded-2xl   relative">
          <div>
            <img src="#" alt="" />
          </div>

          <div className="absolute top-12 left-12">
            <Tag name={"서울"} />
            <p className="text-[30px] font-bold">테마 이름</p>
          </div>

          <Link to={"/theme"}>
            <div className="px-[20px] py-[10px] inline-grid text-[12px] lg:text-[18px] text-[#BDBDBD] border border-[#BDBDBD] rounded-4xl hover:text-[#2563EB] hover:border-[#2563EB] transition absolute bottom-12 left-12 cursor-pointer">
              자세히 보기 +
            </div>
          </Link>
        </div>

        <div className="w-[55%] flex justify-between gap-5">
          <div className=" w-full h-[360px] flex flex-col gap-2.5">
            <div className="w-full h-full bg-gray-300 rounded-2xl">
              <img src="#" alt="" />
            </div>
            <p className="text-lg font-semibold">장소명</p>
          </div>

          <div className="w-full h-[360px] flex flex-col gap-2.5">
            <div className="w-full h-full bg-gray-300 rounded-2xl">
              <img src="#" alt="" />
            </div>
            <p className="text-lg font-semibold">장소명</p>
          </div>

          <div className="w-full h-[360px] flex flex-col gap-2.5">
            <div className="w-full h-full bg-gray-300 rounded-2xl">
              <img src="#" alt="" />
            </div>
            <p className="text-lg font-semibold">장소명</p>
          </div>
        </div>
      </div>
    </div>
  );
}
