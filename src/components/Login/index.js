import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default function Login() {
  return (
    <div className="login">
        <h2>Entrar</h2>
        <p>Bem Vindo!</p>
        <input type="text" placeholder="User" />
        <input type="password" placeholder="Password" />
        <Link to="/home" >Entrar</Link>
        <Link to="/register" >Crie uma conta</Link>
    </div>
  );
}
