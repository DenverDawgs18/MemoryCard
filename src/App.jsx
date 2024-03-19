import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
  let pokemon = [{
    name: 'Samurott',
    id: 0
  },{
    name: 'Zekrom',
    id: 1
  },{
    name: 'Kyurem-Black',
    id: 2
  },{
    name: 'Braviary',
    id: 3
  },{
    name: 'Druddigon',
    id: 4
  },{
    name: 'Mienshao',
    id: 5
  },{
    name: 'Reshiram',
    id: 6
  },{
    name: 'Emolga',
    id: 7
  },{
    name: 'Jellicent',
    id: 8
  },{
    name: 'Krookodile',
    id: 9
  },{
    name: 'Excadrill',
    id: 10
  },{
    name: 'Woobat', 
    id: 11
  }
];
let cards = [];
function randomPokemon(){
  let len = pokemon.length;
  let used = [];
  for(let i = 0; i < len; i++){
    let check = true;
    while(check){
     let n = randomNumber(len)
     if (!used.includes(n)){
        used.push(n)
        check = false;
     }
    
     
  }}
  let newObjs = []
  for(let i = 0; i < used.length; i++){
    let ne =  pokemon.find(obj => {
      return obj.id == used[i]
    })
    newObjs.push(ne)
  }
  for(let i = 0; i < newObjs.length; i++){
    cards.push(<Card name = {newObjs[i].name} key={newObjs[i].id} onClick={() => handleClick(newObjs[i].id)}></Card>)
  }
}
const[alrSelected, setAlrSelected] = useState([])
const [score, setScore] = useState(0)
const [bestScore, setBestScore] = useState(0)
function handleClick(k){
  
  if(alrSelected.includes(k)){
    if(score > bestScore){
      setBestScore(
        score
      )
    }
    setScore(
      0
    )
    
  }
  else{
    
    setScore(
      prevScore => prevScore + 1
    )
    setAlrSelected(
      [
        ...alrSelected, 
        k
      ]
    )
  }
}

function randomNumber(num){
  return Math.floor(Math.random() * num)
}

randomPokemon()
  return (
    <>
    <div className="notCards">
      <div className="header">
        <h1>Pokemon Memory Game!</h1>
        <h4>Click on the Pokemon, but don't click any more than once!</h4>
      </div>
      <div className="scores"><p>Current score: {score}
      </p> <p>Best score: {bestScore}</p>
      </div>
    </div>
      <div className="cards">
        {cards}
      </div>
      
    </>
  );
}

export default App;
