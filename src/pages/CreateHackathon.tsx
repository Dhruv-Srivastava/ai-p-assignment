import HackathonForm from "../components/HackathonForm";
import { useHackathon } from "../context/MockDataProvider";
import { Hackathon } from "../utils/types";

export default function CreateHackathon() {
  const { setHackathons } = useHackathon();

  function handleCreateHackathon(data) {
    const file = data.image instanceof FileList ? data.image[0] : undefined;

    const newId = crypto.randomUUID();
    const newHackathon: Hackathon = {
      ...data,
      id: newId,
      image: file ? URL.createObjectURL(file) : "", // Convert the file to a URL if available
    };

    setHackathons((prevHackathons) => [...prevHackathons, newHackathon]);

    return newId;
  }
  return (
    <main className="flex flex-col gap-7">
      <h1 className="text-black text-2xl text-bold text-center bg-[#F8F9FD] py-8 px-6">
        Challenge Details
      </h1>
      <article className="container mx-auto px-6 py-5 lg:py-8">
        <HackathonForm mode="CREATE" onSave={handleCreateHackathon} />
      </article>
    </main>
  );
}
