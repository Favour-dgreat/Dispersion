import { Link} from "react-router-dom";
import logo from "../../assets/header/logo.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/hamburger.svg";
import { useState } from "react";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_inner}>
          <img src={logo} alt="dispersion swap" />
          <div className={styles.navbar_ul}>
            <Link to="/">Home</Link>
            <Link
              target="__blank"
              to="http://bit.ly/devfestado23sponsorshipdeck"
            >
              Vision
            </Link>
            <Link to="https://bit.ly/devfestado23callforpartners">
              Roadmap
            </Link>
            <Link to="https://shop.devfestadoekiti.com/">Tokenomics</Link>
          </div>
          <div>
            <RegularButton
              title="Connect Wallet"
              className={styles.navbar_button}
              url="https://bit.ly/devfestado23"
            />
            <img
              src={hamburger}
              className={styles.navbar_hamburger}
              onClick={openNav}
              alt="menu"
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.sidenav} ${
          isNavOpen ? `${styles.sidenav_show}` : ''
        }`}
      >
        <div className={styles.sidenav_inner}>
          <a
            href="javascript:void(0)"
            className={styles.closebtn}
            onClick={closeNav}
          >
            &times;
          </a>
          <Link to="/">Home</Link>
            <Link
              target="__blank"
              to="http://bit.ly/devfestado23sponsorshipdeck"
            >
              Vision
            </Link>
            <Link to="https://bit.ly/devfestado23callforpartners">
              Roadmap
            </Link>
            <Link to="https://shop.devfestadoekiti.com/">Tokenomics</Link>
          <RegularButton
            title="Connect Wallet"
            className={styles.sidebar_button}
            url="https://bit.ly/devfestado23"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;