import { Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import Home from './pages/Home';
import ProductDesign from './pages/ProductDesign';
import Illustration from './pages/Illustration';
import Motion from './pages/Motion';
import About from './pages/About';
import Contact from './pages/Contact';

import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/product-design' element={<ProductDesign />} />
        <Route path='/illustration' element={<Illustration />} />
        <Route path='/motion' element={<Motion />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
