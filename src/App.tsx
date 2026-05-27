import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="bg-cyber-bg text-cyber-light min-h-screen relative font-sans">
        <div className="scanline" aria-hidden="true"></div>

        <ScrollToTop />

        <Navbar />
        
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
