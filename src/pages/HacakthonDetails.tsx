import Badge from "../components/Badge";

import ClockIcon from "../assets/clock-icon.svg";
import SkillEasyIcon from "../assets/skill-easy.svg";

export default function HackathonDetails() {
  return (
    <>
      <section className="bg-[#003145] py-10 lg:py-24">
        <div className="container mx-auto px-6 flex flex-col items-start gap-6">
          <Badge className="flex gap-2 items-center bg-[#FFCE5C] text-black font-semibold text-xs py-2 px-3 lg:text-sm">
            <img src={ClockIcon} alt="" />
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </Badge>
          <div className="flex flex-col gap-8 text-white">
            <h1 className="text-2xl font-semibold lg:text-4xl">
              Data Sprint 72 - Butterfly Identification
            </h1>
            <p className="text-[#F8F9FD] font-medium text-sm lg:text-lg">
              Identify the class to which each butterfly belongs to
            </p>
          </div>
          <Badge className="flex gap-2 items-center bg-[#F8F9FD] text-[#003145] font-semibold text-sm py-3 px-4">
            <img src={SkillEasyIcon} alt="" />
            Easy
          </Badge>
        </div>
      </section>
      <section className="shadow-[#DDE6ED] shadow-lg isolate">
        <div className="container mx-auto px-6 pt-5 rounded-md  flex justify-between items-start">
          <span className="border-b-4 border-b-[#44924C] pb-3 font-semibold rounded-sm text-base lg:text-lg">
            Overview
          </span>
          <div className="flex gap-4 text-xs font-semibold lg:text-sm">
            <button className="bg-[#44924C] text-white rounded-lg py-1 px-4 lg:px-8">
              Edit
            </button>
            <button className="bg-transparent text-[#DC1414] border border-[#DC1414] rounded-lg  py-1 px-4 lg:px-8">
              Delete
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-9 bg-[#FFFFFF] text-[#64607D] text-sm lg:text-base">
        <p>
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
          <br />
          <br />
          An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.
          <br />
          <br />
          Your Task is to build an Image Classification Model using CNN that
          classifies to which class of weather each image belongs to.
        </p>
      </section>
    </>
  );
}
