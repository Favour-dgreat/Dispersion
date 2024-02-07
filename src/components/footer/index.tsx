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
  <h3 className={styles.join}>JOIN OUR COMMUNITY</h3>
  <div style={{ marginBottom: '20px' }}></div>
  <div className={styles.footer_buttons}>
    <RegularButton
      title="Telegram"
      className={styles.showcase_button}
      url="#"
    />
    <RegularButton
      title="Twitter"
      className={styles.showcase_button}
      url="#"
    />
    <RegularButton
      title="Chart"
      className={styles.showcase_button}
      url="#"
    />
  </div>
</div>

    </>
  );
}

export default Footer;