import styles from "./footer.module.css";
import logo from "../../assets/footer/$DPS.png";
import { Link } from "react-router-dom";
import {
  TelegramIcon,
  InstagramIcon,
  LinkednIcon,
  TwitterIcon,
} from "./FooterIcons";
import { RegularButton } from "../buttons";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_inner_left}>
            <img src={logo} alt="devfestlogo23" />
            <Link
              className={styles.footer_res_addition}
              target="__blank"
              to="#"
            >
              <p>Join the community here</p>
            </Link>
          </div>
          <div
            className={`${styles.footer_inner_middle} ${styles.footer_res_removal}`}
          >
           <div  style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 36, display: 'inline-flex'}}>
<div className={styles.footer_tt1} style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}><AnchorLink href='#story' style={{textDecoration: 'none', color:'white'}}>

Vision
</AnchorLink>
</div>
<div className={styles.footer_tt2} style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}> <AnchorLink href='#features' style={{textDecoration: 'none', color:'white'}}>

Features
</AnchorLink></div>
<div className={styles.footer_tt3} style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}> <AnchorLink  href='#tokenomics' style={{textDecoration: 'none', color:'white'}}>

Tokenomics
</AnchorLink></div>
</div>





 
          </div>
          <div className={styles.footer_inner_right}>
            <div
              className={`${styles.footer_inner_middle} ${styles.footer_res_addition}`}
            >
              <p>Saturday, 4th November, 2023</p>
              <p>Ado-Ekiti, Ekiti State, Nigeria</p>
              <p>For enquiry, sponsorship or partnership</p>
              <Link
              className={styles.footer_mail}
              target="__blank"
              to="#"
            >
            <p>Contact : faith.oni@gdgadoekiti.dev</p>
            </Link>
            </div>
            <Link
              className={styles.footer_res_removal}
              target="__blank"
              to="#"
            >
              <p className={styles.footer_p}>Stay Updated <br/>  Join Our mailing list</p>
            </Link>
            <div style={{ borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
  <div style={{  borderRadius: 5, overflow: 'hidden', border: '1px white solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
    <input
      type="text"
      placeholder="Enter your Email"
      style={{  background: 'inherit', color:'white', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', border: 'none', outline: 'none', width: '100%' }}
    />
  <RegularButton
              className={styles.footer_button}
              url="#"
              title={"send"}
            />
      
  </div>
  
</div>

            <div className={styles.footer_inner_right_flex}>
              <Link target="__blank" to="#">
                <TwitterIcon />
              </Link>
              <Link target="__blank" to="#">
                <TelegramIcon />
              </Link>

              <Link
                target="__blank"
                to="#"
              >
                <LinkednIcon />
              </Link>
              <Link target="__blank" to="#">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
      (c) 2023 All rights reserved. 
      </div>
    </>
  );
}

export default Footer;