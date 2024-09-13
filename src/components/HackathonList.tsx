import ImageFirst from "../assets/image-1.png";
import ImageSecond from "../assets/image-2.png";
import HackathonCard from "./HackathonCard";

export default function HackathonList() {
  return (
    <section>
      <div className="bg-[#002A3B]">
        <div className="container mx-auto py-10 px-6 flex flex-col items-center gap-10 lg:gap-16 lg:px-20 lg:py-20">
          <h2 className="text-2xl font-semibold text-white lg:text-3xl">
            Explore Challenges
          </h2>
          <div className="w-full flex justify-center gap-10">
            <input
              type="text"
              placeholder="Search"
              className="py-4 px-10 w-[70%] rounded-xl"
            />
            <button className="bg-white text-black py-3 px-8 text-sm rounded-xl">Filters</button>
          </div>
        </div>
      </div>
      <div className="bg-[#003145]">
        <div className="container mx-auto py-10 px-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 lg:py-20 lg:px-20">
          <HackathonCard
            image={ImageFirst}
            badgeTitle={"upcoming"}
            title={"Data Science Bootcamp - Graded Datathon"}
            timestamp={50 * 70 * 1000}
          />
          <HackathonCard
            image={ImageSecond}
            badgeTitle={"active"}
            title={"Data Science Bootcamp - Graded Datathon"}
            timestamp={1 * 70 * 1000}
          />
          <HackathonCard
            image={ImageFirst}
            badgeTitle={"upcoming"}
            title={"Data Science Bootcamp - Graded Datathon"}
            timestamp={50 * 70 * 1000}
          />
          <HackathonCard
            image={ImageSecond}
            badgeTitle={"active"}
            title={"Data Science Bootcamp - Graded Datathon"}
            timestamp={1 * 70 * 1000}
          />
        </div>
      </div>
    </section>
  );
}
