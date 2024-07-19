import { skills } from "@/utils/skills";

const SkillsSlider: React.FC = () => {
  return (
    <div className="hover:bg-card p-4 rounded-sm w-full hover:shadow-lg hover:shadow-card">
      <div className="text-3xl font-semibold text-primary mb-4">Skills</div>

      {skills.map((skill) => (
        <div key={skill.id} className="flex-none w-full p-4 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1AA]">{skill.title}</span>
          </div>
          <div className="bg-transparent text-background px-4 py-2 rounded-lg">
            <div className="h-4 w-full border border-card rounded-xl">
              <div
                className={`bg-[#BB86FC] h-full w-[${skill.progress}] rounded-xl`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSlider;
