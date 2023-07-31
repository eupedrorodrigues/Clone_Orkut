//ReactNode provides a more accurate type for the chidren prop
import React, { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
}

//React.FC as the type for the component is a common convention in React projects with TypeScript

const Container: React.FC<ContainerProps> = (props) =>  {
  return <div className={styles.container}>{props.children}</div>;
} 
export default Container;
