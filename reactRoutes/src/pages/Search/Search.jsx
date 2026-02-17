import React from "react";
//retorna uma tupla de URLs e um objeto de funções para manipular os parâmetros de busca
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const url = `http://localhost:3000/produtos?${searchParams}`;

  const { data: items, loading, error } = useFetch(url);
  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      <ul className="produtos">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.nome}</h2>
              <p>R$ {item.preco}</p>
              {/* Rota dinâmica */}
              <Link to={`/produtos/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
