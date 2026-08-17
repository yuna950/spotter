export default function Section_1({ data, detail }) {
  const formatUsetime = (text) => {
    if (!text) return null;

    const parts = text
      .replace(/\[/g, "\n[")
      .replace(/※/g, "\n※")
      .replace(/]/g, "] ")
      .split("\n")
      .map((part) => part.trim())
      .filter(Boolean);

    return parts.map((part, index) => {
      return <p key={index}>{part}</p>;
    });
  };

  const getRegionName = (addr) => {
    if (!addr) return "";

    const parts = addr.split(" ");

    // 특별시 / 광역시 / 특별자치시
    const metropolitan = parts.find((part) =>
      /(특별시|광역시|특별자치시)$/.test(part),
    );

    // 광역시/특별시 안에 시군구가 있으면 → 시군구
    if (metropolitan) {
      const sigungu = parts.find(
        (part) => /(시|군|구)$/.test(part) && part !== metropolitan,
      );

      return sigungu || metropolitan;
    }

    // 도 지역 → 시/군
    const city = parts.find((part) => /(시|군)$/.test(part));

    return city || "";
  };
  return (
    <div className="pt-[50px] flex flex-col gap-12 ">
      <div>
        <p className="text-[#2563EB] text-lg font-bold">
          {getRegionName(data?.addr1)}
        </p>
        <p className="text-6xl font-bold mt-2.5 mb-9">{data.title}</p>
        <p className="text-lg text-[#111827]/70">{data.overview}</p>
      </div>

      <div className="flex justify-evenly mt-[50px] text-center">
        {detail?.usetime && (
          <div>
            <p className="text-xl font-bold mb-3">영업시간</p>
            <div> {formatUsetime(detail.usetime)}</div>
            {detail?.restdate && (
              <p className="text-[#EB2528]/70 text-sm mt-1">
                {detail.restdate}
              </p>
            )}
          </div>
        )}

        {detail?.infocenter && (
          <div>
            <p className="text-xl font-bold mb-3">번호</p>
            <p>{detail?.infocenter}</p>
          </div>
        )}

        <div>
          <p className="text-xl font-bold mb-3">주소</p>
          <p>{data.addr1}</p>
        </div>
      </div>
    </div>
  );
}
