import styled from 'styled-components';

//Estilização da Div principal dos Cards
export const DivCardPokemon = styled.div`
    background-color: #007EB0;
    margin: 2em;
    border-radius: 0.2em;
`

//Div que contém a foto dos pokémons nos Cards
export const DivInternaCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 13em;
    height: 10em;
    margin: 0.5em;
    border-radius: 0.2em;
    text-align: center;
`

//Estilização dos botões dos Cards
export const BotaoCard = styled.button`
    background-color: white;
    height: 2.2em;
    margin-bottom: 0.5em;
    width: 7.5em;
    border-radius: 0.2em;
    border: none;
    color: black;

    :hover{
        cursor: pointer;
        border: 0.1em solid black;
    }
`

//Div que organiza os botões dos Cards
export const DivBotoesCard = styled.div`
    display: flex;
    justify-content: space-evenly;
`