import React from "react";
import  styles from "./Community.module.css";

interface CommunityProps {
  title: string;
  viewAll: string;
}

interface CommunityItem {
  id: number;
  path: string;
  name: string;
}

  const Community: React.FC<CommunityProps> = (props) => {
  const community: CommunityItem[] = [
    { id: 1, path: "https://i.imgur.com/bX3Ifjp.png", name: "Carros" },
    { id: 2, path: "https://i.imgur.com/ROqwqw4.png", name: "Desenhos" },
    { id: 3, path: "https://i.imgur.com/GejNWt4.png", name: "Crazy" },
    { id: 4, path: "https://i.imgur.com/nrIosPU.png", name: "Fofos" },
    { id: 5, path: "https://i.imgur.com/qCvbyYR.png", name: "Animes" },
    { id: 6, path: "https://i.imgur.com/tBIGWCc.png", name: "Leitura" },
    { id: 7, path: "https://i.imgur.com/gwnknXd.png", name: "Meu ovo" },
    { id: 8, path: "https://i.imgur.com/tBIGWCc.png", name: "My book" },
    { id: 9, path: "https://i.imgur.com/7N7C9nu.png", name: "Cafeeee" },
  ];
    
  const CommunityGallery: React.FC<CommunityItem> = ({ id, path, name }) => (
    <section key={id}>
      <img alt="random-person" src={path} />
      <label>{name}</label>
    </section>
  );
    
    return (
        <article className={styles.network}>
        <section>
          <header className={styles.network_info}>
            <h1>{props.title}</h1>
            <p>{props.viewAll}</p>
          </header>
          <div className={styles.network_images}>
            {community.map((item) => (
              <CommunityGallery key={item.id} {...item} />
            ))}
          </div>
        </section>
      </article>
    );  
};

export default Community;