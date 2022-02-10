import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Project />
      <Skill />
      <Contact />
    </main>
    
  );
}

export default App;
