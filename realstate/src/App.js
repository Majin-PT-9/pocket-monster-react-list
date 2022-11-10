import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"

 function App() {
  const title = "Realstate";
  const homeCount = 25;
  const price = 250000;

  // const getPokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=400&offset=0', {
  //           headers: { 'Content-Type': 'application/json' },
  //           method: 'GET',
  //       }).then((response) => { response.json()
  //       }).then((response) => {
  //         return resolve(response);
  //     })
  //         .catch((err) => {
  //               return reject(err);
  //           });
  //   });

  
//  let s = printAddress();
//  console.log(s+'s');
  // getPokemon().then((response) => {
  //   const pokearray = response.results;
  //   console.log(response.results);
  // });
  // pokecount = pokearray.length;




  return (
    <>
      <Header title={title} bgColor="EFF9F0" textColor="#1C77C3"></Header>
      <p>Ímóveis</p>
      <Content></Content>
      <h3>Preço médio:</h3>

    </>
  );
}

export default App;
