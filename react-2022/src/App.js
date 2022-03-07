import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

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
        <FeedbackForm addFeedback={addFeedback}/>
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
