import React, {useEffect, useState} from "react";

//STYLED COMPONENTS
import {DivPai, GlobalStyle } from "./Styles/AppStyle";

//COMPONENTS
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import Detalhe_Pokemon from "./Pages/Detalhe_Pokemon";
import NavBar from "./Components/NavBar/NavBar";

function App() {

  //State
  const [pagina, setPagina] = useState("Home")
  const [Pokemon, setPokemon] = useState({})
  const [titulo, setTitulo] = useState("HOME")

  const trocarPagina = (pag, info) => {
    setTitulo(pag)
    setPagina('Detalhes Pokémon')
    setPokemon(info)
  }

  //Variáveis
  let page = ""
  let navBar = ""

  useEffect(() => {
    definirTitulo();
  }, [pagina])

  const definirTitulo = () => {

    if (pagina === 'Home') {
      setTitulo("HOME")

    }else if(pagina === 'Pokédex'){
      setTitulo("POKÉDEX")
    }
  }

  switch (pagina) {

    case "Home":
      page = <Home trocarPagina={trocarPagina.bind(this)} />;
      navBar = <NavBar titulo={"HOME"} onClickBotao1={trocarPagina.bind(this)} botao1={"POKÉDEX"} botao2={false}></NavBar>;
      break;

    case "Pokédex":
      page = <Pokedex/>;
      navBar = <NavBar titulo={"POKÉDEX"} onClickBotao1={trocarPagina.bind(this)} botao1={"HOME"} botao2={false}></NavBar>;
      break;

    case "Detalhes Pokémon":
      page = <Detalhe_Pokemon pokemon={Pokemon}/>;
      navBar = <NavBar titulo={titulo} botao1={"VOLTAR"} botao2={true}></NavBar>;
      break;
      
    default:
      break;
  }

  return (
    <DivPai>
      <GlobalStyle />
      {navBar}
      {page}
    </DivPai>
  );
}

export default App;
