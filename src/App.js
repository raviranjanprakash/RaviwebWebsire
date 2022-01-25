import {Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "@fontsource/roboto";
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Careers from './components/pages/Careers';
import Service from './components/pages/Service';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <>
    
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/careers" element={<Careers />} />
       <Route path="/service" element={<Service />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
