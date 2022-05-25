import React, {useState, useEffect} from "react";
import axios from "axios";


import { DivConteudo, DivImagemPokemon, DivJanelaHorizontal, DivJanelaVertical, PartStatus, Titulo } from "../Styles.js/Detalhe_PokemonStyle";


import BarraDeProgressoStatus from "../Components/BarraDeProgressoStatus/BarraDeProgressoStatus";


function Detalhe_Pokemon(props) {

    const [Data, setData] = useState([]);

    useEffect(() => {
        getDados();
    }, [])

    const getDados = () => {
        axios.get(props.pokemon, {
            headers: {
            "Content-Type": "application/json"
            }
        }).then((resposta) =>{

            setData(resposta.data.stats)
            console.log(resposta.data)
        }).catch((err) => {
            console.log(err.menssage)
        })
    }

    const renderStatus = Data.map((status) => {
        return(
            <PartStatus>
                <p>{status.stat.name.toUpperCase()} : {status.base_stat}</p>
                <BarraDeProgressoStatus percent={status.base_stat}></BarraDeProgressoStatus>
            </PartStatus>
        )
    });

    return(
        <DivConteudo>

            <DivJanelaVertical>
                <DivImagemPokemon/>
                <DivImagemPokemon/>
            </DivJanelaVertical>

            <DivJanelaVertical>
                <Titulo>STATUS</Titulo>
                {renderStatus}
            </DivJanelaVertical>

            <DivJanelaVertical>

            </DivJanelaVertical>

            <DivJanelaHorizontal></DivJanelaHorizontal>
        </DivConteudo>
    )
}

export default Detalhe_Pokemon;