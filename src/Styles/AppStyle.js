import styled, { createGlobalStyle } from 'styled-components'

//Estilização da div global
export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 35em;
`
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
