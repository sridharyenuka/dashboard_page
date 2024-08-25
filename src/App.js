
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
      <CNAPP_D/>
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
