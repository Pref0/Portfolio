"use client";

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
      <div className="w-full px-4 flex flex-col md:flex-row justify-between md:space-x-8">
        <section className="w-full sm:w-4/5 md:w-[27.5%] lg:w-[25%] flex flex-col items-start top-20 space-y-6 md:fixed md:left-10 bg-card p-4 rounded-lg shadow-md z-10">
          <Image
            className="rounded-lg object-cover"
            src={ProfilePicture}
            alt="Profile Picture"
            width={160}
            height={160}
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold gradient-text">
              Hey! I'm Visionary
            </h1>
            <p className="text-secondary mt-2">
              I'm a self-taught developer from Finland.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-accent" />
                <a
                  href="https://github.com/pref0"
                  className="text-secondary hover:underline"
                >
                  github.com/pref0
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-accent" />
                <a
                  href="mailto:visionary.job@outlook.com"
                  className="text-secondary hover:underline"
                >
                  visionary.job@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-xl text-accent" />
                <div className="text-secondary">Coding Time (Last 7 days):</div>
                <div className="text-primary">
                  {hours} hours {minutes} minutes
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center w-full px-4 py-4 space-y-4">
          <div className="w-full flex justify-center">
            <section className="w-full md:w-2/5 flex items-center justify-center">
              <div className="w-full p-0">
                <SkillsSlider />
              </div>
            </section>
          </div>

          <div className="w-full flex justify-center mt-4">
            <div className="relative w-full md:w-[50%]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-card" />
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full mt-4">
            <section className="w-full md:w-2/5 flex items-center justify-center">
              <div className="bg-card p-4 rounded-sm w-full shadow-md shadow-card">
                <h2 className="text-2xl md:text-3xl font-semibold text-accent">
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
