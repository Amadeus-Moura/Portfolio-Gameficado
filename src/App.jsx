import { HashRouter, Routes, Route } from 'react-router-dom';
import SaoMenu from './components/SaoMenu/SaoMenu';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './index.css';
import './components/SaoMenu/SaoMenu.css';
import './pages/Home.css';
import './pages/Profile.css';
import './pages/About.css';
import './pages/Timeline.css';
import './pages/Projects.css';
import './pages/Skills.css';

export default function App() {
  return (
    <HashRouter>
      <SaoMenu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </HashRouter>
  );
}