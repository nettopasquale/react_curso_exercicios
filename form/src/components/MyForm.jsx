import './MyForm.css'
import React, { useState } from "react";

export const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);
  }

    return (
      <div>
        {/* Criação do Form */}
        <form onSubmit={handleSubmit}>
          <div>
            {/* label nome */}
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={handleName}
              value={name}
            />
          </div>
          {/* label email */}
          <div>
            <label>
              <span>Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            </label>
            {/* textarea */}
            <label>
              <span>Bio:</span>
              <textarea
                name="bio"
                placeholder="Descrição do usuário"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              ></textarea>
              {/* Select */}
              <label>
                <span>Função no Sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                  <option value="user">Usuário</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Administrador</option>
                </select>
              </label>
              <input type="submit" value="Enviar" />
            </label>
          </div>
        </form>
      </div>
    );
  };

