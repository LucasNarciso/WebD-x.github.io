import React from "react";

import {BotaoDois, BotaoFantasma, BotaoUm, DivNavBar} from './NavBarStyled';

function NavBar(props) {

    if (props.botao2 === false) {
        return(
            <DivNavBar>
                <BotaoUm onClick={() => {props.onClickBotao1()}}>{props.botao1}</BotaoUm>
                    {props.titulo && props.titulo.toUpperCase()}
                <BotaoFantasma></BotaoFantasma>
            </DivNavBar>
        )
    }else{
        return(
            <DivNavBar>
                <BotaoUm onClick={() => {props.onClickBotao1()}}>{props.botao1}</BotaoUm>
                    {props.titulo && props.titulo.toUpperCase()}
                <BotaoDois onClick={() => {props.onClickBotao2()}}>{props.botao2}</BotaoDois>
            </DivNavBar>
        )
    }
}

export default NavBar;