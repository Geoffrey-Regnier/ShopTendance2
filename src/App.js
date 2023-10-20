import Header from './Components/Header';
import Boutique from './Components/Boutique';
import Formulaire from './Components/Formulaire';
import './Styles/App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';


const router = createBrowserRouter([
  {path: '/', 
    element: 
    <div className="App">
      <div className='header'>     
        <Header />
      </div>
      <div className='container'>
        <Boutique category = ""/>
        <Formulaire />
      </div>
    </div>
  },
  {
    path: '/Hommes',
    element: 
  <div className="App">
    <div className='header'>     
      <Header />
    </div>
    <div className='container'>
      <Boutique category = "Hommes"/>
      <Formulaire />
    </div>
  </div>
  },
  {
    path: '/Femmes',
    element: 
  <div className="App">
    <div className='header'>     
      <Header />
    </div>
    <div className='container'>
      <Boutique category = "Femmes"/>
      <Formulaire />
    </div>
  </div>
  },
  {
    path: '/Ados',
    element: 
  <div className="App">
    <div className='header'>     
      <Header />
    </div>
    <div className='container'>
      <Boutique category = "Ados"/>
      <Formulaire />
    </div>
  </div>
  },
  {
    path: '/Enfants',
    element: 
  <div className="App">
    <div className='header'>     
      <Header />
    </div>
    <div className='container'>
      <p>Nique tes grands morts !</p>
      <Formulaire />
    </div>
  </div>
  },
  {
    path: '/Bebes',
    element: 
  <div className="App">
    <div className='header'>     
      <Header />
    </div>
    <div className='container'>
      <p>Nique tes grands morts !</p>
      <Formulaire />
    </div>
  </div>
  }
])




const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
