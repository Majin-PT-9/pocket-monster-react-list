import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card, CardBody, CardText, CardTitle, CardSubtitle, Button, Col} from 'reactstrap'

function PokeCard({name, url, row}){

const [isLoading, setLoading] = useState(true);
console.log(url)
  const [pokemon, setPokemon] = useState([])


  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      });
  }, []);
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }else{


  const bName = name.charAt(0).toUpperCase() + name.slice(1);
  const price = Math.round(pokemon.base_experience * 1.23);
  const types = pokemon.types;
  row = row === "1" ? row = true : row=false;

  return (
    <>
    <Col className='pokeColumn'>
      <Card color="dark" inverse style={{ width: '20rem'}}>
            <img alt={name} src={pokemon.sprites.front_default === null ? pokemon.sprites.back_default : pokemon.sprites.front_default} />
      <CardBody>
        <CardTitle tag="h5">
  {bName}      </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {price}€
        </CardSubtitle>
        <CardText>
        {
        types.map((type) =>
          <b>{type.type.name.toUpperCase()} </b>
          )
        }
        
        </CardText>
        <Button>
          Buy
        </Button>
      </CardBody>
      </Card>
    </Col>
  </>
  )
}
}
export default PokeCard