import React, {useState, useEffect} from "react";
import axios from "axios";

//STYLED COMPONENTS
import { DivConteudo, DivPag, BotaoPag, ConteudoPag } from "../Styles/HomeStyle";

import CardPokemon from "../Components/CardPokemon/CardPokemon";

//CONSTANTES
import { baseURL } from "../Constants/Consts";
import BarraPag from "../Components/BarraPag/BarraPag";

function Home(props) {

    const [Pokemons, setPokemons] = useState([]);
    const [Data, setData] = useState({});
    const [Pagina, setPagina] = useState(0);

    useEffect(() => {
        getPokemons();
    }, [Pagina])

    const getPokemons = () => {
        axios.get(baseURL + "pokemon/?offset=" + Pagina + "&limit=20", {
            headers: {
            "Content-Type": "application/json"
            }
        }).then((resposta) =>{

            setPokemons(resposta.data.results)
            setData(resposta.data)

        }).catch((err) => {
            console.log(err.menssage)
        })
    }
    
    const nextPage = () => {
        if (Data.next !== null) {
            setPagina(Pagina + 20)
        }
    }

    const previousPage = () => {
        if (Data.previous !== null) {
            setPagina(Pagina - 20)
        }
    }

    const selecionarPagina = (num) => {
        setPagina(num);
    }

    const renderizarCards = Pokemons.map((card) => {
        return(
            <CardPokemon trocarPagina={props.trocarPagina.bind(this)} key={card.name} name={card.name.toUpperCase()} url={card.url} pokemon={card.url}/>
        )
    });

    return(

        <DivConteudo>
            {renderizarCards}
            <BarraPag select={selecionarPagina.bind(this)} next={() => {nextPage()}} previous={() => {previousPage()}}></BarraPag>
        </DivConteudo>
        
    )
}

export default Home;