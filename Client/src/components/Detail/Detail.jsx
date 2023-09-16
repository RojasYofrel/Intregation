import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";


const Detail = ()=> {

   const {id} = useParams();
   const [character,setCharacter] = useState({});

   useEffect(() => {
      axios(`https:localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);


   return (
      <div>
      <h2>Name: {character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin?.name}</p>
      <img src={character.image} alt={''} />
      </div>
   );
}

export default Detail;