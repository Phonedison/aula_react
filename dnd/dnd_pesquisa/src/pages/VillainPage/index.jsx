import { useState } from "react";
import styles from "./villainPage.module.css";
export const VillainPage = () => {
  const [listVilao, setListVilao] = useState([
    { nome: "Fred", poder: "ilimitado", image: "ilimite power" },
  ]);

  const addEnemy = () => {
    setListVilao((prev) => [
      ...prev,
      {
        nome: "João",
        poder: "Contemplem o pato",
        imagem: "Com os seus poderes",
      },
    ]);
    console.log(listVilao);
  };

  return (
    <>
      <div className={styles.villainContainer}>
        <h1>Villain</h1>
        <h2 onClick={addEnemy}>Favoritos</h2>
        {listVilao.map((vilao) => (
          <div className={styles.enemy}>
            <h4>{vilao.nome}</h4>
            <p>{vilao.poder}</p>
            <p>{vilao.image}</p>
          </div>
        ))}
      </div>
    </>
  );
};
