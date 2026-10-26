import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Rooms from './pages/room';
import Booking from './pages/booking';
import Dining from './pages/dining';
import Experiences from './pages/experiences';
import Contact from './pages/contact';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/room" element={<Rooms />} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/contact" element={<Contact />} />
    
    </Routes>
  );
}

export default App;
