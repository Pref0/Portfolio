import lua from "../assets/lua.png";
import { Skill } from "./interfaces";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";

export const skills: Skill[] = [
  {
    id: 1,
    title: "React",
    progress: "65%",
    color: "#61DBFB",
    icon: react,
  },
  {
    id: 2,
    title: "Lua",
    progress: "75%",
    color: "#000080",
    icon: lua,
  },
  {
    id: 3,
    title: "Javascript",
    progress: "85%",
    color: "#f7df1e",
    icon: javascript,
  },
  {
    id: 4,
    title: "TypeScript",
    progress: "79%",
    color: "#007acc",
    icon: typescript,
  },
];
