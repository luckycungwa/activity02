import logo from './logo.svg';
import './App.css';
import Form from './comp/Form';
// Importing states
import { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <div>
          <Form/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
