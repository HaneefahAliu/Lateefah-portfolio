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
import Stanbic from './pages/stanbic';
import Swipe from './pages/swipe';
import Bash from './pages/bash';
import Showcase from './pages/showcase';

import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/product-design' element={<ProductDesign />} />
        <Route path='/illustration' element={<Illustration />} />
        <Route path='/motion/immersive-lab' element={<Motion />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/product-design/immersive-lab' element={<ImmersiveLab />} />
        <Route path='/product-design/cancer-care' element={<CancerCare />} />
        <Route path='/product-design/voice-it' element={<VoiceIt />} />
        <Route path='/product-design/homely' element={<Homely />} />
        <Route path='/product-design/game-board' element={<GameBoard />} />

        <Route path='/motion/stanbic' element={<Stanbic />} />
        <Route path='/motion/swipe' element={<Swipe />} />
        <Route path='/motion/bash' element={<Bash />} />
        <Route path='/motion/showcase' element={<Showcase />} />
      </Routes>
    </div>
  );
}

export default App;
