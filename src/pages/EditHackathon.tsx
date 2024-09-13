import { useParams } from "react-router-dom";
import HackathonForm from "../components/HackathonForm";
import { useHackathon } from "../context/MockDataProvider";
import { Hackathon } from "../utils/types";

export default function EditHackathon() {
  const { id } = useParams();
  const { hackathons, setHackathons } = useHackathon();
  const hackathon = hackathons.find((hackthon) => hackthon.id === id);

  if (!hackathon) {
    return <h1>No Hackthon found</h1>;
  }

  function handleEditHackathon(data: Hackathon) {
    const file = data.image instanceof FileList ? data.image[0] : undefined;

    setHackathons((prevHackathons) => {
      const index = prevHackathons.findIndex(
        (hackathon) => hackathon.id === data.id
      );

      if (index === -1) {
        console.error("Hackathon not found");
        return prevHackathons;
      }

      const updatedHackathon: Hackathon = {
        ...prevHackathons[index],
        ...data,
        image: file ? URL.createObjectURL(file) : prevHackathons[index].image,
      };

      return [
        ...prevHackathons.slice(0, index),
        updatedHackathon,
        ...prevHackathons.slice(index + 1),
      ];
    });

    // Log the updated data to verify
    console.log("Hackathon Updated:", data);
    return data.id;
  }

  return (
    <main className="flex flex-col gap-7">
      <h1 className="text-black text-2xl text-bold text-center bg-[#F8F9FD] py-8 px-6">
        Challenge Details
      </h1>
      <article className="container mx-auto px-6 py-5 lg:py-8">
        <HackathonForm
          mode="EDIT"
          onSave={handleEditHackathon}
          initialData={hackathon}
        />
      </article>
    </main>
  );
}
