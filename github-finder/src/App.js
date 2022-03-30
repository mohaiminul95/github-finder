
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import {GithubProvider} from '../src/context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <div className='flex flex-col h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />        
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
