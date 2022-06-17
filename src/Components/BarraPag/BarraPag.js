import React, {useEffect, useState} from "react"

//STYLED-COMPONENTS
import { DivPag, ConteudoPag, BotaoPag, NumeroPagina, NumeroPaginaEscolhido } from "./BarraPagStyle"

function BarraPag (props) {

    const [paginaAtual, setPaginaAtual] = useState(1);
    const [pagination, setPagination] = useState([]);

    //Função principal da troca da atualização dos números
    function trocarNumPagina() {

        let antes = [];
        let depois = [];

        if (paginaAtual <= 5) {

            for (let i = 0; i < 10; i++) {

                if (i < paginaAtual && i !== 0) {

                    antes.push(<><NumeroPagina onClick={() => {selecionarPagina(i)}}>{i}</NumeroPagina><p>.</p></>);
                }
            }

            for (let j = 0; j < 10; j++) {

                if (j > paginaAtual) {
                    depois.push(<><p>.</p><NumeroPagina onClick={() => {selecionarPagina(j)}}>{j}</NumeroPagina></>);
                }
            }

        } else {

            for (let i = 0; i < 8; i++) {

                if ((paginaAtual + i) >= 57) {

                    antes.push(<><NumeroPagina onClick={() => {selecionarPagina((paginaAtual - 8) + i)}}>{(paginaAtual - 8) + i}</NumeroPagina><p>.</p></>);

                } else if (i > 3) {

                    antes.push(<><NumeroPagina onClick={() => {selecionarPagina((paginaAtual - 8) + i)}}>{(paginaAtual - 8) + i}</NumeroPagina><p>.</p></>);
                }
            }

            for (let j = 0; j < 8; j++) {

                if ((paginaAtual + j + 1) <= 57 && paginaAtual >= 54) {

                    depois.push(<><p>.</p><NumeroPagina onClick={() => {selecionarPagina(paginaAtual + j + 1)}}>{paginaAtual + j + 1}</NumeroPagina></>);

                } else if (j < 4 && paginaAtual < 54) {

                    depois.push(<><p>.</p><NumeroPagina onClick={() => {selecionarPagina(paginaAtual + j + 1)}}>{paginaAtual + j + 1}</NumeroPagina></>);
                }
            }

        }
        setPagination([antes, <NumeroPaginaEscolhido>{paginaAtual}</NumeroPaginaEscolhido>, depois]);
        console.log(pagination)
    }

    //Atualiza o número das páginas a cada troca de página
    useEffect(() => {
        trocarNumPagina();
    }, [paginaAtual])

    //Função que avança o número da página atual
    const next = () => {
        if (paginaAtual < 57) {
            setPaginaAtual(paginaAtual + 1)
        }
    }
    
    //Função que retrocede o número da página atual
    const previous = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1)
        }
    }

    //Altera a Página Inicial juntamente com o Offset da API
    const selecionarPagina = (num) => {
        setPaginaAtual(num)
        props.select((num-1)*20)
    }

    return(
        <DivPag>
            <BotaoPag onClick={() => {props.previous(); previous()}}>
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.788855 10.1056L19.5528 0.723607C20.2177 0.391156 21 0.874652 21 1.61803V20.382C21 21.1253 20.2177 21.6088 19.5528 21.2764L0.788854 11.8944C0.0518059 11.5259 0.0518063 10.4741 0.788855 10.1056Z" fill="white"/>
                </svg>
            </BotaoPag>

            <ConteudoPag>
                {pagination}
            </ConteudoPag>

            <BotaoPag onClick={() => {props.next(); next()}}>
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.2111 11.8944L1.44721 21.2764C0.782312 21.6088 0 21.1253 0 20.382L0 1.61803C0 0.874651 0.782312 0.391157 1.44721 0.723606L20.2111 10.1056C20.9482 10.4741 20.9482 11.5259 20.2111 11.8944Z" fill="white"/>
                </svg>
            </BotaoPag>
        </DivPag>
    )

}

export default BarraPag;