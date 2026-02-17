import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/home">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/produtos">Produtos</Link> */}
      {/* Exemplo do uso isActive na classe */}
      {/* <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
    </nav>
  );
};
