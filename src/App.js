import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/")


  useEffect(() => {
    fetch(url).then(res => res.json()).then(res => {
      setNext(res.info.next)
      setPrev(res.info.prev)
      setData(res.results)
    });
  }, [url]);

  const paginaSiguiente = () => {
    if (next !== null) {
      setUrl(next);
    }
  };
  const paginaAnterior = () => {
    if (prev !== null) {
      setUrl(prev);
    }
  }

  const mostrarPersonajes = data.map((personaje => {
    return (
      <div>
        <img src={personaje.image} />
        <h4>{personaje.name}</h4>
      </div>
    )
  }))
  return (
    <>
      {mostrarPersonajes}
      <button onClick={paginaAnterior}>Anterior</button>
      <button onClick={paginaSiguiente}>Siguiente</button>

    </>
  )
}

export default App;
