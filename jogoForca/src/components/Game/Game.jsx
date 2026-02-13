import { useState, useRef } from "react";
import "./Game.css";

export const Game = ({
  verificarLetra,
  palavraEscolhida,
  categoriaEscolhida,
  letras,
  letrasAdvinhadas,
  letrasErradas,
  tentativas,
  pontuacao,
}) => {
  const [letra, setLetra] = useState("");
  const letraInputRef = useRef(null); //vai criar referencia para o input

  const handleSubmit = (e) => {
    e.preventDefault();

    verificarLetra(letra);

    setLetra("");

    letraInputRef.current.focus(); //foca no input depois de enviar a letra
  };

  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: {pontuacao}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="dica">
        Dica sobre a palavra: <span>{categoriaEscolhida}</span>
      </h3>
      <p>Você ainda tem {tentativas} tentativa(s). </p>
      <div className="containerPalavra">
        {letras.map((letra, i) =>
          letrasAdvinhadas.includes(letra) ? (
            <span key={i} className="letra">
              {letra}
            </span>
          ) : (
            <span key={i} className="espacoBranco"></span>
          ),
        )}
      </div>
      <div className="letraContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letra"
            maxLength={1}
            required
            onChange={(e) => setLetra(e.target.value)}
            value={letra}
            ref={letraInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="letrasErradasContainer">
        <p>Letras já utilizadas:</p>
        {letrasErradas.map((letra, i) => (
          <span key={i}>{letra}, </span>
        ))}
      </div>
    </div>
  );
};
