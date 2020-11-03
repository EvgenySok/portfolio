import React from 'react'
import './assets/style/style.scss'
import About from './components/about/about.js';
import MainScreen from './components/mainScreen.js';
// import Footer from './components/footer.js';
// import MainScreen from './components/mainScreen.js';
import NavBar from './components/navBar.js';

function App() {
  return (
    <>
      <NavBar />
      <MainScreen/>
      <About />
    </>
  )
}

export default App
