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

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Education' element={<EducationPage/>}/>
          <Route path='/Skills' element={<SkillsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
