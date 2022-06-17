//REACT
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PÁGINAS
import Detalhe_Pokemon from "../Pages/Detalhe_Pokemon";
import Home from "../Pages/Home";
import Pokedex from "../Pages/Pokedex";
import Erro from "../Pages/Erro";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index path={"WebDex.github.io/"} element={<Home/>}/>
                <Route path={"WebDex.github.io/pokedex/"} element={<Pokedex/>}/>
                <Route path={"WebDex.github.io/detalhes/:Id"} element={<Detalhe_Pokemon/>}/>
                <Route path={"*"} element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}