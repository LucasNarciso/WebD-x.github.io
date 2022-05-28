import styled from "styled-components";

//Estilo da dive contendo todo o conteúdo da página home
export const DivConteudo = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const DivJanelaVertical = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20em;
    height: 30em;
    background-color: #007EB0;
    border-radius: 0.2em;   
    padding: 1em;
    margin: 2.3em;
    color: white;
`

export const DivContentWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const ItemMove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const DivJanelaHorizontal = styled.div`
    width: 60em;
    height: 8em;
    background-color: #007EB0;
    border-radius: 0.2em;
    margin-bottom: 3em;
`

export const DivImagemPokemon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 13.5em;
    border-radius: 0.2em;
`

export const Titulo = styled.p`
    font-weight: bold;
`

export const PartStatus = styled.div`
    width: 100%;
    height: 3em;
    display: flex;
    flex-direction: column;
`