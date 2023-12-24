import { Link} from "react-router-dom";
import logo from "../../assets/header/logo.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/hamburger.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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

            <AnchorLink href='#story' style={{textDecoration: 'none'}}>

              Vision
          </AnchorLink>
            {/* <Link
              target="__blank"
              to="#"
            >
              Vision
            </Link> */}
             <AnchorLink href='#features' style={{textDecoration: 'none'}}>

              Features
              </AnchorLink>

              <AnchorLink href='#tokenomics' style={{textDecoration: 'none'}}>

              Tokenomics
              </AnchorLink>
            
          </div>
          <div>
            <RegularButton
              title="Connect Wallet"
              className={styles.navbar_button}
              url="#"
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

<AnchorLink href='#story' style={{textDecoration: 'none'}}>

  Vision
</AnchorLink>


 <AnchorLink href='#features' style={{textDecoration: 'none'}}>

  Features
  </AnchorLink>

  <AnchorLink href='#tokenomics' style={{textDecoration: 'none'}}>

  Tokenomics
  </AnchorLink>
            <Link to="#">Tokenomics</Link>
          <RegularButton
            title="Connect Wallet"
            className={styles.sidebar_button}
            url="#"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;