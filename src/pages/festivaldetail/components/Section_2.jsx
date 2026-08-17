import { NO_IMG } from "../../../constant/imgUrl";

export default function Section_2({ data, imgData, detailData }) {
  const poster = imgData?.find((img) => img?.imgname?.includes("포스터"));

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-25 items-center mb-[50px]">
        <div className="w-[400px] h-[550px] bg-[#dddddd] rounded-xl overflow-hidden shadow-2xl">
          {poster ? (
            <img
              src={poster.originimgurl}
              alt={poster.imgname}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img src={NO_IMG} alt="no_img" className="w-[100%]" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-[20px] lg:text-[40px] xl:text-[60px] text-center font-bold  ">
            {data?.title}
          </h2>

          <div className="flex flex-wrap gap-5 lg:flex-nowrap lg:flex-col ">
            <div className="w-[45%] text-center  lg:text-start">
              <p className="mb-5 text-lg lg:text-xl xl:text-2xl font-bold ">
                기간
              </p>
              <p className="text-sm lg:text-md xl:text-lg">
                {detailData?.eventstartdate} ~ {detailData?.eventenddate}
              </p>
              {detailData.playtime}
            </div>

            <div className="w-[45%] text-center lg:text-start">
              <p className="mb-5 text-lg lg:text-xl xl:text-2xl font-bold ">
                장소
              </p>
              <p className="text-sm lg:text-md xl:text-lg">{data?.addr1}</p>
            </div>

            <div className="w-[45%] text-center lg:text-start">
              <p className="mb-5 text-lg lg:text-xl xl:text-2xl font-bold ">
                입장료
              </p>
              <p className="text-sm lg:text-md xl:text-lg">
                {detailData.usetimefestival}
              </p>
            </div>

            <div className="w-[45%] text-center lg:text-start">
              <p className="mb-5 text-lg lg:text-xl xl:text-2xl font-bold ">
                번호
              </p>
              <p className="text-sm lg:text-md xl:text-lg">
                {data?.telname} | {data?.tel}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>{data?.overview}</div>
    </div>
  );
}
