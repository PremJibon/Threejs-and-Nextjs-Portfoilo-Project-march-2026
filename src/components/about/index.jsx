import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Shahed Hossain Prem
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed">
            As a Master of Digital Workflows and Code, I bridge the gap between 
            complex logic and seamless user experiences. Specializing in the 
            MERN stack, I weave magic with **JavaScript, PHP, and Python**, 
            while orchestrating powerful automated symphonies using **n8n**. 
            With over 4 years of wizardry and 193+ repositories on GitHub, 
            I bring a wealth of technical knowledge and a creative approach 
            to every scroll. I'm always looking to collaborate with fellow 
            magicians on extraordinary projects.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            190+ <sub className="font-semibold text-base">repositories</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of coding</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=PremJibon&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="PremJibon Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=PremJibon&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="PremJibon GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full flex-col"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent mb-4">
            Mastered Crafts & Tools
          </h2>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,php,python,react,nextjs,nodejs,tailwind,threejs,mysql,postgres,mongodb,git,github,vscode,vercel,vite,npm,yarn,html,css,sass,bootstrap,figma`}
            alt="PremJibon Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=PremJibon&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="PremJibon GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/PremJibon/spaceinveders"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=PremJibon&repo=spaceinveders&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="PremJibon Featured Project"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
