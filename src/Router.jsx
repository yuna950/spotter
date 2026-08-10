import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Festival from "./pages/festival/Festival";
import Place from "./pages/place/Place";
import PlaceDetail from "./pages/placedetail/PlaceDetail";
import FestivalDetail from "./pages/festivaldetail/FestivalDetail";
import ThemeDetail from "./pages/themedatail/ThemeDetail";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/FestivalDetail/:contentId" element={<FestivalDetail />} />
        <Route path="/Place/:regionCode" element={<Place />} />
        <Route path="/PlaceDetail/:contentId" element={<PlaceDetail />} />
        <Route path="/ThemeDetail" element={<ThemeDetail />} />
      </Routes>
      <hr />
      <Footer />
    </HashRouter>
  );
}
