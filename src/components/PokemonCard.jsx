import React, {useEffect,useState} from "react";
import axios from "axios";
import './Card.css'
const PokemonCard = ({data}) =>{

    const [pokemonDetails, setPokemonDetails] = useState()
    const [loading,setLoading] = useState(false)

    useEffect(() =>{
        axios.get(data.url).then(res =>{

            setPokemonDetails(res.data)
            setLoading(true)

        }).catch(err =>{
            console.log(err)
        })
    })
    return(
        <div className="Card">
            {loading === true?(
                <>
                    <div className="pokemon_title">
                        <p>{'#'+pokemonDetails.id}</p>
                        <img src={pokemonDetails.sprites.front_default} alt="pokemon" />
                    </div>
                    <p>{pokemonDetails.name}</p>
                </>
            ):(
                <p>Carregando...</p>
            )}
        </div>
    )
}

export default PokemonCard