import React from "react";
import styles from './ListeCarros.module.css'

export const ListeCarros = ({ marca, cor, km }) => {

  return (
    <div className={cor === "azul" ? styles.carro_1
        : cor === "preto" ? styles.carro_2
        : cor === "verde" ? styles.carro_3
        :cor === "roxo" ? styles.carro_4
        : styles.carro_5
    }>
      <h2>Marca: {marca}</h2>
      <p>Cor: {cor}</p>
      <p>KM:{km}</p>
    </div>
  );
};
