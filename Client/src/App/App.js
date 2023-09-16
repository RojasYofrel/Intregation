import React from 'react';
import { useState } from 'react'; 
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import style from './App.module.css';
import Cards from '../components/Cards/Cards.jsx';
import Nav from '../components/Nav/Nav.jsx'
import About from '../components/About/About';
import Detail from '../components/Detail/Detail';
import Login from '../components/Login/Login.jsx'

function App() {

   const [ characters, setCharacters ] = useState([]);

   const onSearch = (id) =>{
      axios(`https://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   const onClose = (id)=>{
      setCharacters(characters.filter((char)=> char.id !== Number(id)))
   }

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   // function login(userData) {  !IMPORTANTE DE EXPRESS 
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   return (
      <div className={style.App}>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
