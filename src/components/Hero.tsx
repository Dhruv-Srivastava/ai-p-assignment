import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import RocketLogo from "../assets/rocket-logo.svg";


export default function Hero() {
  return (
    <section className="bg-[#003145]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto h-full w-full py-10 px-6 flex flex-col gap-6 items-center lg:flex-row-reverse lg:justify-center lg:py-24"
      >
        <img src={RocketLogo} alt="" className="w-72 aspect-auto" />
        <div className="relative flex flex-col gap-6 text-pretty text-white lg:gap-9 lg:max-w-[650px]">
          <h1 className="relative font-semibold text-[clamp(1.75rem,5vw,3rem)] leading-none before:absolute before:bg-[#FFCE5C] before:w-1.5 before:h-full before:-left-4 lg:before:w-2.5 lg:before:-left-14">
            Accelerate Innovation with Global AI Challenges
          </h1>
          <p className="font-medium text-sm leading-normal text-[#ECECEC] lg:text-base">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
          <Link
            to="/hackathon/create"
            className="font-semibold text-sm text-[#003145] py-3 px-4 rounded-[10px] bg-white self-start lg:text-base"
          >
            Create Challenge
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
