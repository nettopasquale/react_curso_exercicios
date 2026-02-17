import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Produto.css";

export const Produto = () => {
  //rota dinâmica com useParams
    //usa o useParams para associar o id de uma rota usada em LINK do react router
  const { id } = useParams(); 
//   carregamento individual
const url = `http://localhost:3000/produtos/${id}`;
const {data:produto, loading, error} = useFetch(url);
console.log(produto)

  return (
   <>
   <p>ID do produto: {id}</p>
   {error && <p>{error}</p>}
   {loading && <p>Carregando...</p>}
   {produto && (
    <div>
        <h1>{produto.nome}</h1>
        <p>R$ {produto.preco}</p>
        {/* Nested routes */}
        <Link to={`/produtos/${produto.id}/info`}>Mais informações</Link>
    </div>
   )}
   </>
  );
};
