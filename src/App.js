import './styles.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Home';
import Create from './admin/Create';
import Navbar from './Navbar';
import Resume from './Resume';
import Login from './admin/Login';
import FolderDisplay from './components/FolderDisplay';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/create" element={<Create />}/>
            <Route exact path="/resume" element={<Resume />}/>
            <Route exact path="/folders/:id" element={<FolderDisplay />}/>
            <Route exact path="*" element={<NotFound />}/>
            <Route exact path="/login" element={<Login />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
