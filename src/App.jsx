import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
 


  
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
