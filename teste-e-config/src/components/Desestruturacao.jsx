import React from 'react'

export default function Desestruturacao({marca, km, cor, novo}) {
  return (
    <>
    <h2>Detalhes do carro</h2>
    <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
    </ul>
    {novo && <p>Esse carro é novo!</p>}
    </>
  )
}
