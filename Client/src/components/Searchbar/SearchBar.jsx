import styles from './Searchbar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [id,setId]= useState('');
   const handleChange = (e)=>{
      setId(e.target.value);
   }
   const {onSearch} = props;
   return (
      <div>
         <input className={styles.input} type='search' onChange={handleChange} value={id}/>
         <button className={styles.search} onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
