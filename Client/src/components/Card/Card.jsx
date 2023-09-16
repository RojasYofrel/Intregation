import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card =({id, name , status, species, gender, origin, image, onClose})=> {
   return (
      <div className={style.container}>
         <div className={style.scape}>
            <Link to={`/detail/${id}`}>
               <h2 className={style.name}>{name}</h2>
            </Link>
            <button className={style.button} onClick={()=>{onClose(id)}}>X</button>
         </div>
         <h2 className={style.info}>Estado: {status}</h2>
         <h2 className={style.info}>Especie: {species}</h2>
         <h2 className={style.info}>Genero: {gender}</h2>
         <h2 className={style.info}>Origen: {origin}</h2>
         <img className={style.img} src={image} alt='character' />
      </div>
   );
}

export default Card;
