import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Qualification from './components/Qualification';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Qualification />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
