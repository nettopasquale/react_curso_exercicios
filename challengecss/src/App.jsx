import "./App.css";
import { ListeCarros } from "./components/ListeCarros";


function App() {
    const carros = [
    { id: 1, marca: "Honda", cor: "azul", km: 10000 },
    { id: 2, marca: "Fiat", cor: "preto", km: 20000 },
    { id: 3, marca: "Ford", cor: "verde", km: 30000 },
    { id: 4, marca: "Uno", cor: "roxo", km: 40000 },
    { id: 5, marca: "Mercedes", cor: "rosa", km: 50000 },
  ];

  return(
    <>
    <h1 className="tituloApp">Este título recebe o css global</h1>
    {/* listagem de carros com css modules */}
    {carros.map((carro)=>(
      <ListeCarros key={carro.id} 
      marca={carro.marca}
      cor={carro.cor}
      km={carro.km}/>
    ))}
    </>
  )
}

export default App;
