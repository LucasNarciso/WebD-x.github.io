//REACT
import React, {useState, useEffect} from "react";

//ROUTES
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Coordinator";

//COMPONENTES
import NavBar from "../Components/NavBar/NavBar";
import Contatos from "../Components/Contatos/Contatos";
import CardPokemon from "../Components/CardPokemon/CardPokemon";

//STYLED COMPONENTES
import { GlobalStyle } from "../Styles/Detalhe_PokemonStyle";
import { DivConteudo } from "../Styles/PokedexStyle";

function Pokedex() {

    const [pokemons, setpokemons] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        setpokemons(JSON.parse(localStorage.getItem("pokédex")));
    }, [])

    const renderizarCards = pokemons.map((card) => {

        return(
            <CardPokemon key={Math.random()} url={card} pokemon={card}/>
        )
    });

    return(
        <DivConteudo>
            <GlobalStyle/>
            <NavBar titulo={"POKÉDEX"} onClickBotao1={() => {goBack(navigate)}} botao1={"VOLTAR"} botao2={false}/>
            {renderizarCards}
            <Contatos/>
        </DivConteudo>
    )

}

export default Pokedex;