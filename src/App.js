import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import "./assets/style/style.scss";
import Gg from './components/gg';
import NavBar from './components/navBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route path='/hj' component={() => <Gg/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
