import React from "react";
import styles from "./Network.module.css";
import Community from "../community/Community";

interface NetworkProps {
  title: string;
  viewAll: string;
}

interface NetworkItem {
  id: number;
  path: string;
  name: string;
}

const Network: React.FC<NetworkProps> = (props) => {
  const network: NetworkItem[] = [

    { id: 1, path: "https://i.imgur.com/g00WRng.png", name: "Fernando" },
    { id: 2, path: "https://i.imgur.com/smEE1fr.png", name: "Ana" },
    { id: 3, path: "https://i.imgur.com/zGWdEfN.png", name: "Carlos" },
    { id: 4, path: "https://i.imgur.com/NCNMWMq.png", name: "Vitor" },
    { id: 5, path: "https://i.imgur.com/OZzAEqY.png", name: "Matheus" },
    { id: 6, path: "https://i.imgur.com/rZ8fCOP.png", name: "Ramos" },
    { id: 7, path: "https://i.imgur.com/iXETVnZ.png", name: "Eiji" },
    { id: 8, path: "https://i.imgur.com/AFJ9Uhs.png", name: "Julia" },
    { id: 9, path: "https://i.imgur.com/NrsHF8b.png", name: "Carol" },
  ];

  const NetworkGallery: React.FC<NetworkItem> = ({ id, path, name }) => (
    <section key={id}>
      <img alt="random-person" src={path} />
      <label>{name}</label>
    </section>
  );

  return (
    <>
      <div className={styles.big_wrapper}>
        <article className={styles.network}>
          <section>
            <header className={styles.network_info}>
              <h1>{props.title}</h1>
              <p>{props.viewAll}</p>
            </header>
            <div className={styles.network_images}>
              {network.map((item) => (
                 <NetworkGallery key={item.id} {...item} />
              ))}
            </div>
          </section>
        </article>
        <Community title="Comunidade (42)" viewAll="Ver todos" />
      </div>
    </>
  );
}

export default Network;
