import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,

} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import gatorJobs from "../public/GatorJobs_preview.png";
import postIt from "../public/PostIt_preview.png";
import garageBand from "../public/GarageBand_preview.png";
import noma from "../public/coming_soon.png";
import tankGame from "../public/tankGame_preview.png";
import spendingTracker from "../public/spendingTracker_preview.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nomar Olivas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" text-xl">LinkedIn</h1>
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" target="_blank" rel="noopener noreferrer"
                  href="Nomar_Olivas_Resume.pdf"
                download>
                  Resume
                </a>

                {/* <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 text- inline-flex">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Resume</span>
                </button> */}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nomar Olivas
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Recent graduate from San Francisco State University with a B.S. in Computer Science.
            I'm passionate in contributing to projects that are revolutionary and beneficial to everyday life.
            Proficient in Java with experience in Python, JavaScript, CSS, HTML, C++, and Swift.
            </p> */}
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              <AiFillLinkedin />
              
              <AiFillGithub/>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Recent graduate from San Francisco State University with a B.S. in Computer Science.
            I'm passionate in contributing to projects that are revolutionary and beneficial to everyday life.
            {/* Proficient in Java with experience in Python, JavaScript, CSS, HTML, C/C++, and Swift. */}
              {/* <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use. */}
            </p>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
            
          </div>
          <div className="lg:flex gap-10">
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              Programming Languages
              </h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className="py-4 text-teal-600">Proficient In:</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <h4 className="py-4 text-teal-600">Experience In:</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">C/C++</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              Frameworks and Software
              </h3>
              {/* <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p> */}
              <h4 className="py-2 text-teal-600">Proficient In:</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <h4 className="py-2 text-teal-600">Experience In:</h4>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">ExpressJs</p>
              <p className="text-gray-800 py-1">Tailwindcss</p>
              <p className="text-gray-800 py-1">Google Cloud Platform</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Skills and Strengths</h3>
              {/* <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p> */}
              <h4 className="py-4 text-teal-600">What I Can Bring:</h4>
              <p className="text-gray-800 py-1">Organized</p>
              <p className="text-gray-800 py-1">Dedicated</p>
              <p className="text-gray-800 py-1">Persistant</p>
              <p className="text-gray-800 py-1">Collaborator</p>
              <p className="text-gray-800 py-1">Adaptable</p>
              <p className="text-gray-800 py-1">Reliable Teammate</p>
              <p className="text-gray-800 py-1">Spanish Speaker</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/nomarolivas/GatorJobs" class="font-bold text-teal-600 dark:text-teal-600 hover:underline">GatorJobs</a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={gatorJobs}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/nomarolivas/PostIt" class="font-bold text-teal-600 dark:text-teal-600hover:underline">Post It</a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={postIt}
              />
            </div>
            <div className="basis-1/3 flex-1 " href="#">
            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/nomarolivas/GarageBand" class="font-bold text-teal-600 dark:text-teal-600 hover:underline">GarageBand</a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={garageBand}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/nomarolivas/Noma-StoreFront" class="font-bold text-teal-600 dark:text-teal-600 hover:underline">Noma Storefront</a>

              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={noma}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/nomarolivas/Tank-Wars-Game" class="font-bold text-teal-600 dark:text-teal-600 hover:underline">Tank Wars Game</a>

              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={tankGame}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/nomarolivas/Spending_Tracker" class="font-bold text-teal-600 dark:text-teal-600 hover:underline">Spending Tracker</a>

              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={spendingTracker}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
