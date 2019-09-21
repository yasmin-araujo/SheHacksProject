import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default function Header(props) {
    if(props.logged) 
    {
        return (
            <header>
                <img src="" alt="Logo"></img>
                <h3>T-Rex</h3>
                <nav>
                    <Link to="/home" >Home</Link>
                    <Link to="/" >Login</Link>
                    <Link to="/register" >Cadastro</Link>
                </nav>
            </header>
        );
    }
    
    return (
        <header>
            <img src="" alt="Logo"></img>
            <h3>T-Rex</h3>
            <nav>
                <Link to="/home" >Home</Link>
                <Link to="/tracker" >Trilha</Link>
                <Link to="/profile" >Perfil</Link>
                <Link to="/" >Sair</Link>
            </nav>
        </header>
    );
}
