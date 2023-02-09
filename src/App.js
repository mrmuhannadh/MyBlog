import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/home';
import EducationPage from './Pages/education';
import SkillsPage from './Pages/Skills';
import ProjectsPage from './Pages/projects';

function App() {
  return (
    <div className='App'>
    Hi
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Education' element={<EducationPage/>}/>
          <Route path='/Skills' element={<SkillsPage/>}/>
          <Route path='/Projects' element={<ProjectsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
