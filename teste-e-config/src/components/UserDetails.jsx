import React from 'react'

export const UserDetails = () => {
    const pessoas = [
    {id: 1, nome: 'Pasquale', idade: 33, profissao: 'Programador'},
    {id: 2, nome: 'Milone', idade: 17, profissao: 'Desenvolvedor'},
    {id: 3, nome: 'Netto', idade: 18, profissao: 'QA tester'},
    {id: 4, nome: 'Segundo', idade: 10, profissao: 'estudante'},
]
  return (
    <div>
      {/* listar pessoas da array */}
      <h2>Listagem de pessoas</h2>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.id}>Seu nome é: {pessoa.nome}, sua idade é: {pessoa.idade}, Sua profissão é: {pessoa.profissao}. </li>
          )
        )}
      </ul>
      {/* Verificar idade */}
      <h2>Verificação de idade</h2>
      <ul>
      {pessoas.map(pessoa => (
        <li key={pessoa.id}>{pessoa.idade >= 18 ? <p>{pessoa.nome} pode tirar carteira de habilitação</p> 
          : <p>{pessoa.nome} não pode tirar carteira de habilitação</p>}</li>
      ))}
      </ul>
    </div>
  )
}
