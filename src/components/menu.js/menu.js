// Menu.js
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Menu.module.scss";

import facebook from "../../assets/social/fb.svg";
import instagram from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import email from "../../assets/social/email.svg";
import linkedIn from "../../assets/social/linkedin.svg";

const Menu = ({ open, setOpen }) => {
  const styled = { transform: "translateX(0)" };

  //TODO DUPLICATE
  // TODO EXTRACT CONTACT MAP
  function contactTile(contact) {
    return (
      <div>
        <div className="w-[75px] h-[75px] flex items-center mx-5 my-6">
          <Link href={contact.link}>
            <a>
              <Image src={contact.img} alt={contact.alt} />
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.menu} `} open={open} style={open ? styled : {}}>
      <div className="grow flex flex-col justify-center">
        <Link href="#services">
          <a onClick={() => setOpen(false)} className="text-center">
            Services
          </a>
        </Link>
        <Link href="#aboutUs">
          <a onClick={() => setOpen(false)} className="text-center">
            About us
          </a>
        </Link>
      </div>
      <div className="mx-auto flex flex-wrap justify-center relative">
        {contactMap.map((contact) => contactTile(contact))}
      </div>
    </div>
  );
};
export default Menu;

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
