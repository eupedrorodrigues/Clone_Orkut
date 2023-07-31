import React from "react";
import { FaSistrix } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import styles from "./Navbar.module.css";
import nav_profile from "../../../../assets/iuricode 1.svg";
import logo from "../../../../assets/logo-orkut.svg";

import Container from "../container/Container";

type Props = {};

function Navbar(props: Props) {
  return (
    <nav className={styles.navbar}>
      <Container>
        <img src={logo} alt="orkut-logo"></img>
        <ul className={styles.list}>
          <li className={styles.item}>Início</li>
          <li className={styles.item}>Perfil</li>
          <li className={styles.item}>Comunidades</li>
          <li className={styles.item}>Jogos</li>
        </ul>
        <div className={styles.input_icon}>
          <input
            style={{ outline: "none" }}
            type="text"
            placeholder="Pesquisar no Orkut"
            readOnly
          />
          <FaSistrix className={styles.search_icon} />
        </div>
        <div className={styles.input_icon}>
          <img src={nav_profile} alt="profile-pic" />
          <label>Iuri Silva</label>
          <FaChevronDown className={styles.profile_icon} />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
