import React from 'react';
import v1 from './video1.png'
import v2 from './video2.png'

import './style.css';

export default function VideoCard(props) {
  return (
    <div className="video-card">
      {/* <img src={v1} alt="Video"></img> */}
        <div className="info">
            <h3>{props.titulo}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
  );
}
