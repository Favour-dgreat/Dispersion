import styles from "./footer.module.css";
import logo from "../../assets/footer/$DPS.png";
import footer from "../../assets/footer/Footer.png";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkednIcon,
  TwitterIcon,
} from "./FooterIcons";

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
              to="https://gdg.community.dev/gdg-ado-ekiti"
            >
              <p>Join the community here</p>
            </Link>
          </div>
          <div
            className={`${styles.footer_inner_middle} ${styles.footer_res_removal}`}
          >
            <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 68, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 33, display: 'inline-flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 36, display: 'flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>Vision</div>
            <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>Roadmap</div>
        </div>
        <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Tokenomics</div>
    </div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 36, display: 'inline-flex'}}>
        <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>Community</div>
        <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>About</div>
    </div>
</div>
           
          </div>
          <div className={styles.footer_inner_right}>
            
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex'}}>
        <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>Stay updated</div>
        <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>Join our mailing list</div>
    </div>
    <div style={{borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{height: 40, paddingLeft: 11, paddingRight: 153, borderRadius: 5, overflow: 'hidden', border: '1px white solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>Enter your Email</div>
        </div>
            <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        </div>
    </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
      Unlock the Future of finance:
    Where Innovation meets Decentralization (c) 2023 All Right Reserved
      </div>   
    </>
  );
}

export default Footer;
