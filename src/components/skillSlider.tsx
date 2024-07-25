import Image from "next/image";
import { skills } from "@/utils/skills";

const SkillsSlider: React.FC = () => {
  return (
    <div className="p-4 rounded-sm w-full">
      <div className="text-3xl font-semibold text-accent mb-4">Skills</div>

      {skills.map((skill) => (
        <div key={skill.id} className="flex-none w-full p-4 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1AA]">{skill.title}</span>
            <div className="ml-auto w-30 h-30">
              <Image
                className="object-cover"
                src={skill.icon}
                alt={skill.title}
                width={22}
                height={22}
              />
            </div>
          </div>

          <div className="bg-transparent text-background py-2 rounded-lg">
            <div className="h-4 w-full border border-card rounded-xl">
              <div
                className="bg-[#BB86FC] h-full rounded-xl"
                style={{ width: `${skill.progress}` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSlider;
