import {useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

const url = "http://localhost:3000/produtos";

function App() {
  const [produtos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  //custom hook de fetch
  const {data: items, httpConfig, loading, error, deleteData} = useFetch(url); // renomeia data para items
  console.log(items);

  //adicionar produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      nome,
      preco,
    };

    httpConfig(produto, "POST");

    setNome("");
    setPreco("");
  };

  const handleDelete = (url,id) => {
    // lógica para deletar um produto
    //httpConfig(id, "DELETE");
    deleteData(url, id);
    
  }

  //   const deleteData = async (url, id) => {
  //   console.log(`Deletando: ${url}/${id}`);
  //   try {
  //     const res = await fetch(`${url}/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!res.ok) {
  //       throw new Error("Erro ao deletar o item!");
  //     }
  //     setProdutos(produtos.filter((item) => item.id !== id));
  //     console.log("Item deletado com sucesso!");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  console.log(produtos);
  return (
    <div className="app">
      <h1>Lista de produtos</h1>
      {/* se carregamento de tela for verdade */}
      {loading && <p>Carregando...</p>}
      {/* Se tiver erro exibir mensagem */}
      {error && <p>{error}</p>}
      <ul>
        {/* validação caso items n for nulo */}
        {items && items.map((item) => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco}
            {/* botão de deletar produtos */}
            <button onClick={()=> handleDelete(url,item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              name="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            Preco:
            <input
              type="number"
              value={preco}
              name="preco"
              onChange={(e) => setPreco(e.target.value)}
            />
          </label>
          {/* estado de loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
