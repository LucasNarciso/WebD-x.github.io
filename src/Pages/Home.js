//REACT
import React, {useState, useEffect} from "react";
import axios from "axios";

//ROUTES
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../Routes/Coordinator";

//STYLED COMPONENTS
import { DivConteudo, GlobalStyle, DivPag, BotaoPag, ConteudoPag } from "../Styles/HomeStyle";

//CONSTANTES
import { baseURL } from "../Constants/Consts";

//COMPONENTES
import BarraPag from "../Components/BarraPag/BarraPag";
import NavBar from "../Components/NavBar/NavBar";
import Contatos from "../Components/Contatos/Contatos";
import CardPokemon from "../Components/CardPokemon/CardPokemon";

function Home(props) {

    const [Pokemons, setPokemons] = useState([]);
    const [Data, setData] = useState({});
    const [Pagina, setPagina] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getPokemons();
    }, [Pagina])

    useEffect(() => {
        atualizaLocalStorage();
    }, [])

    //Função que pega os dados da api com base na url montada
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

    //Função que verifica se o Local Storage possui a variável necessária, caso não tenha ela é criada.
    const atualizaLocalStorage = () => {
        if (localStorage.getItem("pokédex") === null) {

            localStorage.setItem("pokédex", JSON.stringify([]))
            
        }else{
            setPokemons(JSON.parse(localStorage.getItem("pokédex")));
        }
    }

    //Função que passa para a próxima página 
    const nextPage = () => {
        if (Data.next !== null) {
            setPagina(Pagina + 20)
        }
    }

    //Função que retorna para a página anterior
    const previousPage = () => {
        if (Data.previous !== null) {
            setPagina(Pagina - 20)
        }
    }

    //Função que seleciona a página específica com base no número de página clicado
    const selecionarPagina = (num) => {
        setPagina(num);
    }

    //Função que pega o ID do pokémon a partir da URL
    const formataID = (url) => {

        let id = "";
        let urlDividida = url && url.split("/");
        id = urlDividida && urlDividida[6];

        return id;
    }

    //Função que renderiza os cards
    const renderizarCards = Pokemons.map((card) => {

        let id = formataID(card.url)

        return(
            <CardPokemon key={Math.random()} url={id}/>
        )
    });

    return(

        <DivConteudo>
            <GlobalStyle/>
            <NavBar titulo={"HOME"} onClickBotao1={() => {goToPokedexPage(navigate)}} botao1={"POKÉDEX"} botao2={false}/>
            {renderizarCards}
            <BarraPag select={selecionarPagina.bind(this)} next={() => {nextPage()}} previous={() => {previousPage()}}></BarraPag>
            <Contatos/>
        </DivConteudo>
        
    )
}

export default Home;