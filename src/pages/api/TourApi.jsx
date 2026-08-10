const baseUrl = "https://apis.data.go.kr/B551011/KorService2/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const fetchTour = async (endpoint, params = {}) => {
  const url = new URL(baseUrl + endpoint);

  url.searchParams.set("serviceKey", import.meta.env.VITE_API_KEY);
  url.searchParams.set("MobileOS", "ETC");
  url.searchParams.set("MobileApp", "Spotter");
  url.searchParams.set("_type", "json");

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url, options);

  return response.json();
};

// 지역코드 확인
export const getLdongs = () => {
  return fetchTour("ldongCode2", {
    lDongListYn: "Y",
    numOfRows: 1000,
  });
};

// 관광지 상세정보
export const getTourDetail = (contentId) => {
  return fetchTour("detailCommon2", {
    contentId,
  });
};

// 지역기반 관광지 호출
export const getAreaTour = (regionCode, sigunguCode) => {
  return fetchTour("areaBasedList2", {
    numOfRows: 4,
    pageNo: 1,
    arrange: "C",
    contentTypeId: 12,
    lDongRegnCd: regionCode,
    lDongSignguCd: sigunguCode,
  });
};
