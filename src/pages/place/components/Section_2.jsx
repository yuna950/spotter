import RegionMenu from "../../../components/RegionMenu";

export default function Section_2() {
  return (
    <div className="py-[100px]">
      <div className="flex gap-8">
        <RegionMenu name={"전체"} />
        <RegionMenu name={"관광지"} />
        <RegionMenu name={"문화시설"} />
        <RegionMenu name={"액티비티"} />
        <RegionMenu name={"맛집"} />
        <RegionMenu name={"쇼핑"} />
      </div>

      <div></div>
    </div>
  );
}
