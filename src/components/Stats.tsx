import { motion } from "framer-motion";

import AIIcon from "../assets/ai-icon.svg";
import PersonIcon from "../assets/person-binary.svg";
import RobotIcon from "../assets/robot.svg";
import Statistic from "./StatisticCard";

export default function Stats() {
  return (
    <section className="bg-[#002A3B]">
      <motion.div className="container mx-auto py-10 px-6 flex flex-col gap-5 items-stretch lg:flex-row lg:justify-between">
        <Statistic
          icon={AIIcon}
          title={"AI model submissions"}
          metric={"100K+"}
        />
        <div className="basis-[1px] bg-[#C4C4C4]" />
        <Statistic
          icon={PersonIcon}
          title={"Data Scientists"}
          metric={"50K+"}
        />
        <div className="basis-[1px] bg-[#C4C4C4]" />
        <Statistic
          icon={RobotIcon}
          title={"AI Challenges hosted"}
          metric={"100+"}
        />
      </motion.div>
    </section>
  );
}
