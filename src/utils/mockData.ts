import { Hackathon } from "./types";

import WinterImage from "../assets/winter.png";
import AirlineImage from "../assets/airline.png";
import ButterflyImage from "../assets/butterfly.png";
import TravelImage from "../assets/travel.png";
import UniversityImage from "../assets/university.png";
import DatathonImage from "../assets/datathon.png";

export const mockHackathons: Hackathon[] = [
  // Upcoming
  {
    id: crypto.randomUUID(),
    name: "Data Science Bootcamp - Graded Datathon",
    startDate: "2024-12-01T00:00:00Z",
    endDate: "2024-12-31T23:59:59Z",
    description:
      "The Graded Datathon is a month-long immersive experience designed to enhance your data science capabilities. From predictive modeling to data visualization, participants will engage in real-world problems. This bootcamp covers essential topics including machine learning, data engineering, and data cleaning to ensure you're well-rounded in handling any data project. Throughout the datathon, you'll have access to resources, mentorship, and peer collaboration to help you succeed and apply your knowledge to complex datasets.",
    objective:
      "Demonstrate your skills by solving a variety of data science challenges across multiple domains.",
    image: DatathonImage,
    level: "medium",
  },
  {
    id: crypto.randomUUID(),
    name: "Data Sprint 72 - Butterfly Identification",
    startDate: "2024-11-15T00:00:00Z",
    endDate: "2024-11-30T23:59:59Z",
    description:
      "This weekend sprint focuses on identifying different butterfly species from provided image datasets. Utilizing computer vision techniques, participants will train models for classification tasks. The hackathon emphasizes precision and recall in accurately determining species across varying environmental conditions and lighting scenarios. Expert mentors will provide guidance, and winners will be selected based on model accuracy, generalization, and computational efficiency.",
    objective:
      "Identify the class to which each butterfly belongs using image recognition models.",
    image: ButterflyImage,
    level: "hard",
  },
  // Active
  {
    id: crypto.randomUUID(),
    name: "Data Sprint 71 - Weather Recognition",
    startDate: "2024-09-01T00:00:00Z",
    endDate: "2024-10-01T23:59:59Z",
    description:
      "This hackathon challenges participants to predict weather conditions based on historical and real-time data. Data includes temperature, humidity, wind speed, and cloud cover. Participants will use time series analysis, machine learning models, and ensemble methods to predict future weather conditions with the highest possible accuracy. This event is perfect for those interested in atmospheric science, data-driven weather prediction, and forecasting models.",
    objective:
      "Predict weather patterns based on historical and real-time environmental data.",
    image: WinterImage,
    level: "medium",
  },
  {
    id: crypto.randomUUID(),
    name: "Data Sprint 70 - Airline Passenger Satisfaction",
    startDate: "2024-08-01T00:00:00Z",
    endDate: "2024-09-01T23:59:59Z",
    description:
      "In this sprint, participants will analyze airline passenger satisfaction data and identify key factors influencing customer reviews. This includes variables like seat comfort, in-flight services, and ticket price. You'll be tasked with building predictive models that help airlines improve customer experience and satisfaction based on historical survey data. The best models will balance accuracy with interpretability, offering actionable insights for airline management.",
    objective:
      "Predict passenger satisfaction scores based on airline service data.",
    image: AirlineImage,
    level: "easy",
  },
  // Ended
  {
    id: crypto.randomUUID(),
    name: "Engineering Graduates Employment Outcomes",
    startDate: "2023-05-01T00:00:00Z",
    endDate: "2023-05-31T23:59:59Z",
    description:
      "This hackathon focuses on predicting employment outcomes for engineering graduates based on academic and demographic data. Participants will build classification models to identify job placement success. Participants will analyze variables such as GPA, internships, extracurriculars, and interview performance to determine the likelihood of job offers. Key insights from this datathon will help universities and students better understand the job market and improve career services.",
    objective:
      "Predict whether an engineering graduate will secure employment based on academic and other relevant factors.",
    image: UniversityImage,
    level: "medium",
  },
  {
    id: crypto.randomUUID(),
    name: "Travel Insurance Claim Prediction",
    startDate: "2023-01-01T00:00:00Z",
    endDate: "2023-01-31T23:59:59Z",
    description:
      "Participants will analyze travel insurance claim data to build models that predict the likelihood of a claim based on traveler information, trip details, and insurance policies. The objective is to help insurance companies minimize fraudulent claims while maintaining excellent customer service. You'll be expected to handle imbalanced datasets and develop models that maximize precision while reducing false positives.",
    objective:
      "Predict whether a travel insurance claim will be filed based on traveler and trip data.",
    image: TravelImage,
    level: "hard",
  },
];
