import React from 'react';
import { Link } from 'react-router-dom'
import logo from './amigoslogo.png'

import './style.css';

export default function Header(props) {
    if(props.logged) 
    {
        return (
            <header>
                <img src={logo} alt="Logo"></img>
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
            <img src={logo} alt="Logo"></img>
            <h3>Amigos da Ciência</h3>
            <nav>
                <Link to="/home" >Home</Link>
                <Link to="/tracker" >Trilha</Link>
                <Link to="/profile" >Perfil</Link>
                <Link to="/" >Sair</Link>
            </nav>
        </header>
    );
}
