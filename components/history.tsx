"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import CallOut, { SectionTitle } from "./callOut";
import Image from "next/image";

export default function History() {
  const { ref } = useSectionInView("History");
  const listLabelStyle =
    "font-base text-orange-300 block  text-left text-lg mb-4";
  const listStyle = "list-disc list-inside text-left";
  const childListStyle = "list-disc list-inside ml-4 text-left";
  const listItem = "mb-4 leading-6";
  const parentLI =
    "border p-6 px-8 rounded-lg border-gray-500 mb-6 border-opacity-40";
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28 dark:text-white/80 font-light text-sm"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>History</SectionHeading>
      <div className="mb-16">
        <SectionTitle text=" Music then Code..." />

        <p className="mb-6">
          After completing my BFA from York University, I pursued my passion for
          music and the recording arts, and completed a diploma program at the
          Ontario Institute of Audio Recording Technology. Following that I
          secured a position at a studio in Toronto, and worked on many album
          projects as and Audio Engineer, including a Juno Award winning album
          for Toronto Mass Choir.
        </p>
        <p className="mb-6">
          During that position, the opportunity arose to contribute to an online
          eCommerce Music web site to sell albums (physical CD's) for the
          company. A more experience developer built the initial version, while
          worked on the front-end dev and became the site maintainer.
        </p>
        <CallOut>
          <>
            This was my first exposure to dynamic server pages, and I{" "}
            <span className="font-bold text-purple-700 ">
              learned a lot about how PHP worked
            </span>
            , including the raw page postback model. This added greatly to what
            I already knew about HTML and CSS.
          </>
        </CallOut>
      </div>
      <div className="mb-16">
        <SectionTitle text="Agency work in Toronto..." />
        <p className="mb-6">
          After leaving that job, I took some temporary work as an IT
          Technician, until I was able to secure a Front End Developer position
          at{" "}
          <span className="font-bold text-orange-200">
            Zeppelin Communications
          </span>
          . This was my first agency position, and was great experience for
          working with high end clients.
        </p>
        <p className="mb-12">
          <Image
            src="/cineplex.png"
            width={200}
            height={200}
            alt="Cineplex Logo"
            className="md:float-right block w-full md:w-44 md:ml-8 mb-8 rounded mt-2"
          />
          The most important project I worked on there was as a Developer for
          the{" "}
          <span className="font-bold text-orange-200">
            Cineplex Galaxy Theatres
          </span>{" "}
          national web site. We managed this important site with a small
          internal team. Intially I managed the front-end work, and within 3
          years, I was managing the whole site as a Full Stack Developer.
        </p>
        <p className="mb-12">
          <Image
            src="/cineplex_site.jpg"
            width={300}
            height={300}
            alt="Cineplex Logo"
            className="md:float-left block w-full md:w-48 md:mr-8 mb-8 mt-2 rounded"
          />
          This project was in the design phase when I joined Zeppelin
          Communications + Design. I was closely involved with the initial
          design, and then went on to build out the front end implementation of
          the website. Working with a Senior Web Developer who built the back
          end of the site, I was able to get up to speed on how ASP.NET worked
          and eventually became the sole maintainer of the site, both front and
          back end.
        </p>
        <p className="mb-12">
          The time was great experience in learning how to work on an important
          site with millions of visitors. Downtime was unthinkable, and we
          worked hard to keep the site up and running at all times.
        </p>
        <CallOut>
          <>
            <span className="font-bold uppercase">Tech Note</span> - The MSSQL
            database ran jobs every night to pull updated Theatre Showtimes data
            from an aggregation company in the US. This was pulled into the
            database via an automated FTP transfer and execution of a DTO in
            MSSQL. This was automated, but required us to keep tabs on it in
            case of errors.
          </>
        </CallOut>
      </div>

      <div className="mb-16">
        <SectionTitle text="Founded Local Advertising Startup..." />
        <p className="mb-6">
          <span className="md:float-right block w-full md:w-64 md:ml-8 mb-8 rounded mt-2 bg-white py-8 pl-6 pr-0">
            <Image
              src="/ishoplogo.jpg"
              width={300}
              height={300}
              alt="iShopLocally Logo"
            />
          </span>
          When our first child was born, I made the decision to leave the agency
          and work closer to home. As part of that plan I launched a startup
          with a partner called{" "}
          <span className="font-bold text-orange-200">
            Connect Media Solutions
          </span>{" "}
          that focused on selling ads to local businesses in a custom printed
          flyer. My partner sold the ads, and I was responsible for the design
          and development of the website, and the management of the print
          production.{" "}
        </p>
        {/*<CallOut>
          <>
            The purpose of the web site was to{" "}
            <span className="font-bold text-purple-700 ">
              display the customer's ad (the web version) as well as the web
              coupons
            </span>{" "}
            that the public could print out and bring to the physical store.
          </>
        </CallOut>

        <p>
          This was a great experience in learning how to run a business, and I
          learned a lot about sales and marketing. The web site was a precursor
          to the Groupon site (which came later).
        </p> */}
      </div>

      <div className="mb-16">
        <SectionTitle text="Launched Full Service Freelance Web Development Business..." />
        <p className="mb-6">
          In addition to the marketing company, I also launched{" "}
          <span className="font-bold text-orange-200">
            Resonance Media + Design
          </span>
          , in order to provide web design and development services to local
          businesses. I worked with many clients over the years, and built a
          number of web applications and sites for them. I also provided web
          hosting and management services.
        </p>
        <p className="font-bold">Projects of Note:  </p>
        <ul>
          <li className={parentLI}>
            <span className={listLabelStyle}>
              Elearnology Inc - Click To Learn LMS
            </span>
            <ul className={listStyle}>
              <li className={listItem}>
                Rebuilt entire Online Leader LMS as a serverless platform using
                Next.Js, Vercel an Planetscale (MySQL)
              </li>
              <li className={listItem}>
                Migrated user data from MSSQL database to MySQL database in
                Planetscale.
              </li>
              <li className={listItem}>
                Migrated ORM model management from Entity Framework in .NET to
                Prisma in Next.js.
              </li>
              <li className={listItem}>
                Priorities for the rebuild were:
                <ul className={childListStyle}>
                  <li className={listItem}>Moving to a more modern stack</li>
                  <li className={listItem}>Improving performance</li>
                  <li className={listItem}>
                    Moving from monolithic server hosting to separate vendors
                    for each domain (app, db, object store)
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={parentLI}>
            <span className={listLabelStyle}>
              Elearnology Inc - Online Leader LMS
            </span>
            <ul className={listStyle}>
              <li className={listItem}>
                Designed and built a custom LMS (Learning Management System) for
                eLearnology where they could host their xAPI formatted eLearning
                courses for their many corporate clients.
              </li>
              <li className={listItem}>
                Many clients were in the Recreation space (City of Markham,
                Newmarket, Toronto, Halton Hills). Built and managed system for
                8+ years.
              </li>
              <li className={listItem}>
                Built custom LMS sales eCommerce cart with Vue.js front end.
              </li>
              <li className={listItem}>
                Added custom Zapier API integration to allow clients to sell
                courses with external platforms and add the new students to
                their courses in the LMS.
              </li>
            </ul>
          </li>
          <li className={parentLI}>
            <div className="md:float-right block w-full md:w-64 md:ml-8 mb-8 rounded mt-2 b border border-black/0 overflow-clip">
              <Image
                src="/higfive.jpg"
                width={300}
                height={300}
                alt="HIGH FIVE Page"
              />
            </div>
            <span className={listLabelStyle}>
              Parks & Recreation Ontario HIGH FIVE National Database
            </span>
            <ul className={listStyle + " mb-4"}>
              <li className={listItem}>
                Provided development support for the national web application
                for HIGH FIVE Canada program for 4 years. This was a legacy .NET
                web application with an MSSQL database.
              </li>
              <li className={listItem}>
                It was a very large application with many features and a complex
                database schema (1000+ stored procedures).
              </li>
              <li className={listItem}>
                It managed training and certification records for hundreds of
                thousands of users across Canada with over 10 years of records.
              </li>
            </ul>
            <CallOut>
              This project was very challenging as a developer, because it
              required balancing an understanding of the original (undocumented)
              application design, versus the way the staff understood and used
              the application in the present, against the need to make changes
              to the application to meet new requirements.
            </CallOut>
          </li>

          <li className={parentLI}>
            <span className={listLabelStyle}>
              George Brown College <br />
              Choices Career Course
            </span>{" "}
            <div className="md:w-2/4 md:float-right md:ml-8 mb-8 rounded mt-2 b grid grid-cols-2 md:grid-cols-2 gap-2">
              <div className="rounded border border-black/0 overflow-clip">
                <Image
                  src="/gblogo.svg"
                  width={150}
                  height={100}
                  alt="George Brown Course Page"
                  className="object-contain w-full "
                />
              </div>
              <div className="rounded border border-black/0 overflow-clip">
                <Image
                  src="/gb1.jpg"
                  width={150}
                  height={100}
                  alt="George Brown Course Page"
                  className="object-cover  w-full h-full"
                />
              </div>
              <div className="rounded border border-black/0 overflow-clip">
                <Image
                  src="/gb2.jpg"
                  width={150}
                  height={100}
                  alt="George Brown Course Page"
                  className="object-contain  w-full"
                />
              </div>
              <div className="rounded border border-black/0 overflow-clip">
                <Image
                  src="/gb3.jpg"
                  width={150}
                  height={100}
                  alt="George Brown Course Page"
                  className="object-contain  w-auto"
                />
              </div>
            </div>
            <ul className={listStyle}>
              <li className={listItem}>
                Built and configured course and course modules on George Brown's
                Canvas LMS, including custom theme changes via CSS and
                Javascript override files.
              </li>
              <li className={listItem}>
                Added custom Javascript functionality to Storyline360 eLearning
                modules in order to send students' answer data to the API
                endpoint on eLearnology's external server.
              </li>
              <li className={listItem}>
                Created a custom API endpoint on external server for automatic
                generation of a Student Action Plan PDF of Course results.
                Generation of the PDF required AODA-compliance Accesibility for
                screen-readers as well as custom fonts to match the Course
                branding.
              </li>
            </ul>
            <CallOut>
              In order to deliver the PDF Action Plan requirements, I had to
              integrate the Apache FOP Design library into the application. This
              gave us the flexiblity to deliver an accessible PDF along with the
              graphic design requirements.
            </CallOut>
          </li>

          <li className={parentLI}>
            <span className={listLabelStyle}>
              Engine Control Systems Distributor Warranty Portal
            </span>
            <ul className={listStyle}>
              <li className={listItem}>
                ECS was a manufacturer of specialized emission-reducing exhaust
                products for industrial vehicles.
              </li>
              <li className={listItem}>
                Built web application to all ECS to streamline the management of
                their North American Distributor Warranty programs.
              </li>
            </ul>
          </li>
          <li className={parentLI}>
            <div className="ml-16 mb-16 mt-2 w-full md:w-2/4 float-right block  aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/j8y5CJKOrbE?si=nknIU3PhTE_mj2gZ?rel=0"
                title="Dottlers Shoe Rendering"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <span className={listLabelStyle}>
              Dottlers Custom Shoes - Automated Video Rendering System on AWS
            </span>
            <ul className={listStyle}>
              <li className={listItem}>
                Goal of startup was to create a system to create a high top shoe
                that was printed with a custom design. The design would be
                submitted by various artists around the world. The design that
                had a minimum level of pre-orders would be manufactured.
              </li>
              <li className={listItem}>
                The client had a requirement to be able to generate turntable
                animations of the shoe with various design patterns.
              </li>
              <li className={listItem}>
                I created the Blender 3D template for the shoe model and render
                scene, and created custom Python scripts to ingest a JPG file
                with the design. Blender would then render out all the frames of
                the animation as PNG files and combine them into an MP4 video
                file.
              </li>
              <li className={listItem}>
                This process was hosted on an AWS EC2 instance which I helped to
                set up.
              </li>
            </ul>
          </li>
          <li className={parentLI}>
            <span className={listLabelStyle}>
              Digilease Online Lease Management System
            </span>
            <ul className={listStyle}>
              <li className={listItem}>
                This web application allowed the customer to obtain and manage
                lease agreement information more easily from university/college
                students who were applying to lease properties. The app greatly
                streamlined their existing paper-based application process.
              </li>
            </ul>
          </li>
          <li className={parentLI}>
            <div className="md:float-right block w-full md:w-2/4 md:ml-8 mb-8 rounded mt-2 border border-black/0 overflow-clip">
              <Image
                src="/centreville.jpg"
                width={300}
                height={300}
                alt="Centreville Page"
                className="w-full object-cover"
              />
            </div>
            <span className={listLabelStyle}>
              Centreville Amusement Park Website and eCommerce Ticketing System
              + Server Management
            </span>
            <ul className={listStyle}>
              <li className={listItem}>
                I created a new web site for Centre Island Amusement Park, which
                required guest information and marketing details, as well as a
                fully functioning eCommerce Ticket Sales system.
              </li>
              <li className={listItem}>
                I built the eCommerce system with an integration with Moneris as
                the payment processor. Integration with Verified By VISA and
                Mastercard Secure authentication was also completed.
              </li>
              <li className={listItem}>
                Custom receipts with dynamically generated barcodes were
                created.
              </li>
              <li className={listItem}>
                An admin tool for redeeming the tickets at the ticket booth on
                location was also created. Staff could scan the printed ticket
                barcode with a barcode scan wand.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
