import { Hackathon } from "./types";

export const mockHackathons: Hackathon[] = [
  {
    id: "1",
    name: "Data Science Bootcamp",
    startDate: "2023-06-01T00:00:00Z",
    endDate: "2023-06-30T23:59:59Z",
    description: "A month-long bootcamp to boost your data science skills.",
    image: "../assets/image-1.png",
    level: "medium",
  },
  {
    id: "2",
    name: "AI Challenge",
    startDate: "2023-07-15T00:00:00Z",
    endDate: "2023-07-17T23:59:59Z",
    description: "A weekend hackathon focused on artificial intelligence.",
    image: "../assets/image-2.png",
    level: "hard",
  },
  // Add more mock hackathons as needed
];
