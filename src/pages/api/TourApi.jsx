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

// 상세정보
export const getTourDetail = (contentId, contentTypeId = 12) => {
  return fetchTour("detailCommon2", {
    contentId: contentId,
  });
};

// 이미지 정보
export const getImage = (contentId) => {
  return fetchTour("detailImage2", {
    contentId,
  });
};

// 상세 소개정보
export const getdetail = (contentId, contentTypeId = 12) => {
  return fetchTour("detailIntro2", {
    contentId,
    contentTypeId,
    numOfRows: 100,
    pageNo: 1,
  });
};

// 지역기반 관광지 호출
export const getAreaTour = (regionCode, contentTypeId = 12) => {
  return fetchTour("areaBasedList2", {
    numOfRows: 100,
    pageNo: 1,
    arrange: "C",
    contentTypeId,
    lDongRegnCd: regionCode,
  });
};

// 행사 정보 조회
export const getFestival = () => {
  return fetchTour("searchFestival2", {
    numOfRows: 10000,
    pageNo: 1,
    arrange: "C",
    eventStartDate: "20260101",
    eventEndDate: "20261231",
  });
};
