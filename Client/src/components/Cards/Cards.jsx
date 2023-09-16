import style from './Cards.module.css';
import Card from "../Card/Card"; // otra manera de organizar los archivos, usando index en la carpeta del componente

export default function Cards(props) {
   const { characters , onClose} = props;
   return <div className={style.container}>
      {characters.map((char)=>{
      return(
         <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image= {char.image}
            onClose={onClose}
         />
      )
      })}
   </div>;
}
