import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <Header /> 

      <div className="app_body">
        <Sidebar />

        <Chat />

      </div>
    </div>
  );
}

export default App;
