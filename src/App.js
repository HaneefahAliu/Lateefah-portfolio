import { Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import Home from './pages/home';
import ProductDesign from './pages/productdesign';
import Illustration from './pages/illustration';
import Motion from './pages/motion';
import About from './pages/about';
import Contact from './pages/contact';
import ImmersiveLab from './pages/immersivelab';
import CancerCare from './pages/cancercare';
import VoiceIt from './pages/voiceit';
import Homely from './pages/homely';
import GameBoard from './pages/gameboard';

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
        <Route path='/product-design/immersive-lab' element={<ImmersiveLab />} />
        <Route path='/product-design/cancer-care' element={<CancerCare />} />
        <Route path='/product-design/voice-it' element={<VoiceIt />} />
        <Route path='/product-design/homely' element={<Homely />} />
        <Route path='/product-design/game-board' element={<GameBoard />} />
      </Routes>
    </div>
  );
}

export default App;
