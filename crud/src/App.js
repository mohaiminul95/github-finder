import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Header from './components/Header'
import Home from './pages/Home';
import View from './pages/View';
import AddEdit from './pages/AddEdit';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddEdit/>} />
          <Route path='/update/:id' element={<AddEdit/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/view' element={<View/>} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
