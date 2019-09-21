import React from 'react';
import p1 from './pessoa1.png'
import p2 from './pessoa2.png'
import p3 from './pessoa3.png'
import './style.css';

export default function FriendItem(props) {
    let img = p1;
    if(props.img == "p2")
        img = p2;
    else if(props.img == "p3")
        img = p3;

  return (
    <div className="frienditem-card">
        <img src={img} alt="Amigo"></img>
        <div className="info">
            <p>Nome: {props.name}</p>
            <p>Idade: {props.age}</p>
        </div>
    </div>
  );
}
