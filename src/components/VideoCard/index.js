import React from 'react';
import v1 from './video1.png'
import v2 from './video2.png'

import './style.css';

export default function VideoCard(props) {

  if(props.v == "v1")
  {
    return (
      <div className="video-card">
          <div className="info">
              <h3>{props.titulo}</h3>
              <p>{props.desc}</p>
          </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="video-card-2">
          <div className="info">
              <h3>{props.titulo}</h3>
              <p>{props.desc}</p>
          </div>
      </div>
    );
  }
}
