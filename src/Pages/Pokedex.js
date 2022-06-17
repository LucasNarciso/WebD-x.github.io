//REACT
import React, {useState, useEffect} from "react";

//ROUTES
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Coordinator";

//COMPONENTES
import NavBar from "../Components/NavBar/NavBar";
import Contatos from "../Components/Contatos/Contatos";
import CardPokemon from "../Components/CardPokemon/CardPokemon";
import ModalBatalha from "../Components/ModalBatalha/ModalBatalha";

//STYLED COMPONENTES
import { GlobalStyle, DivConteudo, MensagemPokVazia } from "../Styles/PokedexStyle";

function Pokedex() {

    const [pokemons, setPokemons] = useState([])
    const [qtdPokemons, setQTDPokemons] = useState(0)
    const [selectBattle, setSelectBattle] = useState([ 0, 0 ])
    const [modal, setModal] = useState(undefined)

    const navigate = useNavigate();

    useEffect(() => {
        console.log(selectBattle)
        setPokemons(JSON.parse(localStorage.getItem("pokédex")));
    }, [])

    const selecionaCard = (id) => {
        if (selectBattle[0] === 0) {
            selectBattle[0] = id
        }else if(selectBattle[0] === id) {
            selectBattle[0] = 0
        }else if(selectBattle[1] === 0) {
            selectBattle[1] = id
        }else if(selectBattle[1] === id) {
            selectBattle[1] = 0
        }
        console.log(selectBattle)
    }
    
    const removePokemon = (id) => {
        const newVetor = pokemons.filter((poke) => {
            return poke !== id
        })

        setPokemons(newVetor)
    }

    const renderizarCards = pokemons.map((card) => {

        return(
            <CardPokemon removePoke={removePokemon.bind(this)} func={selecionaCard.bind(this)} selecionados={selectBattle} key={card} url={card} />
        )
    });

    const retirarModal = () => {
        setModal(undefined)
    }

    const batalhaPokemon = () => {
        setModal(<ModalBatalha funcRetirarModal={retirarModal.bind(this)} pokemons={selectBattle}/>)
    }

    return(
        <DivConteudo>
            <GlobalStyle/>
            <NavBar titulo={"POKÉDEX"} onClickBotao1={() => {goBack(navigate)}} onClickBotao2={() => {batalhaPokemon()}} botao1={"VOLTAR"} botao2={"BATALHAR"}/>
            {pokemons.length!==0 ? renderizarCards : <MensagemPokVazia>Sua pokédex está vazia.</MensagemPokVazia>}
            {modal}
            <Contatos/>
        </DivConteudo>
    )

}

export default Pokedex;