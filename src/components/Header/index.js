import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default function Header(props) {
    if(props.logged) 
    {
        return (
            <header>
                <img src="" alt="Logo"></img>
                <h3>Yaslhermotto</h3>
                <nav>
                    <Link to="/" >Home</Link>
                    <Link to="/management" >Gerenciar</Link>
                    <Link to="/login" >Sair</Link>
                </nav>
            </header>
        );
    }

    return (
        <header>
            <img src="" alt="Logo"></img>
            <h3>Yaslhermotto</h3>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/login" >Login</Link>
                <Link to="/cadastro" >Cadastro</Link>
            </nav>
        </header>
    );
}
