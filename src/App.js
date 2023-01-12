
import './App.css';
import {  useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import PokemonsContainer from './components/PokemonsContainer';

import axios from 'axios'
import PokemonCard from './components/PokemonCard';
import PokemonPesquisa from './components/PokemonPesquisa';
import PokemonCardPesquisa from './components/PokemonCardPesquisa';


function App() {

    const [loading,setLoading] = useState(false)
    const [pokemons, setPokemons] = useState()
    const [id,setId] = useState()
    const [pesquisa,setPesquisa] = useState()
    const [pesquisaErr, setPesquisaErr] = useState("Esperando valores")
    

    const getPokemon = (id) =>{
        if(id <= 0 || id > 386 || id === undefined){
            console.log('pokemon não encontrado')
            setPesquisa(undefined)
            setPesquisaErr("Pokemon não encontrado")
        }
        else{
            axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
            .then(res =>{
                setPesquisa(res.data)

            }).catch(err =>{
                console.log(err)
            })
            
        }


    }
    useEffect(() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=386").then(res =>{
            setPokemons(res.data.results)
            setLoading(true)
            
        }).catch(err =>{
            console.log(err)
        })
    })

    return (
    <div className="App">
        {loading === true?(
                    <Layout>
                    <PokemonPesquisa>
                        <div className='container_botoes'>
                            <input  placeholder="Procure um pokemon por id"className='input_pesquisa' type='number' value={id} onChange={(e) => setId(e.target.value)}></input>
                            <input className='input_submit'type='submit' value="Pesquisar" onClick={() => getPokemon(id)}></input>
                        </div>
                        {pesquisa !== undefined ?(<PokemonCardPesquisa data={pesquisa}/>):(
                            <h3>{pesquisaErr}</h3>
                        )}
                        
                    </PokemonPesquisa>
                    <PokemonsContainer>
                        {pokemons.map((item) =>(
                            <PokemonCard data={item}></PokemonCard>
                        ))}
                    </PokemonsContainer>
                </Layout>
        ):(
            <h1>Carregando...</h1>
        )}


    </div>
    );
}

export default App;
