import { useEffect, useState } from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';


import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';




function App() {
  const[searchValue, setSearchValue] = useState('')


  return (

    <body>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          
            <Routes>
              <Route path='/' element={<Home searchValue={searchValue} />} />
              <Route path='/cart' element = {<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            
        </div>
      </div>
    </body>
  );
}

export default App;
