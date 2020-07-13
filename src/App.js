import React from 'react';
import logo from './logo.svg';
import NewForm from './NewForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewForm />
      </header>
    </div>
  );
}

export default App;
