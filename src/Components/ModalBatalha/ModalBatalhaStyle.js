import styled from "styled-components";

export const DivModal = styled.div`
    position: absolute;
    width: 50em;
    height: 10em;
    background-color: white;
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const BotaoFechar = styled.button`
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