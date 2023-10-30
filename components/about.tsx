"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import CallOut, { SectionTitle } from "./callOut";
import Image from "next/image";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28 dark:text-white/80 font-light text-sm"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="px-8">
        <p className="mb-4">
          After graduating with a BFA degree from{" "}
          <span className="font-medium">York University</span> and a diploma
          from OIART, I pursued my interests in music and studio engineering.
          While doing this, I gained exposure to design work and web
          programming. This eventually evolved into a passion for building web
          sites and applications, as I grew in my understanding of how the
          technology worked.
        </p>
        <p className="mb-4">
          Over the years, I have worked in various places, but am now running my
          own development consultancy, and enjoy life with my wife and
          four kids at our home in Markham, ON.
        </p>
        <p className="mb-4">
          I still love music, and as a musician I am involved in a number of
          local bands.
        </p>
      </div>
    </motion.section>
  );
}
