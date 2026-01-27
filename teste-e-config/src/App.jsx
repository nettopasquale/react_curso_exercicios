import "./App.css";
//import { useState } from "react";
import ListRender from "./components/listRender";
import RenderCondicional from "./components/RenderCondicional";
import ShowUserName from "./components/ShowUserName";
import Desestruturacao from "./components/Desestruturacao";
import { Container } from "./components/Container";
import { ExecuteFunction } from "./components/ExecuteFunction";
import { Mensagem } from "./components/Mensagem";
import { MudarEstadoMensagem } from "./components/MudarEstadoMensagem";
import { UserDetails } from "./components/UserDetails";

function App() {
  // const nome = "Pasquale"
  // const [userName] = useState("Maria");
  // const [message, setMessage] = useState("");

  // const carros = [
  //   { id: 1, marca: "Ferrari", km: 10000, cor: "Amarela", novo: true },
  //   { id: 2, marca: "Hyundai", km: 20000, cor: "Preta", novo: false },
  //   { id: 3, marca: "Ford", km: 30000, cor: "Azul", novo: false },
  // ];

  // function showMessage(){
  //   console.log("Evento do componente pai")
  // }

  //função que lida com a troca de mensagem
  // const handleMessage = (msg) =>{
  //   setMessage(msg)
  // }

  // return (
  //   <>
  //     <div>
  //       <ListRender />
  //       <RenderCondicional />
  //       {/* a propriedade "nome" deve ser a mesma passada em 'props' na chamada do componente */}
  //       <ShowUserName nome={userName} />
  //       {/* Desestruturação de props */}
  //       <Desestruturacao marca="VW" km={10000} cor="Azul" novo={false} />
  //       {/* reaproveitando componentes */}
  //       <Desestruturacao marca="Volks" km={20000} cor="Prata" novo={false} />
  //       {/* aqui a ordem não importa */}
  //       <Desestruturacao novo={true} cor="Preto" km={30000} marca="Hyundai" />
  //       {/* loop em array de objetos */}
  //       {carros.map((carro) => (
  //         <Desestruturacao
  //         key={carro.id}
  //           marca={carro.marca}
  //           km={carro.km}
  //           cor={carro.cor}
  //           novo={carro.novo}
  //         />
  //       ))}
  //       {/* Children Prop */}
  //       <Container meuValor="teste">
  //         <p>Esse é o container</p>
  //       </Container>
  //       <Container meuValor="teste 2">
  //         <h5>Testando o Container</h5>
  //       </Container>
  //       {/* Função em prop */}
  //       <ExecuteFunction myFunction={showMessage}/>
  //       {/* Elevação de state - State lift */}
  //       <Mensagem msg={message}/>
  //       <MudarEstadoMensagem handleMessage={handleMessage}/>
  //     </div>
  //   </>
  // );

  return(
    <UserDetails/>
  )
}

export default App;
