import './App.css';
import NavBar from './components/Navigation';
import AboutMe from './components/AboutMe';
import WelcomePage from './components/Hero';
import Footer from './components/Footer';
import Response from './components/GetInTouch';
import ScrollButton from './components/ScrollButton';
import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import ProjectPage from './components/ProjectPage/ProjectPage';
import NavBar2 from './components/Navigation2';
import { Education } from './components/Education/Education';
import Experience from './components/Experience';
import { useContext, useEffect } from 'react';
import DotRing from './components/DotRing';
import { MouseContext } from "./context/mouse-context";
function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <BrowserRouter>
    <div className="App">
      <DotRing />
    <Routes>
        <Route path="/projects" element={<><NavBar2/><ProjectPage/></>}></Route>
        <Route path="/education" element={<><NavBar2/><Education/></>}></Route>
        <Route path="/experience" element={<><NavBar2/><Experience/></>}></Route>
        <Route path="/" element={<><NavBar/><WelcomePage/>
      <AboutMe/>
      <SkillList/>
      <ProjectList/>
      <Response/>
      </>}>
      </Route>
      </Routes>
      <ScrollButton/>
      <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        ><Footer/></div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
