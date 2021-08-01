import React from "react";
import Link from "next/link";
import NavButton from "./NavButton";
import Styles from "../../../styles/Home.module.css";
const SideNav = ({ navButtons }) => {
  return (
    <ul className={Styles.sidenavStaticList}>
      {navButtons.map((button, index) => {
        return (
          <li key={index}>
            <NavButton
              path={button.path}
              icon={button.icon}
              label={button.label}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SideNav;
