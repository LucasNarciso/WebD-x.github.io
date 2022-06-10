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
`

export const DivPaiErro = styled.div`
    margin: auto;
    background-color: white;
    width: 10em;
    height: 10em;
`