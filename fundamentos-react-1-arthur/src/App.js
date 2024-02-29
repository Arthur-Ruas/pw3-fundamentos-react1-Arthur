import React from 'react';
import './App.css';
import CardBook from './components/CardBook/CardBook';

import dataJSON from './dados.json'

function App() {

  return (
    <div className="App">
      <CardBook dataJSON={dataJSON}/>
    </div>
  );
}

export default App;
