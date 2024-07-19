import Image from "next/image";
import Layout from "@/components/Layout";
import Project from "@/components/project";
import { projects } from "@/utils/projects";
import ProfilePicture from "../assets/pfp.webp";
import SkillsSlider from "@/components/skillSlider";
import { FaGithub, FaEnvelope, FaClock } from "react-icons/fa";

export default async function Home() {
  const response = await fetch(
    `https://api.testaustime.fi/users/Prefo/activity/data?min_duration=1&from=${
      Math.floor(Date.now() / 1000) - Number("7") * 24 * 60 * 60
    }`,
    {
      headers: {
        Authorization: `Bearer TESTAUSTIME_API_KEY`,
      },
    }
  );

  const data: { duration: number }[] = await response.json();
  const totalDuration = data.reduce((sum, item) => sum + item.duration, 0);
  const hours = Math.floor(totalDuration / 3600);
  const minutes = totalDuration % 60;

  return (
    <Layout>
      <div className="w-full px-4 py-10 flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
        <section className="md:w-1/4 flex flex-col items-start space-y-6">
          <Image
            className="rounded-lg object-cover"
            src={ProfilePicture}
            alt="Profile Picture"
            width={160}
            height={160}
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-primary">
              Hey! I'm Visionary
            </h1>
            <p className="text-secondary mt-2">
              I'm a self-taught developer from Finland.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-secondary" />
                <a
                  href="https://github.com/pref0"
                  className="text-secondary hover:underline"
                >
                  github.com/pref0
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-secondary" />
                <a
                  href="mailto:visionary.job@outlook.com"
                  className="text-secondary hover:underline"
                >
                  visionary.job@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-xl text-secondary" />
                <div className="text-secondary">Coding Time (Last 7 days):</div>
                <div className="text-primary">
                  {hours} hours {minutes} minutes
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:w-2/4 flex flex-col items-center">
          <div className="bg-card p-4 rounded-sm w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              My Work
            </h2>
            <div className="mt-4 space-y-4">
              {projects.map((project) => (
                <Project
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  github={project.github}
                  website={project.website}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full md:w-1/4 flex flex-col items-center md:items-end">
          <SkillsSlider />
        </section>
      </div>
    </Layout>
  );
}
