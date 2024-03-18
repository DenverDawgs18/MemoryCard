import {useState, useEffect} from 'react'
export default function Card({name}){
    const [sprite, setSprite] = useState('')
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + name, {
    mode: 'cors'
  })
  .then((response) => response.json())
  .then((json) =>{ setSprite(json.sprites.front_default)
  })
  
  }, []);
  return(
    <div className="card">
        <img src={sprite} alt={name} />
        <p>{name}</p>
    </div>
  )
}
