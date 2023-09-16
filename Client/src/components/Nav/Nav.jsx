import style from './Nav.module.css';
import SearchBar from '../Searchbar/SearchBar.jsx';

import React from 'react';
import { Link } from 'react-router-dom';


const Nav =({onSearch})=>{
    return(
        <div className={style.fondo}>
            <Link to='/about'>
            <button>About</button>
            </Link>
            <Link to='/home'>
            <button>Home</button>
            </Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;