import React from 'react';
import Header from '../../components/Header';
import WelcomeHeader from '../../components/WelcomeHeader';
import VideoCard from '../../components/VideoCard'
import FriendsCard from '../../components/FriendsCard'
import './style.css';

export default function HomePage() {
  return (
    <>
    <Header />
    <div className="welcome">
      <WelcomeHeader/>
    </div>
    <div className="area">
      <p>Natureza</p>
      <p>Astronomia</p>
      <p>Geografia</p>
      <p>Arte</p>
      <p>Matemática</p>
      <p>História</p>
    </div>
    <main className="content">
        <VideoCard titulo="O céu é azul?" desc="Vamos descobrir se o céu realmente é azul" v="v1"/>
        <VideoCard titulo="As estações do ano" desc="Por que o tempo muda de tempos em tempos?" v="v2"/>
        <FriendsCard/>
    </main>
    </>
  );
}
