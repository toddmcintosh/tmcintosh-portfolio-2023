"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-8">
        <SkillGroup title="Code" data={skillsData.code}></SkillGroup>
        <SkillGroup title="Front End" data={skillsData.frontend}></SkillGroup>
        <SkillGroup title="Back End" data={skillsData.backend}></SkillGroup>
        <SkillGroup title="CI/CD" data={skillsData.cicd}></SkillGroup>
        <SkillGroup title="IDE's" data={skillsData.ide}></SkillGroup>
        <SkillGroup title="Database" data={skillsData.db}></SkillGroup>
        <SkillGroup title="Hosting" data={skillsData.hosting}></SkillGroup>
        <SkillGroup title="eCommerce" data={skillsData.ecommerce}></SkillGroup>
        <SkillGroup title="eLearning" data={skillsData.elearning}></SkillGroup>
        <SkillGroup title="UX/UI Design" data={skillsData.design}></SkillGroup>
        <SkillGroup title="Other" data={skillsData.other}></SkillGroup>
      </ul>
    </section>
  );
}
interface SkillGroupProps {
  title: string;
  data: readonly string[];
}

const SkillGroup = (props: SkillGroupProps) => {
  return (
    <>
      {/* <div className="m-6 p-2 border-b border-white border-opacity-10 inline-block">
        {props.title}
      </div> */}
      {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-8"> */}
      <motion.li
        className="bg-orange-400 block dark:text-xs borderBlack rounded-xl px-5 py-3 dark:bg-orange-400 dark:text-black dark:font-bold dark:lowercase dark:tracking-widest"
        variants={fadeInAnimationVariants}
        key={0}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={0}
      >
        <span className="dark:text-gray-950 dark:text-opacity-50 ">{"("}</span>
        <span className="dark:text-gray-700">{props.title}</span>
        <span className="dark:text-gray-950 dark:text-opacity-50">{")=>"}</span>
      </motion.li>
      {props.data.map((skill, index) => (
        <motion.li
          className="bg-gray-200 dark:text-xs borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index + 1}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index + 1}
        >
          {skill}
        </motion.li>
      ))}
      {/* </ul> */}
    </>
  );
};
