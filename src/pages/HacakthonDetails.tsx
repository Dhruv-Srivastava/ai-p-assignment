import { Link, useParams } from "react-router-dom";

import Badge from "../components/Badge";

import ClockIcon from "../assets/clock-icon.svg";
import SkillEasyIcon from "../assets/skill-easy.svg";
import { useHackathon } from "../context/MockDataProvider";
import moment from "moment";
import { getHackathonStatus } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function HackathonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hackathons, setHackathons } = useHackathon();
  const hackathon = hackathons.find((hackthon) => hackthon.id === id);

  if (!hackathon) {
    return <h1>No Hackthon found</h1>;
  }

  const { status } = getHackathonStatus(hackathon.startDate, hackathon.endDate);
  const statusLabel =
    status === "upcoming" ? "Starts" : status === "active" ? "Ends" : "Ended";

  const dateToFormat =
    status === "upcoming" ? hackathon.startDate : hackathon.endDate;

  function deleteHackathon(id) {
    setHackathons((prev) => prev.filter((item) => item.id !== id));
    navigate("/", { replace: true });
    toast.success("Hackathon Deleted Successfully");
  }

  return (
    <>
      <section className="bg-[#003145] py-10 lg:py-24">
        <div className="container mx-auto px-6 flex flex-col items-start gap-6">
          <Badge className="flex gap-2 items-center bg-[#FFCE5C] text-black font-semibold text-xs py-2 px-3 lg:text-sm">
            <img src={ClockIcon} alt="" />
            {statusLabel} on {moment(dateToFormat).format("Do MMM'YY hh:mm A")}{" "}
            (Coordinated Universal Time)
          </Badge>
          <div className="flex flex-col gap-8 text-white">
            <h1 className="text-2xl font-semibold lg:text-4xl">
              {hackathon.name}
            </h1>
            <p className="text-[#F8F9FD] font-medium text-sm lg:text-lg">
              {hackathon.objective}
            </p>
          </div>
          <Badge className="flex gap-2 items-center bg-[#F8F9FD] text-[#003145] font-semibold text-sm py-3 px-4">
            <img src={SkillEasyIcon} alt="" />
            {hackathon.level[0].toUpperCase() + hackathon.level.slice(1)}
          </Badge>
        </div>
      </section>
      <section className="shadow-[#DDE6ED] shadow-lg isolate">
        <div className="container mx-auto px-6 pt-5 rounded-md  flex justify-between items-start">
          <span className="border-b-4 border-b-[#44924C] pb-3 font-semibold rounded-sm text-base lg:text-lg">
            Overview
          </span>
          <div className="flex gap-4 text-xs font-semibold lg:text-sm">
            <Link
              to={`/hackathon/${hackathon.id}/edit`}
              className="bg-[#44924C] text-white rounded-lg py-1 px-4 lg:px-8"
            >
              Edit
            </Link>
            <button
              className="bg-transparent text-[#DC1414] border border-[#DC1414] rounded-lg  py-1 px-4 lg:px-8"
              onClick={() => deleteHackathon(hackathon.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-9 bg-[#FFFFFF] text-[#64607D] text-sm lg:text-base">
        <p>{hackathon.description}</p>
      </section>
    </>
  );
}
