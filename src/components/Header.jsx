import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-[20px] lg:px-[40px] xl:px-[250px] ">
      <div className="font-bold text-[20px] lg:text-[30px] leading-[60px] lg:leading-[80px]">
        <Link to={"/"}>SPOTTER</Link>
      </div>
    </header>
  );
}
