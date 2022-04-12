import './App.css';
import Home from './components/common/Home';
import Navigation from './components/common/Navigation';
import Achievement from './components/models/Achievement';
import Candidate from './components/models/Candidate';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h3 className="m-3 d-flex justify-content-center">
        ZhetistikApp
      </h3>
      <Navigation/> 
        <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/candidate" element={<Candidate/>}/>
          <Route exact path="/achievement" element={<Achievement/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
