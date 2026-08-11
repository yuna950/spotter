import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";

export default function Place() {
  return (
    <div>
      <Section_1 />

      <div className="px-[20px] lg:px-[40px] xl:px-[250px]">
        <Section_2 />
      </div>
    </div>
  );
}
