import React from 'react'


function Content(){
    let pokecount = 0;
    const getPokemon =  fetch("https://pokeapi.co/api/v2/pokemon?limit=400&offset=0")
    .then((response) => response.json())
    .then((results) => {
        pokecount = results.count
        return results.count;
    });

  const pokeResult = await fetch("https://pokeapi.co/api/v2/pokemon?limit=400&offset=0");
  const resultbody = await pokeResult.json();
  const count = await resultbody.count;

  const printAddress = async () => {
    // const a = await getPokemon;
    pokecount = await pokeResult;
    console.log(pokecount);
    // console.log(a);
    // return a
  };
  printAddress();

    return (
    <div>
        <div className='container style'>
        </div>
    </div>
    )
}

export default Content