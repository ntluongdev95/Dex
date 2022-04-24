
import './App.scss';
import Home from './pages/Home.js'
import Swap from './pages/Swap';
import {BrowserRouter as Router,Routes,Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/swap' exact element={<Swap />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
