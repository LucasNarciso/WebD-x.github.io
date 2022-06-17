//REACT
import React, {useState, useEffect} from "react";
import axios from "axios";

//ROUTES
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Routes/Coordinator";

//STYLED COMPONENTES
import { DivCardPokemon, BotaoCard, DivInternaCard, DivBotoesCard, DivImgPokeball, DivCardPokemonSelected } from "./CardPokemonStyle";

//ASSETS
import Pokeball_Loading from "../../Assets/gif/Pokeball_Loading.gif"
import Pokeball from "../../Assets/img/Pokeball.svg"

function CardPokemon(props) {

    const [Imagem, setImagem] = useState("");
    const [Id, setId] = useState("");
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [nomeBotao, setNomeBotao] = useState("");
    const [Carregando, setCarregando] = useState(true);
    const [Selected, setSelected] = useState(false);

    useEffect(() => {
        getDados();
    }, [])
    
    //Necessário para que os botões dos cards atualizem quando a pagina for iniciada.
    useEffect(() => {
        trocaBotao();
    }, [Id])

    //Requisição da API
    const getDados = async () => {
        setCarregando(true)
        try {
            const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon/" + props.url, {
                headers: {
                    "Content-Type": "application/json"
                }

            })
            setCarregando(false)
            setImagem(resposta.data.sprites.front_default)
            setId(resposta.data.id)
            setData(resposta.data)

        } catch (err) {
            setCarregando(false)
            console.log(err.menssage)
        }
        
    }

    //Função que altera o nome dos botões
    const trocaBotao = () => {

        if (verificaPokemon()) {
            setNomeBotao("REMOVER")
        }else{
            setNomeBotao("ADICIONAR")
        }
    }

    //Função do onclick do botão
    const botaoPokemon = () => {
        if (JSON.parse(localStorage.getItem("pokédex")).length < 20) {
            if (nomeBotao === "ADICIONAR") {
                adicionaPokemon(Id);
                trocaBotao();
            }else{
                removePokemon(Id);
                trocaBotao();
                if (props.removePoke) {
                    props.removePoke(Id)
                }
            }
        }else{
            alert("Sua pokédex está lotada! Máximo de 20 pokémons.")
        }
    }

    //Verifica se o pokémon ja está na pokédex
    const verificaPokemon = () => {

        let pokemonsLS = JSON.parse(localStorage.getItem("pokédex"));

        const verify = pokemonsLS.filter((poke) => {
            return poke === Id
        })

        if (verify.length === 0) {
            return false
        }else{
            return true
            
        }
    }

    //Função que adiciona o pokémon na pokédex
    const adicionaPokemon = (idPokemon) => {

        let newVetor = [...JSON.parse(localStorage.getItem("pokédex")), idPokemon]

        localStorage.setItem("pokédex", JSON.stringify(newVetor));
        
    }

    //Função que remove o pokémon da pokédex
    const removePokemon = (idPokemon) => {

        const newPokemons = JSON.parse(localStorage.getItem("pokédex")).filter((poke) => {
            return idPokemon !== poke
        })

        localStorage.setItem("pokédex", JSON.stringify(newPokemons));
        
    }

    //Função que troca o card caso ele seja selecionado
    const selecionaCard = (func) => {
        if (props.selecionados) {
            if (func === "selecionar" && (props.selecionados[0] === 0 || props.selecionados[1] === 0)) {
                setSelected(true)
            }else{
                setSelected(false)
            }
        }
        

        props.func(Id);
    }

    if (Selected) {
        return(
            <DivCardPokemonSelected>
                <DivInternaCard onClick={() => {selecionaCard("remover")}} >
                    <p>{data.name && data.name.toUpperCase()}</p>
                    <img width={'120em'} src={Carregando ? Pokeball_Loading : Imagem === null ? Pokeball : Imagem} alt={Carregando ? "" : "Imagem do pokémon " + data.name}></img>
                </DivInternaCard>
                <DivBotoesCard>
                    <BotaoCard onClick={() => {botaoPokemon()}}>{Carregando ? "" : nomeBotao}</BotaoCard>
                    <BotaoCard onClick={() => {goToDetailPage(navigate, Id)}}>DETALHES</BotaoCard>
                </DivBotoesCard>
            </DivCardPokemonSelected>
        )
    }else{
        return(
            <DivCardPokemon>
                <DivInternaCard onClick={() => {selecionaCard("selecionar")}} >
                    <p>{data.name && data.name.toUpperCase()}</p>
                    <img width={'120em'} src={Carregando ? Pokeball_Loading : Imagem === null ? Pokeball : Imagem} alt={Carregando ? "" : "Imagem do pokémon " + data.name}></img>
                </DivInternaCard>
                <DivBotoesCard>
                    <BotaoCard onClick={() => {botaoPokemon()}}>{Carregando ? "" : nomeBotao}</BotaoCard>
                    <BotaoCard onClick={() => {goToDetailPage(navigate, Id)}}>{Carregando ? "" : "DETALHES"}</BotaoCard>
                </DivBotoesCard>
            </DivCardPokemon>
        )
    }

}

export default CardPokemon;