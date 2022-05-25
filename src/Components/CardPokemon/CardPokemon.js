import React, {useState, useEffect} from "react";
import axios from "axios";

import { DivCardPokemon, BotaoCard, DivInternaCard, DivBotoesCard} from "./CardPokemonStyle";

function CardPokemon(props) {

    const [Imagen, setImagen] = useState("");

    useEffect(() => {
        getDados();
    }, [])
    
    const getDados = () => {
        axios.get(props.url, {
            headers: {
            "Content-Type": "application/json"
            }
        }).then((resposta) =>{

            setImagen(resposta.data.sprites.front_default)

        }).catch((err) => {
            console.log(err.menssage)
        })
    }

    return(
        <DivCardPokemon>
            <DivInternaCard>
                <p>{props.name}</p>
                <img width={'120em'} src={Imagen} alt={"Imagen do pokémon " + props.name}></img>
            </DivInternaCard>
            <DivBotoesCard>
                <BotaoCard>ADICIONAR</BotaoCard>
                <BotaoCard onClick={() => {props.trocarPagina(props.name, props.pokemon)}}>DETALHES</BotaoCard>
            </DivBotoesCard>
        </DivCardPokemon>
    )

}

export default CardPokemon;