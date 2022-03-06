import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm() {

  const [text, setText] = useState('');

  function textHandler(e) {
    setText(e.target.value)
  }
    
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className='input-group'>
                <input onChange={textHandler} value={text} type='text' placeholder='Write a review' />
                <Button type='submit'>Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm