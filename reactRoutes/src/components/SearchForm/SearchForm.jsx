import {useState} from 'react'
import { useNavigate } from 'react-router-dom' //hook do react-router-dom para navegação programática
import './SearchForm.css'

export const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        //vai nagevar para a rota de busca com a query como parâmetro
        navigate(`/search?q=${query}`); 
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" value="Buscar" />
    </form>
  )
}
