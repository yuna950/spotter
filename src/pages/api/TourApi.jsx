const baseUrl = "https://apis.data.go.kr/B551011/KorService2/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const fetchTour = async (endpoint) => {
  const url = new URL(baseUrl + endpoint);

  url.searchParams.set("serviceKey", import.meta.env.VITE_API_KEY);
  url.searchParams.set("MobileOS", "ETC");
  url.searchParams.set("MobileApp", "Spotter");
  url.searchParams.set("_type", "json");

  const response = await fetch(url, options);

  return response.json();
};
