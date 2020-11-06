import React from 'react'
import './assets/style/style.scss'
import About from './components/about/about.js';
import Journal from './components/journal/journal';
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
      <Journal/>
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
