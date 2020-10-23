import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Op. Dr. Emre Korkmaz</h1>
        <h2>Beyin ve Sinir Cerrahisi Uzmanı</h2>
        <h3>Özel MEDAR Hastanesi</h3>
        
        <p>
        Adres: Çiftlik mah. 4179. Sk. No:1 Gölcük/Kocaeli
        </p>
        <p>
        İş Tel: 444 99 41
        </p>
        <p>
        Cep Tel: 0505 254 78 88
        </p>
        <p>dremrekorkmaz@yahoo.com.tr</p>
      </header>
    </div>
  );
}

export default App;
