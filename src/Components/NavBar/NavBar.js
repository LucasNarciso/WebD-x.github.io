import React from "react";

import {BotaoFantasma, BotaoNav, DivNavBar} from './NavBarStyled';

function NavBar(props) {
    return(
        <DivNavBar>
            <BotaoNav>{props.botao1}</BotaoNav>
                {props.titulo}
            <BotaoFantasma/>
        </DivNavBar>
    )
}

export default NavBar;