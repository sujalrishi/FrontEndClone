import React from 'react';
import './App.css';
import Header from './Header';
import Tinder_cards from './Tinder_cards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">

      <Header />
      <Tinder_cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
