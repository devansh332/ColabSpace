import Link from "next/link";
import { withRouter } from "next/router";
import Styles from "../../../styles/Home.module.scss";

const NavButton = ({ path, icon, label, router }) => (
  <Link href={path}>
    <div
      className={`${Styles.NavButton} ${
        router.pathname === path ? "active" : ""
      }`}
    >
      <span className={Styles.NavButton.icon}>{icon}</span>
      <span className={Styles.NavButton.label}>{label}</span>
    </div>
  </Link>
);

export default withRouter(NavButton);
