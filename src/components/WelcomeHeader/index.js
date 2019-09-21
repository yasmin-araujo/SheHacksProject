import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default function Header(props) {
    
    return (
            <div className="info">
                <h1>Bem vinda, Renata!</h1>
                <div className="pontos">
                    <p>Pontos: 800</p>
                    <div id="progressbar">
                        <div></div>
                    </div>
                </div>
            </div>
    );
}
