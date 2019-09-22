import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom'
import './style.css';

export default function TrackerPage() {
  return (
    <>
    <Header />
    <main className="track">
      {/* <div className="titulo"><p>Caminho de Aprendizado</p></div> */}
      <id className="trackid">
        <Link to="/tracker_planet" >Planet</Link>
      </id>
    </main>
    </>
  );
}
