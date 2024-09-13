import PeopleLogo from "../assets/people.svg";
import RobotLogo from "../assets/robot-green.svg";
import IDCardLogo from "../assets/id-card.svg";
import NoteBookLogo from "../assets/notebook.svg";
import BenefitCard from "./BenefitCard";

export default function ChallegeBenefits() {
  return (
    <section className="container mx-auto px-6 py-10 flex flex-col items-center gap-12 lg:gap-20 lg:p-16">
      <h2 className="font-semibold text-black text-xl lg:text-4xl">
        Why Participate in{" "}
        <span className="text-[#44924C]">AI Challenges?</span>
      </h2>
      <article className="grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-12">
        <BenefitCard
          icon={NoteBookLogo}
          title={"Prove your skills"}
          description={
            "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
          }
        />
        <BenefitCard
          icon={PeopleLogo}
          title={"Learn from community"}
          description={
            "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
          }
        />
        <BenefitCard
          icon={RobotLogo}
          title={"Challenge yourself"}
          description={
            "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
          }
        />
        <BenefitCard
          icon={IDCardLogo}
          title={"Earn recognition"}
          description={
            "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
          }
        />
      </article>
    </section>
  );
}
