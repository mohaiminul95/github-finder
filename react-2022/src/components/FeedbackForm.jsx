import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {

  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, editFeedback, updateFeedbackHandler } = useContext(FeedbackContext)

  useEffect(() => {
    if(editFeedback.edit === true) {
      setBtnDisabled(false)
      setText(editFeedback.item.text)
      setRating(editFeedback.item.rating)
    }
  }, [editFeedback])

  function textHandler(e) {
    if(text === null) {
        setBtnDisabled(true)
        setMessage('')
    } else if(text !== null && text.trim().length <= 10) {
        setBtnDisabled(true)
        setMessage('Text must be at least 10 characters.')
    } else {
        setBtnDisabled(false)
        setMessage(null)
    }
    setText(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      if(editFeedback.edit === true) {
        updateFeedbackHandler(editFeedback.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('')
    }
  }
    
  return (
    <Card>
        <form onSubmit={submitHandler}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input onChange={textHandler} value={text} type='text' placeholder='Write a review' />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            { message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
  
}

export default FeedbackForm