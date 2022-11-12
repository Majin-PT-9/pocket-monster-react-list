import './App.css';
import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Container , Row} from 'reactstrap'

function App() {
  const title = "PokeMarket";
const groupSize = 3;
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then((res) => {
        setPokemons(res.data.results)
      })
  })
 
var rows = pokemons.map(function(pokemon) {
    // map content to html elements
    return <PokeCard key={pokemon.name} url={pokemon.url} row="1" name={pokemon.name}></PokeCard>;
  }).reduce(function(r, element, index) {
    // create element groups with size 3, result looks like:
    // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
    index % groupSize === 0 && r.push([]);
    r[r.length - 1].push(element);
    return r;
  }, []).map(function(rowContent) {
    // surround every group with 'row'
    return <Row className='pokeRow'>{rowContent}</Row>;
});

  return (
    <>
      <Header title={title} bgColor="EFF9F0" textColor="#1C77C3"></Header>
      <Container>
        {rows}
      
        
    </Container>
      
    </>
  );
}

export default App;
