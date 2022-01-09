// Menu.js
import Link from "next/link";
import React from "react";
import styles from "./Menu.module.scss";

const Menu = ({ open, setOpen }) => {
  const styled = { transform: "translateX(0)" };

  return (
    <div className={`${styles.menu} `} open={open} style={open ? styled : {}}>
      <div className="grow flex flex-col justify-center">
        <Link href="/">
          <a onClick={() => setOpen(false)}>
            <span role="img" aria-label="about us">
              &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
            </span>
            About us
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => setOpen(false)}>
            <span role="img" aria-label="price">
              &#x1f4b8;
            </span>
            Services
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => setOpen(false)}>
            <span role="img" aria-label="contact">
              &#x1f4e9;
            </span>
            Contact
          </a>
        </Link>
      </div>
      <div>CONTACTS BVUTONAXFMLKJ#@</div>
    </div>
  );
};
export default Menu;
