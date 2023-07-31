import React from "react";
import styles from "./Field.module.css";

type Props = {};

function Field(props: Props) {
  return (
    <div className={styles.table_info}>
      <div className={styles.info}>
        <p>Relacionamento: </p>
        <p> Solteiro </p>
      </div>

      <div className={styles.info}>
        <p>Aniversário: </p>
        <p>21 de julho </p>
      </div>

      <div className={styles.info}>
        <p>Idade: </p>
        <p>22 </p>
      </div>

      <div className={styles.info}>
        <p>Interesses no Orkut: </p>
        <p>Solteiro </p>
      </div>

      <div className={styles.info}>
        <p>Quem sou eu: </p>
        <p> Programador </p>
      </div>

      <div className={styles.info}>
        <p>Filhos: </p>
        <p>Não </p>
      </div>

      <div className={styles.info}>
        <p>Sexo: </p>
        <p>Masculino </p>
      </div>

      <div className={styles.info}>
        <p>Fumo: </p>
        <p>Não </p>
      </div>

      <div className={styles.info}>
        <p>Bebo: </p>
        <p>Depende do dia </p>
      </div>

      <div className={styles.info}>
        <p>Moro: </p>
        <p>Guarantã </p>
      </div>

      <div className={styles.info}>
        <p>País: </p>
        <p>Brasil </p>
      </div>

      <div className={styles.info}>
        <p>Cidade natal: </p>
        <p>São Paulo </p>
      </div>

      <div className={styles.info_options}>
        <p>Músicas: </p>
        <p>Trap </p>
        <p>Rap</p>
        <p>Indie</p>
        <p>Ver todos</p>
      </div>

      <div className={styles.info_options}>
        <p>Filmes: </p>
        <p>A rede social </p>
        <p>Meu amigo totoro</p>
        <p>Ver todos</p>
      </div>
    </div>
  );
}

export default Field;
