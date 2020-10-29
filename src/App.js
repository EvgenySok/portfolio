import ContactForm from './components/contactForm.js';
import About from './components/about/about.js';
import Footer from './components/footer.js';
import MainScreen from './components/mainScreen.js';
import NavBar from './components/navBar.js';

function App() {
  return (
    <>
      <NavBar />
      <MainScreen />
      <About />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
