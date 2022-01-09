import Image from "next/image";

import dmrPixel from "../../assets/dmrPixel.png";
import jpsPixel from "../../assets/jpsPixel.png";
import github from "../../assets/github.svg";
import email from "../../assets/email.svg";
import globe from "../../assets/globe.svg";
import HeaderBar from "../../common/HeaderBar";
import Link from "next/link";

export default function Bios() {
  function profileTile(profile) {
    return (
      <div
        key={profile.name}
        className="max-w-lg text-white bg-slate-700 p-4 rounded-lg space-y-4 my-4 lg:mx-4"
      >
        {/* Circle Pic */}
        <div className="">
          <div
            className={`rounded-3xl
         ${profile.color} p-3 `}
          >
            <div
              className="rounded-3xl
         overflow-hidden bg-white flex justify-center items-center"
            >
              <Image
                src={profile.img}
                alt={profile.name}
                quality={100}
                className=""
              />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <h2 className="text-3xl text-center">{profile.name}</h2>
        </div>

        <div className="">
          <p>{profile.bio}</p>
        </div>

        <div className="flex justify-between items-center bg-white p-2 rounded-md bg-slate-500">
          <div className="w-[40px] flex items-center">
            <Link href={profile.githubLink}>
              <a>
                <Image src={github} alt="Github" />
              </a>
            </Link>
          </div>
          <div className="w-[40px]  flex items-center">
            <Image src={email} alt="Email" />
          </div>
          <div className="w-[40px]  flex items-center">
            <Link href={profile.portfolioLink}>
              <a className="hover:fill-sky-500">
                <Image src={globe} alt="Personal portfolio" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full -mt-8">
      {/*  h-screen bg-circuit-flipped */}
      <div className="max-w-screen-2xl mx-auto bg-slate-600 rounded-3xl relative z-10">
        <HeaderBar id="aboutUs" text="The Devs" />
        <div className="w-full flex flex-wrap justify-center ">
          <div className="w-full flex flex-wrap justify-center">
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
    bio: `Lorem ipsum I'm gay If you fail to follow distinct styles or you name
          a component without a meaningful descriptor, all your efforts can be
          wasted in seconds. On the other hand, the naming tasks If you’re used
          to working with icon fonts, one thing you might enjoy about them is
          how easy it is to change the color. You’re largely limited to a single
          color with icon fonts in a way`,
    img: dmrPixel,
    githubLink: "https://github.com/dmrwebdev",
    portfolioLink: "https://www.developwithderek.com/",
    color: "bg-cyan-700",
  },
  {
    name: "Josef Saltz",
    bio: `Lorem ipsum I'm gay If you fail to follow distinct styles or you name
          a component without a meaningful descriptor, all your efforts can be
          wasted in seconds. On the other hand, the naming tasks If you’re used
          to working with icon fonts, one thing you might enjoy about them is
          how easy it is to change the color. You’re largely limited to a single
          color with icon fonts in a way`,
    img: jpsPixel,
    githubLink: "https://github.com/JosefSaltz",
    portfolioLink: "https://www.josefsaltz.com/",
    color: "bg-orange-700",
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
