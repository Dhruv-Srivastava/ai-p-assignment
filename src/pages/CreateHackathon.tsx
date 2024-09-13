import HackathonForm from "../components/HackathonForm";

export default function CreateHackathon() {

  return (
    <main className="flex flex-col gap-7">
      <h1 className="text-black text-2xl text-bold text-center bg-[#F8F9FD] py-8 px-6">
        Challenge Details
      </h1>
      <article className="container mx-auto px-6 py-5 lg:py-8">
        <HackathonForm mode="CREATE" onSave={(data)=>{console.log(data)}} />
      </article>
    </main>
  );
}
