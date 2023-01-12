import React from "react";
import './PokemonsContainer.css'
const PokemonsContainer = (props) =>{

    return (
        <div className="Pokemons_container">
            {props.children}
        </div>
    )
}

export default PokemonsContainer 