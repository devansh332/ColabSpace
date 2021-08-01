import React from "react";
import SideNav from "../layoutComponents/SideNav";
import Style from "../../../styles/Home.module.scss";
import navButtons from "./config/NavButtonConfig";

const SiteLayout = ({ isSideNavBar = true, children }) => {
  return (
    <div className={Style.sitelayout}>
      {isSideNavBar ? <SideNav navButtons={navButtons} /> : null}
      {children}
    </div>
  );
};

export const getLayout = (page) => <SiteLayout isSideNavBar>{page}</SiteLayout>;

export default SiteLayout;
