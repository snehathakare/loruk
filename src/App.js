import './App.css';
import Nav from './components/Nav';
import Showcase from './components/Showcase';
import Stats from './components/Stats'
import InfoBox from './components/InfoBox';
import Language from './components/Language';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Stats />
      <InfoBox />
      <Language />
      <Footer />
    </div>
  );
}

export default App;
