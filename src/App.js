import './App.css';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Header from  './components/Header';
import FindUs from './pages/FindUs';
import Footer from './components/Footer';
import Services from './pages/Services';
import CustomNavBar from './components/CustomNavBar';
import { Element } from 'react-scroll';


function App() {

  return (
    <div className="App">
            <CustomNavBar />
            <Element name="home">
                <Header />
            </Element>
            <Element name="aboutus">
                <AboutUs />
            </Element>
            <Element name="services">
                <Services />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <FindUs/>
            <Footer />
    </div>
  );
}

export default App;