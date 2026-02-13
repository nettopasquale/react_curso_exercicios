import React from 'react'
import "./GameOver.css";

export const GameOver = ({retry, pontuacao}) => {
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h2>A sua pontuação foi: <span>{pontuacao}</span></h2>
      <button onClick={retry}>Reiniciar jogo</button>
    </div>
  )
}
