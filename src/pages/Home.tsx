import ChallegeBenefits from "../components/ChallengeBenefits";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HackathonList from "../components/HackathonList";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ChallegeBenefits />
      <HackathonList />
    </>
  );
}

export default Home;
