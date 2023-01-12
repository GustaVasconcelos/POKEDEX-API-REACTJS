import React from "react";
import './PokemonPesquisa.css'
const PokemonPesquisa = (props) =>{

    return(
        <div className="Pokemon_pesquisa">
            {props.children}
        </div>
    )
}

export default PokemonPesquisa