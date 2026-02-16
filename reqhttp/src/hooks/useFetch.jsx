import { useState, useEffect } from "react";

//custom hook de fetch

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [metodo, setMetodo] = useState(null); // POST ou GET
  const [callFetch, setCallFetch] = useState(false); // para disparar o useEffect
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpConfig = (data, metodo) => {
    if (metodo === "POST") {
      setConfig({
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMetodo(metodo);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      //estado de carregamento de tela
      setLoading(true);
    //   tratamento de erros
    try{
      const res = await fetch(url);

      const json = await res.json();
      setData(json);
    }catch(error){
        console.log(error.message);
        setError("Houve um erro ao carregar os dados!");
    }
    setLoading(false);

    };
    fetchData();
  }, [url, callFetch]);

  //método POST refatorado
  useEffect(() => {
    const httpRequest = async () => {
      if (metodo === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config, metodo, url]);

  return { data, httpConfig,loading, error };
};
