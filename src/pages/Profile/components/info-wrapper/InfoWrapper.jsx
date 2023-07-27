import React from "react";

import styles from "./InfoWrapper.module.css";

function InfoWrapper(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
export default InfoWrapper;
