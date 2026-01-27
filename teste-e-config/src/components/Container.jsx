import React from 'react'

// componentes podem receber argumentos filhos, que servem para renderizar JSX dentro dele
// exemplo: um componente de background que vai aparecer em todas as telas recebe um JSX
// esse JSX é renderizado nesse container, com suas props e estilizações
export const Container = ({children, meuValor}) => {
  return (
    <div>
        <h2>Esse é o título do container</h2>
        {children}
        <p>O valor é: {meuValor}</p>
    </div>
  )
}
