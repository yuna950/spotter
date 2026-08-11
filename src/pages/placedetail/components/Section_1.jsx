export default function Section_1({ data }) {
  return (
    <div>
      <div>
        <p className="text-[#2563EB] text-lg">
          {data.addr1.split("광역시")[0]}
        </p>
        <p className="text-6xl font-bold mt-2.5 mb-4">{data.title}</p>
        <p className="text-lg text-[#111827]/70">{data.overview}</p>
      </div>

      <div className="flex justify-evenly mt-[50px]">
        <div>
          <p className="text-xl font-bold">영업시간</p>
          <p>000000</p>
          <p className="text-[#EB2528]/70 text-sm">*휴무</p>
        </div>
        <div>
          <p className="text-xl font-bold">번호</p>
          <p>000-000-000</p>
        </div>
        <div>
          <p className="text-xl font-bold">주소</p>
          <p>{data.addr1}</p>
        </div>
        <div>
          <p className="text-xl font-bold">홈페이지</p>
          <p>
            <a href={data.homepage}>{data.homepage}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
