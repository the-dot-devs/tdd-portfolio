import Image from "next/image";

import dmrPixel from "../../assets/dmrPixel.png";
import jpsPixel from "../../assets/jpsPixel.png";
import github from "../../assets/github.svg";
import email from "../../assets/email.svg";
import resume from "../../assets/resume.svg";
import globe from "../../assets/globe.svg";
import HeaderBar from "../../common/HeaderBar";
/* import jpsResume from "../../assets/jpsResume.pdf"; */

import Link from "next/link";

export default function Bios() {
  function profileTile(profile) {
    return (
      (<div
        key={profile.name}
        className="max-w-lg flex flex-col justify-between text-white bg-slate-700 p-4 rounded-lg space-y-4 my-4 lg:mx-4"
      >
        <div>
          <div className="flex justify-center">
            <div
              className={`rounded-full p-3 `}
              style={{ backgroundColor: profile.color }}
            >
              <div className=" rounded-full overflow-hidden bg-white flex justify-center items-center">
                <Image
                  src={profile.img}
                  alt={profile.name}
                  quality={100}
                  className={""}
                  style={profile.customImgStyle}
                />
              </div>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-3xl text-center">{profile.name}</h2>
          </div>
          <div className="">
            <p>{profile.bio}</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white px-2 py-3 rounded-md bg-slate-500">
          <div className="w-[40px] flex items-center">
            <Link href={profile.githubLink}>

              <Image src={github} alt="Github" />

            </Link>
          </div>
          <div className="w-[40px]  flex items-center">
            <Link href={`mailto:${profile.email}`}>

              <Image src={email} alt="Email" />

            </Link>
          </div>

          <div className="w-[40px]  flex items-center">
            <Link href={profile.resume}>

              <Image src={resume} alt="resume" />

            </Link>
          </div>

          <div className="w-[40px]  flex items-center">
            <Link href={profile.portfolioLink} className="hover:fill-sky-500">

              <Image src={globe} alt="Personal portfolio" />

            </Link>
          </div>
        </div>
      </div>)
    );
  }

  return (
    <section className="w-full -mt-8">
      {/*  h-screen bg-circuit-flipped */}
      <div className="  max-w-screen-2xl mx-auto bg-slate-800 rounded-3xl relative z-10">
        <HeaderBar id="aboutUs" text="The Devs" />
        <div className="w-full flex flex-wrap justify-center pt-4 pb-20">
          <div className="w-full flex flex-wrap justify-center ">
            {biosRecords.map((profile) => profileTile(profile))}
          </div>
        </div>
      </div>
    </section>
  );
}

const biosRecords = [
  {
    name: "Derek Robertson",
    bio: `Derek Robertson is a Full Stack Engineer raised and currently working from the SF Bay Area. Derek has had a lifelong curiosity of understanding how technologies work and develop that's grown to be a lucrative passion in software engineering. Derek's worked everything from electro-mechanical engineering related fields to optimization of the latest trending web stacks. With a scrupulous attention to detail, Derek can help make sure your next big project is a cut above the competition.  `,
    img: dmrPixel,
    githubLink: "https://github.com/dmrwebdev",
    email: "dmr.webdev@gmail.com",
    resume: "/Derek_Robertson_TDD_Resume_2021.pdf",
    portfolioLink: "https://www.developwithderek.com/",
    customImgStyle: "top-[20px]",
    color: "#0e7490",
  },
  {
    name: "Josef Saltz",
    bio: `Josef Saltz is a Full Stack Engineer also hailing from the SF Bay Area. Having years of experience working technology positions for large-scale organizations in the public sector bundled with a lifelong pursuit of tinkering and hacking has led to a strong proficiency in debugging and understanding UX. Josef's written in everything from 32-bit Assembly to Python in MITx courses, which has led to an extremely versatile set of skills and experience to bring to your next big project.`,
    img: jpsPixel,
    customImgStyle: { top: "20px" },
    githubLink: "https://github.com/JosefSaltz",
    email: "jps.webdev@gmail.com",
    resume: "/Josef_Saltz_TDD_Resume_2021.pdf",
    portfolioLink: "https://www.josefsaltz.com/",
    color: "#031e2f",
  },
];

/*         <div className="p-6 py-16 flex bg-slate-700 pb-20">
          <div className="flex flex-wrap mx-auto justify-center">
            {servicesObject.map((service) => (
              <div
                key={service.text}
                className="max-w-[250px] max-h-[250px] flex flex-col justify-end mx-8 my-4"
              >
                <div>{service.svg}</div>
                <div className="text-center text-white">{service.text}</div>
              </div>
            ))}
          </div>
        </div> */
