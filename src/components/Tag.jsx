export default function Tag({ name }) {
  return (
    <div className="px-[15px] py-[5px]  bg-white rounded-4xl flex items-center justify-center inline-flex">
      <div className="text-[12px] lg:text-[16px]  text-[#2563EB]">{name}</div>
    </div>
  );
}
