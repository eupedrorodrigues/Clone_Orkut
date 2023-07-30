import React from "react";
import styles from "./Information.module.css";

import star from "../../../../assets/Star.svg";
import smile from "../../../../assets/Smiley.svg";
import thumb from "../../../../assets/ThumbsUp.svg";
import heart from "../../../../assets/Heart.svg";
import Field from "../field/Field";

function Information() {
  return (
    <>
      <section className={styles.info}>
        <header className={styles.welcome}>
          <h1> Boa tarde, Iuri Silva</h1>
          <input
            type="text"
            placeholder="Programar sem café é igual poeta sem poesia."
            readOnly
          ></input>
        </header>
        <section>
          <section className={styles.info_section}>
            <p>Fãs</p>
            <p>Confiável</p>
            <p>Legal</p>
            <p>Sexy</p>
          </section>

          <div className={styles.icons}>
            <img src={star} alt="fans-icon" />
            <img src={star} alt="fans-icon" />
          </div>

          <div className={styles.icons}>
            <img src={smile} alt="fans-icon" />
            <img src={smile} alt="fans-icon" />
          </div>

          <div className={styles.icons}>
            <img src={thumb} alt="fans-icon" />
            <img src={thumb} alt="fans-icon" />
            <img src={thumb} alt="fans-icon" />
          </div>

          <div className={styles.icons}>
            <img src={heart} alt="fans-icon" />
            <img src={heart} alt="fans-icon" />
          </div>
        </section>
        <section>
          <Field />
        </section>
      </section>
    </>
  );
}

export default Information;
