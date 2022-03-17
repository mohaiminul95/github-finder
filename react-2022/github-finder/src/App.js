import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          content
        </main>
      </div>
      <Footer />        
    </BrowserRouter>
  );
}

export default App;
