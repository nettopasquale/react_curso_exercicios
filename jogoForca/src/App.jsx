//import { useState } from "react";
import "./App.css";
import { StartScreen } from "./components/StartScreen/StartScreen";
import { Game } from "./components/Game/Game";
import { GameOver } from "./components/GameOver/GameOver";
import { useCallback, useEffect, useState } from "react";

import { listaPalavras } from "./data/palavras";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const qtdTentativas = 3;
const pontoInicial = 50;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [palavras] = useState(listaPalavras);
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letras, setLetras] = useState([]);
  const [letrasAdvinhadas, setLetrasAdvinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(qtdTentativas);
  const [pontuacao, setPontuacao] = useState(pontoInicial);

  const pegarPalavraECategoria = useCallback(() => {
    //pega categoria aleatória
    const categorias = Object.keys(palavras);
    const categoria =
      categorias[Math.floor(Math.random() * Object.keys(categorias).length)];
    console.log(categoria);
    //pega palavra aleatória
    const palavra =
      palavras[categoria][
        Math.floor(Math.random() * palavras[categoria].length)
      ];
    console.log(palavra);

    return { palavra, categoria };
  }, [palavras]);

  //comerçar o jogo
  const startGame = useCallback(() => {
    //limpar letras advinhadas e erradas
    resetarEstadosLetras();

    //pegar uma palavra aleatória e sua categoria
    const { palavra, categoria } = pegarPalavraECategoria();

    //criar uma array de letras
    let palavraArray = palavra.split("");
    //transformar todas as letras em minúsculo
    palavraArray = palavraArray.map((l) => l.toLowerCase());
    console.log(palavraArray);

    //preencher os estados
    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);
    setLetras(palavraArray);

    setGameStage(stages[1].name);
  }, [pegarPalavraECategoria]);

  //processar o input do usuário
  const verificarLetra = (letra) => {
    const letraNormalizada = letra.toLowerCase();

    //checar se a letra já foi usada
    if (
      letrasAdvinhadas.includes(letraNormalizada) ||
      letrasErradas.includes(letraNormalizada)
    ) {
      return;
    }

    // colocar letra na lista de advinhadas ou erradas
    if (letras.includes(letraNormalizada)) {
      setLetrasAdvinhadas((letrasAdvinhadas) => [
        ...letrasAdvinhadas,
        letraNormalizada,
      ]);
    } else {
      setLetrasErradas((letrasErradas) => [...letrasErradas, letraNormalizada]);
      //diminuir as tentativas com os erros
      setTentativas((tentativas) => tentativas - 1);
    }
  };

  //resetar os estados de letras para o próximo jogo
  const resetarEstadosLetras = () => {
    setLetrasAdvinhadas([]);
    setLetrasErradas([]);
  };

  //caso tentativas = 0, finalizar o jogo
  useEffect(() => {
    if (tentativas <= 0) {
      // resetar os estados
      resetarEstadosLetras();

      //renderiza tela de GameOver
      setGameStage(stages[2].name);
    }
  }, [tentativas]);

  //checar condição de vitória
  useEffect(()=>{
    const letrasUnicas =[...new Set(letras)];
    console.log(letrasUnicas);

    //condição de vitoria
    if(letrasAdvinhadas.length === letrasUnicas.length){
      //adiconar pontuação
      setPontuacao((pontuacao) => pontuacao += 100);

      //resetar jogo com uma nova palavra
      startGame();
    }
  },[letrasAdvinhadas, letras, startGame]);

  //reiniciar o jogo
  const retry = () => {
    //reseta as tentativas e a pontuação
    setPontuacao(0);
    setTentativas(qtdTentativas);

    //retorna para a tela de start
    setGameStage(stages[0].name);
  };

  console.log(palavras);
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verificarLetra={verificarLetra}
          palavraEscolhida={palavraEscolhida}
          categoriaEscolhida={categoriaEscolhida}
          letras={letras}
          letrasAdvinhadas={letrasAdvinhadas}
          letrasErradas={letrasErradas}
          tentativas={tentativas}
          pontuacao={pontuacao}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} pontuacao={pontuacao} />}
    </div>
  );
}

export default App;
