import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Sobre } from "./pages/Sobre/Sobre";
import { Produto } from "./pages/Produto/Produto";
import { Info } from "./pages/Info/Info";
import { Search } from "./pages/Search/Search";
import { Navbar } from "./components/Navbar/Navbar";
import { NaoEncontrado } from "./components/NaoEncontrado/NaoEncontrado";
import { SearchForm } from "./components/SearchForm/SearchForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Rotas do React Router */}
        <Navbar />
        {/* Busca */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* <Route path='/produtos' element={<ListaProdutos/>}/> */}
          {/* Rota dinâmica */}
          <Route path="/produtos/:id" element={<Produto />} />
          {/* Nested routes */}
          <Route path="/produtos/:id/info" element={<Info />} />
          {/* Página de busca */}
          <Route path="/search" element={<Search/>}/>
          {/* Redirecionamento Navigate */}
          {/* útil para redirecionar nas rotas que mudaram */}
          <Route path="/empresa" element={<Navigate to="/sobre"/>} />
          {/* Não encontrado */}
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
