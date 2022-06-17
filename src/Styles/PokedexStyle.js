import styled, { createGlobalStyle } from "styled-components";

//Estilização global do site, retirando definições padrões
export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #ABE0AF;
    }

    /*Personaliza a Calha da Barra de rolagem */
    ::-webkit-scrollbar {
        width: 0.50em;
        height: 0.5em;
        background-color: transparent;
    }

    /*Personaliza a Barra de Rolagem*/
    ::-webkit-scrollbar-thumb {
        background: #E84A2A;
    }
`
//Estilo da dive contendo todo o conteúdo da página home
export const DivConteudo = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const MensagemPokVazia = styled.p`
    margin: 2em;
    color: white;
    font-size: 1.1em;
`