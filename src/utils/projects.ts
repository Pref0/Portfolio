import { Project } from "./interfaces";
import PalvelinX from "../assets/palvelinx_pink.png";
import Discord from "../assets/Discord.png";
import Portfolio from "../assets/portfolio.png";

export const projects: Project[] = [
  {
    name: "Palvelin X",
    description: "Finnish FiveM server",
    github: "",
    website: "",
    imageUrl: PalvelinX,
  },
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
