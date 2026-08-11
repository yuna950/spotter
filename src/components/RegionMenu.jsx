export default function RegionMenu({ name }) {
  return (
    <button className="pb-2.5 text-[#bdbdbd] hover:text-[#2563EB] hover:border-b-2 hover:border-b-[#2563EB] cursor-pointer transition">
      <p className="text-2xl">{name}</p>
    </button>
  );
}
