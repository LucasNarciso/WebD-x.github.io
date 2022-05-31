import styled from "styled-components";

export const DivContatos = styled.div`
    position: fixed;
    margin: 0.5em;
    right: 0.1em;
    bottom: 0.1em;
    display: flex;
`

export const DivCirculo = styled.a`
    border-radius: 100%;
    margin: 0.5em;
    height: 2em;
    width: 2em;
    background-color: white;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`