import { Project } from "./interfaces";
import Discord from "../assets/Discord.png";
import Portfolio from "../assets/portfolio.png";

export const projects: Project[] = [
  {
    name: "Discord Bot with AI",
    description: "Little project made for fun",
    github: "https://github.com/Pref0/AI-Bot",
    website: "",
    imageUrl: Discord,
  },
  {
    name: "Portfolio",
    description: "My first portfolio",
    github: "https://github.com/Pref0/portfolio",
    website: "https://visionaryy.vercel.app/",
    imageUrl: Portfolio,
  },
];
