import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

function  App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteItemHandler(id) {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList 
          feedback={feedback} 
          deleteItemHandler={deleteItemHandler}
        />
      </div>
    </>
  )
}

export default App;
