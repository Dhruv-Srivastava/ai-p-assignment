export default function StatisticCard({ icon, metric, title }) {
  return (
    <div className="flex items-center gap-5">
      <img src={icon} alt="" />
      <div className="text-white">
        <p className="text-bold text-base lg:text-2xl">{metric}</p>
        <p className="text-medium text-sm lg:text-lg">{title}</p>
      </div>
    </div>
  );
}
