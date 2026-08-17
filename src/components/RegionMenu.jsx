export default function RegionMenu({ name, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        pb-2.5
        text-3xl
        cursor-pointer
        transition
        ${
          active
            ? "text-[#2563EB] border-b-2 border-b-[#2563EB]"
            : "text-[#BDBDBD]  hover:text-[#2563EB] hover:border-b-2 hover:border-b-[#2563EB]"
        }
      `}
    >
      {name}
    </button>
  );
}
