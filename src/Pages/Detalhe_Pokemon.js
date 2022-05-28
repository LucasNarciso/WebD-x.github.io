import React, {useState, useEffect} from "react";
import axios from "axios";


import { DivContentWindow, DivConteudo, DivImagemPokemon, DivJanelaHorizontal, DivJanelaVertical, ItemMove, PartStatus, Titulo } from "../Styles/Detalhe_PokemonStyle";


import BarraDeProgressoStatus from "../Components/BarraDeProgressoStatus/BarraDeProgressoStatus";


function Detalhe_Pokemon(props) {

    const [Data, setData] = useState([]);
    const [Sprites, setSprites] = useState({});
    const [Moves, setMoves] = useState([]);
    const [Types, setTypes] = useState([]);

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
            setSprites(resposta.data.sprites)
            setMoves(resposta.data.moves)
            setTypes(resposta.data.types)

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

    const renderMoves = Moves.map((move) => {
        return(
            <ItemMove>
                <p>{move.move.name}</p>
            </ItemMove>
        )
    })

    return(
        <DivConteudo>

            <DivJanelaVertical>
                <DivImagemPokemon><img width={'120em'} src={Sprites.front_default}/></DivImagemPokemon>
                <DivImagemPokemon><img width={'120em'} src={Sprites.back_default}/></DivImagemPokemon>
            </DivJanelaVertical>

            <DivJanelaVertical>
                <Titulo>STATUS</Titulo>
                <DivContentWindow>
                    {renderStatus}
                </DivContentWindow>
            </DivJanelaVertical>

            <DivJanelaVertical>
                <Titulo>MOVES</Titulo>
                <DivContentWindow>

                </DivContentWindow>
            </DivJanelaVertical>

            <DivJanelaHorizontal>
                <DivContentWindow>
                </DivContentWindow>
            </DivJanelaHorizontal>
        </DivConteudo>
    )
}

export default Detalhe_Pokemon;