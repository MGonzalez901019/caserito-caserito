
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import IntemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <IntemListContainer/>
    </div>
  );
}

export default App;
