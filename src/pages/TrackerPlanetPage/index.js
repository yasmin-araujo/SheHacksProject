import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom'
import './style.css';

export default function TrackerPlanetPage() {
  return (
    <>
    <Header />
    <main className="track">
      {/* <div className="titulo"><p>Caminho de Aprendizado</p></div> */}
      <id className="trackidplanet">
        <Link to="/tracker" >Tracker</Link>
      </id>
    </main>
    </>
  );
}
