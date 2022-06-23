//REACT
import { HashRouter, Routes, Route } from "react-router-dom";

//PÁGINAS
import Detalhe_Pokemon from "../Pages/Detalhe_Pokemon";
import Home from "../Pages/Home";
import Pokedex from "../Pages/Pokedex";
import Erro from "../Pages/Erro";

export const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route index path={"/"} element={<Home/>}/>
                <Route path={"/pokedex/"} element={<Pokedex/>}/>
                <Route path={"/detalhes/:Id"} element={<Detalhe_Pokemon/>}/>
                <Route path={"*"} element={<Erro/>}/>
            </Routes>
        </HashRouter>
    )
}