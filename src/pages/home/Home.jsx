import Hero from "./components/Hero";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="px-[250px]">
        <Section_2 />
        <Section_3 />
        <Section_4 />
      </div>
    </div>
  );
}
