import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default function Register() {
  return (
    <div className="register">
      <h2>Crie uma conta</h2>
      <p className="top">Preparado para embarcar nessa aventura</p>
      <p className="top" id="last"> pelo conhecimento? </p>
      {/* <p className="pre-input">Nome:</p> */}
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Idade" />
      {/* <p className="pre-input">E-mail do responsável</p> */}
      <input type="text" placeholder="E-mail" />
      {/* <p className="pre-input">E-mail</p> */}
      <input type="text" placeholder="E-mail do responsável" />
      {/* <p className="pre-input">Senha</p> */}
      <input type="password" placeholder="Senha" />
      {/* <p className="pre-input">Confirme sua senha</p> */}
      <input type="password" placeholder="Confirme sua senha" />
      <Link to="/home" >Criar</Link>
      <p className="login">Já tem uma conta?</p>
      <Link to="/" >Entrar</Link>
    </div>
  );
}