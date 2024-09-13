export default function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-[#F8F9FD] py-14 px-12 flex flex-col gap-4 tracking-tight rounded-2xl shadow-md">
      <img src={icon} alt="" className="w-12 aspect-square" />
      <span className="text-semibold text-xl lg:text-2xl">{title}</span>
      <span className="text-[#64607D] text-medium text-lg lg:text-xl">
        {description}
      </span>
    </div>
  );
}
