import facebook from "../../assets/social/fb.svg";
import instagram from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import email from "../../assets/social/email.svg";
import linkedIn from "../../assets/social/linkedin.svg";
import Image from "next/image";

import HeaderBar from "../../common/HeaderBar";
import Link from "next/link";
import { useState } from "react";

import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className="max-w-screen-2xl mx-auto bg-slate-600 rounded-3xl relative z-10 -mt-10">
      <div>
        <HeaderBar id="contact" text="Contact Us" />
        <div className="w-full flex  justify-center p-6  flex bg-slate-800 rounded-b-lg">
          <div className="mx-auto flex flex-wrap justify-center relative">
            {contactMap.map((contact) => ContactTile(contact))}
          </div>
        </div>
      </div>
    </section>
  );
}

//TODO DUPLICATE
// TODO EXTRACT CONTACT MAP
function ContactTile(contact) {
  const [hovered, setHovered] = useState(false);

  const hoveredStyle = {};

  return (
    <div key={contact.alt}>
      <div
        className={`w-[100px] h-[100px] flex items-center m-4 ${
          hovered ? styles.hovered : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link href={contact.link}>
          <a>
            <Image src={contact.img} alt={contact.alt} />
          </a>
        </Link>
      </div>
    </div>
  );
}

const contactMap = [
  {
    img: email,
    alt: "Email",
    link: "mailto:thedotdevs@gmail.com",
  },
  {
    img: linkedIn,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/company/the-dot-devs/",
  },
  {
    img: facebook,
    alt: "Facebook",
    link: "https://www.facebook.com/thedotdevs",
  },
  {
    img: instagram,
    alt: "Instagram",
    link: "https://www.instagram.com/thedotdevs/",
  },
  {
    img: twitter,
    alt: "Twitter",
    link: "https://twitter.com/thedotdevs",
  },
];
