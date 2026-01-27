import React from 'react'

// podemos passar argumentos para os componentes
// props é o nome padrão, mas pode ser qualquer um
// naturalmente pode receber quantos argumentos quisermos
export default function ShowUserName(props) {
  return (
    <div>
        {/* a propriedade "nome" deve ser a mesma passada em 'props' na chamada do componente */}
        <h2>O nome do usuário: {props.nome}</h2>
    </div>
  )
}
