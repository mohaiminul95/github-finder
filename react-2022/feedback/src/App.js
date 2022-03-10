import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Card from './components/shared/Card';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function  App() {

  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <BrowserRouter>
          <Card>
            <NavLink to='/' className={({ isActive }) => isActive? "active": ''}>
              Home
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive? "active": ''}>
              About
            </NavLink>
          </Card>
            <Routes>
              <Route path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }>
              </Route>
              <Route path='about' element={<About />}/>
            </Routes>
            <AboutIcon />
          </BrowserRouter>
        </div>
      </FeedbackProvider>
    </>
  )
}

export default App;
