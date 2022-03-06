import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm() {

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

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
    
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
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