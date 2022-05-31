import styled from 'styled-components';

export const DivPag = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 2em;
margin-bottom: 3em;
`

export const ConteudoPag = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 250px;
margin: 0em 0.5em;
height: 32px; 
border-radius: 0.2em;
background-color: #3E846D;
font-size: 22px;
`

export const BotaoPag = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 3em;
height: 100%;
border: 0.1em solid #3E846D;
border-radius: 0.2em;
background-color: #3E846D;

:hover{
    cursor: pointer;
    border: 0.1em solid white;
}
`

export const NumeroPagina = styled.p`
    color: black;
    transition: 0.1s;

    :hover{
        color: white;
        transform: scale(1.3);
        cursor: pointer;
    }
`

export const NumeroPaginaEscolhido = styled.p`
    color: white;
    font-weight: bold;
    transform: scale(1.2);
`