import Hero from "./components/Hero";
import Section_2 from "./components/Section_2";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="px-[250px]">
        <Section_2 />
      </div>
    </div>
  );
}
