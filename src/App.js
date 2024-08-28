
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import CNAPP_D from './components/CNAPP_D';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>       
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
      </Routes>
      <CNAPP_D/>
    </BrowserRouter>
    </div>
  );
}

export default App;
