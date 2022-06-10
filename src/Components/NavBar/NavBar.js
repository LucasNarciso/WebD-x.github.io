import React from "react";

import {BotaoFantasma, BotaoNav, DivNavBar} from './NavBarStyled';

function NavBar(props) {

    return(
        <DivNavBar>
            <BotaoNav onClick={() => {props.onClickBotao1()}}>{props.botao1}</BotaoNav>
                {props.titulo && props.titulo.toUpperCase()}
            <BotaoFantasma/>
        </DivNavBar>
    )
}

export default NavBar;