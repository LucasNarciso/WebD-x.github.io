import React from "react";

import { DIvBarra } from "./BarraDeProgressoStatusStyle";

function BarraDeProgressoStatus (props) {
    return(
        <DIvBarra style={{width: props.percent}}/>
    )
}

export default BarraDeProgressoStatus;