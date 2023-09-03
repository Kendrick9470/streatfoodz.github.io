import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import SectionThree from './Components/SectionThree';
import SectionFour from './Components/SectionFour';
import SectionFive from './Components/SectionFive';
import SectionSix from './Components/SectionSix';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
