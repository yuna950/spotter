import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Festival from "./pages/festival/Festival";
import Place from "./pages/place/Place";
import PlaceDetail from "./pages/placedetail/PlaceDetail";
import FestivalDetail from "./pages/festivaldetail/FestivalDetail";
import ThemeDetail from "./pages/themedatail/ThemeDetail";
import Search from "./pages/search/Search";
import Region from "./pages/region/Region";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/Festival/:contentid" element={<FestivalDetail />} />
        <Route path="/Place/:regioncode" element={<Place />} />
        <Route path="/place/:regioncode/:signgucode" element={<Place />} />
        <Route path="/Place/detail/:contentid" element={<PlaceDetail />} />
        <Route path="/Theme" element={<ThemeDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/region" element={<Region />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
