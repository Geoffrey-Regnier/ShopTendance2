import Hommes from './Components/Boutique';
import Formulaire from './Components/Formulaire';
import Navbar from './Components/Navbar';
import './Styles/App.css';
import React from 'react';



const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h1>Shop Tendance</h1>
        <Navbar />
      </div>
      <div className='container'>
        <Hommes />
        <Formulaire />
      </div>
    </div>
  );
}

export default App;
