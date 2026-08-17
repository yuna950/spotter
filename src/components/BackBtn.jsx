import { RiArrowLeftWideFill } from "react-icons/ri";

export default function BackBtn() {
  return (
    <div className="mb-15 text-[#dbdbdb] hover:text-[#2563EB] cursor-pointer transition flex items-center px-10 py-1 border border-[#dbdbdb] hover:border-[#2563EB] rounded-2xl inline-grid relative ">
      <div className="absolute left-2 top-[50%] transform translate-y-[-50%]">
        <RiArrowLeftWideFill
          value={{
            className: "text-[#dbdbdb] hover:text-[#2563EB] transition",
          }}
        />
      </div>
      Back
    </div>
  );
}
