import React from 'react'
import { Link } from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch';
import './Home.css'

export const Home = () => {
    const url = 'http://localhost:3000/produtos';

    const {data:items, loading, error} = useFetch(url);
  return (
    <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        <ul className="produtos">
            {items && items.map((item)=>(
                <li key={item.id}>
                    <h2>{item.nome}</h2>
                    <p>{item.preco}</p>
                    {/* Rota dinâmica */}
                    <Link to={`/produtos/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
