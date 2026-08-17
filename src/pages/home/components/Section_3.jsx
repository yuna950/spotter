import { Link } from "react-router-dom";
import Tag from "../../../components/Tag";

export default function Section_3({ course }) {
  return (
    <div className="py-[50px]">
      <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] font-bold  ">
        코스 여행
      </h2>

      <div className="h-[550px]  w-full mt-10 flex flex-col lg:flex-row justify-between items-end">
        <div className="h-[30vh] lg:h-full w-full lg:w-[40%] bg-gray-300 rounded-2xl  overflow-hidden relative mb-5 lg:mb-0">
          <div className="">
            <img src="#" alt="" />
          </div>

          <div className="absolute top-12 left-12">
            <Tag name={course.sigun} />
            <p className="text-[35px] font-bold">{course.crsKorNm}</p>
          </div>

          <Link to={"/theme"}>
            <div className="px-[20px] py-[10px] inline-grid text-[12px] lg:text-[18px] text-[#BDBDBD] border border-[#BDBDBD] rounded-4xl hover:text-[#2563EB] hover:border-[#2563EB] transition absolute bottom-12 left-12 cursor-pointer">
              자세히 보기 +
            </div>
          </Link>
        </div>

        <div className="w-full lg:w-[55%] flex justify-between gap-5">
          <div className=" w-full h-[250px] lg:h-[360px] flex flex-col gap-2.5">
            <div className="w-full h-full bg-gray-300 rounded-2xl">
              <img src="#" alt="" />
            </div>
            <p className="text-lg font-semibold">장소명</p>
          </div>

          <div className="w-full h-[250px] lg:h-[360px]  flex flex-col gap-2.5">
            <div className="w-full h-full bg-gray-300 rounded-2xl">
              <img src="#" alt="" />
            </div>
            <p className="text-lg font-semibold">장소명</p>
          </div>

          <div className="w-full h-[250px] lg:h-[360px] flex flex-col gap-2.5">
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
