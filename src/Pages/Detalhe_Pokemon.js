import React, {useState, useEffect} from "react";
import axios from "axios";

//IMAGENS
import bug from "../Assets/img/Icones_Tipos/bug.svg"
import dark from "../Assets/img/Icones_Tipos/dark.svg"
import dragon from "../Assets/img/Icones_Tipos/dragon.svg"
import electric from "../Assets/img/Icones_Tipos/electric.svg"
import fairy from "../Assets/img/Icones_Tipos/fairy.svg"
import fighting from "../Assets/img/Icones_Tipos/fighting.svg"
import fire from "../Assets/img/Icones_Tipos/fire.svg"
import flying from "../Assets/img/Icones_Tipos/flying.svg"
import ghost from "../Assets/img/Icones_Tipos/ghost.svg"
import grass from "../Assets/img/Icones_Tipos/grass.svg"
import ground from "../Assets/img/Icones_Tipos/ground.svg"
import ice from "../Assets/img/Icones_Tipos/ice.svg"
import normal from "../Assets/img/Icones_Tipos/normal.svg"
import poison from "../Assets/img/Icones_Tipos/poison.svg"
import psychic from "../Assets/img/Icones_Tipos/psychic.svg"
import rock from "../Assets/img/Icones_Tipos/rock.svg"
import steel from "../Assets/img/Icones_Tipos/steel.svg"
import water from "../Assets/img/Icones_Tipos/water.svg"


import { ContentTypes, DivContentTypes, DivContentWindow, DivConteudo, DivImagemPokemon, DivJanelaHorizontal, DivJanelaVertical, ItemMove, PartStatus, Titulo } from "../Styles/Detalhe_PokemonStyle";


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

    const renderMoves = Moves.map((move, index) => {
        if (index < 4) {
            return(
                <ItemMove>
                    <p>{move.move.name.toUpperCase()}</p>
                </ItemMove>
            )
        }
    })

    const renderTypes = Types.map((type) => {

        let nomeTipo = "";

        if (type.type.name === 'bug') {
            nomeTipo = bug;

        }else if(type.type.name === 'dark'){
            nomeTipo = dark;

        }else if(type.type.name === 'dragon'){
            nomeTipo = dragon;

        }else if(type.type.name === 'electric'){
            nomeTipo = electric;

        }else if(type.type.name === 'fairy'){
            nomeTipo = fairy;

        }else if(type.type.name === 'fighting'){
            nomeTipo = fighting;

        }else if(type.type.name === 'fire'){
            nomeTipo = fire;

        }else if(type.type.name === 'flying'){
            nomeTipo = flying;

        }else if(type.type.name === 'ghost'){
            nomeTipo = ghost;

        }else if(type.type.name === 'grass'){
            nomeTipo = grass;

        }else if(type.type.name === 'ground'){
            nomeTipo = ground;

        }else if(type.type.name === 'ice'){
            nomeTipo = ice;

        }else if(type.type.name === 'normal'){
            nomeTipo = normal;

        }else if(type.type.name === 'poison'){
            nomeTipo = poison;

        }else if(type.type.name === 'psychic'){
            nomeTipo = psychic;

        }else if(type.type.name === 'rock'){
            nomeTipo = rock;

        }else if(type.type.name === 'steel'){
            nomeTipo = steel;

        }else if(type.type.name === 'water'){
            nomeTipo = water;
        }

        return(
            <ContentTypes>
                <img width={'80em'} src={nomeTipo} alt={"Imagem do tipo " + type.type.name}/>
                <p>{type.type.name.toUpperCase()}</p>
            </ContentTypes>
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
                    {renderMoves}
                </DivContentWindow>
            </DivJanelaVertical>

            <DivJanelaHorizontal>
                <DivContentTypes>
                    {renderTypes}
                </DivContentTypes>
            </DivJanelaHorizontal>
        </DivConteudo>
    )
}

export default Detalhe_Pokemon;