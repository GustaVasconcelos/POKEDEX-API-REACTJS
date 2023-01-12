import './PokemonCardPesquisa.css'

const PokemonCardPesquisa = ({data}) =>{

    return(
        <div className="Card_pesquisa">
            <div className='Card_container_title'>

                <div className='Card_pesquisa_title'>
                    <p>#{data.id}</p>
                    <img src={data.sprites.front_default} alt="pokemon" />
                </div>

                <h3>{data.name}</h3>
            </div>
            <div className='Card_container_infos'>
                <div className='Card_infos_ability'>
                    <div>
                        <h3>Habilidades</h3>
                    </div>
                    
                    {data.abilities.map((item) =>(
                        <p>{item.ability.name}</p>
                    ))}
                </div>
                <div className='Card_infos_moves'>
                    <h3>Movimentos</h3>
                    <div className='Card_infos_moves_details'>
                        {data.moves.map((item) =>(
                            <p>{item.move.name}</p>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PokemonCardPesquisa