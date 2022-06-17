//REACT
import React, {useEffect, UseEffect, useState, UseState} from "react";
import axios from "axios";

//STYLED COMPONENTS
import { BotaoFechar, DivModal } from "./ModalBatalhaStyle";


import { baseURL } from "../../Constants/Consts";

function ModalBatalha (props) {

    const [mensagem, setMensagem] =useState(true);
    const [dataPoke1, setDataPoke1] = useState([])
    const [dataPoke2, setDataPoke2] = useState([])
    const [nome1, setNome1] = useState("")
    const [nome2, setNome2] = useState("")
    const [resultBatalha, setResultBatalha] = useState("");
    const pokemons = props.pokemons;

    useEffect(() => {
        defineMensagem();
        DataPokemons();
    }, [])

    useEffect(() => {
        batalha();
    }, [dataPoke1, dataPoke2])

    const defineMensagem = () => {
        if ((pokemons[0] + pokemons[1]) === 0 || (pokemons[0] + pokemons[1]) === 1) {
            setMensagem(true)
        }else{
            setMensagem(false)
        }
    }

    const DataPokemons = () => {
        for (let i = 0; i < 2; i++) {

            axios.get(baseURL + "pokemon/" + props.pokemons[i], {
                headers: {
                "Content-Type": "application/json"
                }
            }).then((resposta) =>{
    
                if (i === 0) {
                    setDataPoke1(resposta.data.stats)
                    setNome1(resposta.data.name)
                }else{
                    setDataPoke2(resposta.data.stats)
                    setNome2(resposta.data.name)
                }

            }).catch((err) => {
                console.log(err.menssage)
            })

        }
    }

    const somatoria = (data) => {
        const soma = data.map((dado) => {
            return dado.base_stat
        });

        return (soma[0] + soma[1] + soma[2] + soma[3] + soma[4] + soma[5])
    }

    const batalha = () => {
        let soma1 = somatoria(dataPoke1)
        let soma2 = somatoria(dataPoke2)
        let resultado = ""

        if (soma1 > soma2) {
            resultado = nome1;
        }else{
            resultado = nome2;
        }
        setResultBatalha(resultado)
    }

    return(
        <DivModal>
            <p>{nome1} VS {nome2}</p>
            <p>VENCEDOR:</p>
            <p>{resultBatalha && resultBatalha}</p>
            <p>{mensagem ? "Você precisa selecionar dois pokémons para que possa haver uma batalha" : ""}</p>
            <BotaoFechar onClick={() => {props.funcRetirarModal()}}>FECHAR</BotaoFechar>
            
        </DivModal>
    )
}

export default ModalBatalha;