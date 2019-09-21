import React from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard'
import './style.css';

export default function HomePage() {
  return (
    <>
    <Header />
    <main className="videos">
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
    </main>
    </>
  );
}
