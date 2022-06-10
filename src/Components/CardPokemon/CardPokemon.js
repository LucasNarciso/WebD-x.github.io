//REACT
import React, {useState, useEffect} from "react";
import axios from "axios";

//ROUTES
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Routes/Coordinator";

//STYLED COMPONENTES
import { DivCardPokemon, BotaoCard, DivInternaCard, DivBotoesCard } from "./CardPokemonStyle";

function CardPokemon(props) {

    const [Imagen, setImagen] = useState("");
    const [Id, setId] = useState("");
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [nomeBotao, setNomeBotao] = useState("");

    useEffect(() => {
        getDados();
    }, [])
    
    //Necessário para que os botões dos cards atualizem quando a pagina for iniciada.
    useEffect(() => {
        trocaBotao();
    }, [Id])

    //Requisição da API
    const getDados = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + props.url, {
            headers: {
            "Content-Type": "application/json"
            }
        }).then((resposta) =>{

            setImagen(resposta.data.sprites.front_default)
            setId(resposta.data.id)
            setData(resposta.data)

        }).catch((err) => {
            console.log(err.menssage)
        })
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

        if (nomeBotao === "ADICIONAR") {
            adicionaPokemon(Id);
            trocaBotao();
        }else{
            removePokemon(Id);
            trocaBotao();
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

    return(
        <DivCardPokemon>
            <DivInternaCard>
                <p>{data.name && data.name.toUpperCase()}</p>
                <img width={'120em'} src={Imagen} alt={"Imagen do pokémon " + data.name}></img>
            </DivInternaCard>
            <DivBotoesCard>
                <BotaoCard onClick={() => {botaoPokemon()}}>{nomeBotao}</BotaoCard>
                <BotaoCard onClick={() => {goToDetailPage(navigate, Id)}}>DETALHES</BotaoCard>
            </DivBotoesCard>
        </DivCardPokemon>
    )

}

export default CardPokemon;