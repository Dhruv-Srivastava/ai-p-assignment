export interface Hackathon {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  image: File | string;
  level: "easy" | "medium" | "hard";
  objective: string;
}
