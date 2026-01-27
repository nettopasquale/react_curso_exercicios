import React from 'react'
import { useState } from 'react'

export default function ListRender() {
    const [lista, setLista] = useState(['Pasquale', 'Milone', 'Netto']);
    const [users, setUsers] = useState([
        {id: 1, name: "Pasquale", age: 33},
        {id: 2, name: "Milone", age: 33},
        {id: 3, name: "Netto", age: 33},
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        // prevState é muito usado para acessar valores anteriores
        // de um dado modificado, útil para manipulação de listas
        setUsers((prevUsers) =>{
            console.log(prevUsers)
            // filtra quem não está na lista
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {lista.map((item, i )=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map(user =>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar usuário aleatório</button>
    </div>
  )
}
