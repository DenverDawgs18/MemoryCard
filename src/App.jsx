import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
  let pokemon = [{
    name: 'samurott',
    id: 0
  },{
    name: 'zekrom',
    id: 1
  },{
    name: 'kyurem-black',
    id: 2
  },{
    name: 'braviary',
    id: 3
  },{
    name: 'druddigon',
    id: 4
  },{
    name: 'mienshao',
    id: 5
  },{
    name: 'reshiram',
    id: 6
  },{
    name: 'emolga',
    id: 7
  },{
    name: 'jellicent',
    id: 8
  },{
    name: 'krookodile',
    id: 9
  },{
    name: 'excadrill',
    id: 10
  },{
    name: 'woobat', 
    id: 11
  }
];
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
  console.log(used)
}
randomPokemon()
function randomNumber(num){
  return Math.floor(Math.random() * num)
}

  
  return (
    <div className="cards">
      <Card name={'samurott'}></Card>
      <Card name={'zekrom'}></Card>
      <Card name={'kyurem-black'}></Card>
      <Card name={'braviary'}></Card>
      <Card name={'druddigon'}></Card>
      <Card name={'mienshao'}></Card>
      <Card name={'reshiram'}></Card>
      <Card name={'emolga'}></Card>
      <Card name={'jellicent'}></Card>
      <Card name={'krookodile'}></Card>
      <Card name={'excadrill'}></Card>
      <Card name={'woobat'}></Card>
    </div>
  );
}

export default App;
