import Image from "next/image";

import styles from "./Technologies.module.scss";

export default function Technologies() {
  function techTile(tech, i) {
    return (
      <div key={tech.alt} className={`text-black text-xl mr-6`}>
        <div className="  w-[250px] h-[250px] p-2 flex items-center justify-center ">
          <Image
            src={tech.image}
            alt={tech.alt}
            /*             layout="fill"
            objectFit="contain" */
          />
        </div>
        <div className="bg-gray-500 p-3 mt-3 text-center text-white">
          {tech.alt}
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-screen-2xl mx-auto bg-slate-600 relative z-10 rounded-3xl relative z-10 -mt-8">
        <div className="">
          <HeaderBar id="technologies" text="Technologies We Use" />
          <div className="p-6 py-16 flex bg-slate-800 pb-20">
            <div className=" w-full flex relative">
              <div className="w-full overflow-x-auto ">
                <div className="absolute left-0 right-0 top-0 w-full bg-white h-[250px] " />
                <div className="flex w-full  relative pb-6">
                  {techObj.map((tech) => techTile(tech))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import docker from "../../assets/tech/docker.svg";
import JSLogo from "../../assets/tech/js.svg";
import express from "../../assets/tech/express.png";
import mysql from "../../assets/tech/mysql.svg";
import nextJS from "../../assets/tech/nextJs.svg";
import nodeJS from "../../assets/tech/nodeJS.svg";
import reactJS from "../../assets/tech/react.svg";
import sequelize from "../../assets/tech/sequelize.svg";
import sass from "../../assets/tech/sass.svg";
import git from "../../assets/tech/git.svg";
import nginx from "../../assets/tech/nginx.svg";
import Bios from "../Bios/Bios";
import HeaderBar from "../../common/HeaderBar";

const techObj = [
  {
    image: JSLogo,
    alt: "Javascript",
    name: "Javascript",
  },
  {
    image: nodeJS,
    alt: "NodeJS",
  },
  {
    image: express,
    alt: "Express",
  },
  {
    image: nextJS,
    alt: "NextJS",
  },
  {
    image: reactJS,
    alt: "React",
  },
  {
    image: mysql,
    alt: "MySQL",
  },
  {
    image: docker,
    alt: "Docker",
  },
  {
    image: sequelize,
    alt: "Sequelize",
  },
  {
    image: sass,
    alt: "Sass",
  },
  {
    image: git,
    alt: "Git",
  },
  {
    image: nginx,
    alt: "NGINX",
  },
];
