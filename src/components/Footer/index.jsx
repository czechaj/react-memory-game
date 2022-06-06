import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer>
      <summary className={styles.summary}>
        made by{" "}
        <a href="http://github.com/czechaj" target={"_blank"} rel="noreferrer">
          czechaj
        </a>
      </summary>
      <section className={styles.links}>
        <button className={styles.link_btn}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="http://github.com/czechaj"
          >
            <ion-icon clas name="logo-github"></ion-icon>
          </a>
        </button>
        <button className={styles.link_btn}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://linkedin.com/in/cevdet-ziya-erdogan/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </button>
        <button className={styles.link_btn}>
          {" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="http://czechaj-portfolio.netlify.app"
          >
            <ion-icon name="briefcase"></ion-icon>
          </a>
        </button>
      </section>
    </footer>
  );
}

export default Footer;
