import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/view' element={<View/>} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
