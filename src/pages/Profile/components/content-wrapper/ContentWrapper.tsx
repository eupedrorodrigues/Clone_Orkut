import React, { ReactNode } from "react";
import styles from "./ContentWrapper.module.css";


interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper:React.FC<ContentWrapperProps> = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
}
export default ContentWrapper;
