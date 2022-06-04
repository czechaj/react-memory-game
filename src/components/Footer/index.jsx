import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer>
      <summary>made by cze</summary>
      <section className={styles.links}>
        <figure>github</figure>
        <figure>linkedin</figure>
        <figure>portfolio</figure>
      </section>
    </footer>
  );
}

export default Footer;
