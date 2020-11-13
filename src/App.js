import React from 'react'
import './assets/style/style.scss'
import About from './components/about/about.js';
<<<<<<< HEAD
import Journal from './components/journal/journal';
=======
import Contact from './components/contact/contact';
>>>>>>> 004a3609e9a2a3d9eda9c2a081ef0cae8dbebfa5
import MainScreen from './components/mainScreen.js';
// import Footer from './components/footer.js';
import NavBar from './components/navBar.js';
import Portfolio from './components/portfolio/portfolio.js';

function App() {
  return (
    <>
      <NavBar />
      <MainScreen/>
      <About />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default App
