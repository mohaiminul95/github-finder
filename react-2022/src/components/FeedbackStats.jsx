import React, { useState } from 'react'

function FeedbackStats({ feedback }) {

  // calculate ratings
  let average = 0;

  for(let i=0; i < feedback.length; i++) {
    average += feedback[i]['rating'];
  }
  average = (average/feedback.length).toFixed(1);

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: { isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

export default FeedbackStats