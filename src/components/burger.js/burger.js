// Burger.js
import React from "react";
import styles from "./Burger.module.scss";

const Burger = ({ open, setOpen, className }) => {
  return (
    <div
      className={`${styles.burger} ${className}`}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Burger;
