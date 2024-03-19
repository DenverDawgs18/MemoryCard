import {useState, useEffect} from 'react'
export default function Card({name, id, onClick}){
    const [sprite, setSprite] = useState('')
    let newName = name.toLowerCase()
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + newName, {
    mode: 'cors'
  })
  .then((response) => response.json())
  .then((json) =>{ setSprite(json.sprites.front_default)
  })
  
  }, []);
  let properName = name.charAt(0).toUpperCase();
  return(
    <div className="card" onClick={onClick}>
        <img src={sprite} alt={name} />
        <p>{name}</p>
    </div>
  )
}
