import React from 'react';

import './style.css';
import FriendItem from '../../components/FriendItem'

export default function FriendsCard() {
  return (
    <div className="friends-card">
        <div className="info">
            <h3>Amigos</h3>
        </div>
        <FriendItem img="p1" name="Michelle" age="10 anos"/>
        <FriendItem img="p2" name="Yasmin" age="12 anos"/>
        <FriendItem img="p3" name="Ana" age="8 anos"/>
    </div>
  );
}
