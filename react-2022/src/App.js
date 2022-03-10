import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Card from './components/shared/Card';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIcon from './components/AboutIcon';

function  App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteItemHandler(id) {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
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
                <FeedbackForm addFeedback={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList 
                  feedback={feedback} 
                  deleteItemHandler={deleteItemHandler}
                />
              </>
            }>
            </Route>
            <Route path='about' element={<About />}/>
          </Routes>
          <AboutIcon />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
