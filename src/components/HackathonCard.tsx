import moment from "moment";
import { cn } from "../utils/cn";

import Badge from "./Badge";
import Timer from "./Timer";
import { Link } from "react-router-dom";

export default function HackathonCard({
  badgeTitle,
  name,
  image,
  timestamp,
  endDate,
  id,
}) {
  const timerTitle =
    badgeTitle === "upcoming"
      ? "Starts in"
      : badgeTitle === "active"
      ? "Ends in"
      : "Ended on";

  const badgeClasses =
    badgeTitle === "upcoming"
      ? "bg-[rgba(242,201,76,0.25)] text-[#666666]"
      : badgeTitle === "active"
      ? "bg-[rgba(68,146,76,0.24)] text-[#44924C]"
      : "bg-[rgba(255,60,0,0.17)] text-[#666666]";
  return (
    <article
      className={cn(
        "flex flex-col gap-6 pb-6 items-center rounded-2xl border-none bg-white"
      )}
    >
      <img
        src={image}
        alt=""
        className={cn(
          "w-full h-60 border-none rounded-tl-2xl rounded-tr-2xl object-cover object-center"
        )}
      />
      <Badge className={badgeClasses}>
        {badgeTitle[0].toUpperCase() + badgeTitle.slice(1)}
      </Badge>
      <div className="w-full flex flex-col gap-6 items-center px-12">
        <p className="text-lg font-semibold text-black leading-tight text-center">
          {name}
        </p>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-sm font-medium text-[#444444]">{timerTitle}</p>
          {badgeTitle !== "past" ? (
            <Timer timestamp={timestamp} />
          ) : (
            <p className="text-[#454545] font-semibold text-xl my-2.5">
              {moment(endDate).format("Do MMM'YY hh:mm A")}
            </p>
          )}
        </div>
        <Link
          to={`/hackathon/${id}`}
          className="bg-[#44924C] py-3 px-5 text-white text-sm font-semibold mt-3 rounded-xl"
        >
          Participate Now
        </Link>
      </div>
    </article>
  );
}
