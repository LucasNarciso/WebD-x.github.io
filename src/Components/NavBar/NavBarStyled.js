import styled from "styled-components";

//Define o estilo da Barra de Navegação de todo o site
export const DivNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3E846D;
    height: 3em;
    color: white;
    font-weight: bold;
    width: 100%;
`
//Define o Estilo dos botões da Barra de Navegação
export const BotaoNav = styled.button`
    background-color: #F6C026;
    color: white;
    height: 32px;
    width: 170px;
    margin: 0em 2.5em;
    border: none;
    border-radius: 0.2em;
    font-weight: bold;
    font-size: 17px;

    :hover{
        cursor: pointer;
        border: 0.2em solid white;
    }
`
//Botão utilizado apenas para dar o espaçamento necessário caso não haja dois botões na Barra de Navegação
export const BotaoFantasma = styled.button`
    background-color: transparent;
    height: 2.4em;
    width: 14em;
    margin: 0em 2em;
    border: none;
`