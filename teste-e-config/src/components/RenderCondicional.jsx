import React, { useState } from 'react'

export default function RenderCondicional() {
    const [x, setX] = useState(false);
    const [nome, setNome] = useState("")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        {nome === "Pasquale" ? (
            <div>O nome é {nome}!</div>
        ): (
            <p>Nome não encontrado!</p>
        )}
        <button onClick={() => setNome("Pasquale")}>Clique aqui!</button>
    </div>
  )
}
