import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'context data 1',
            rating: 4,
        },
    ])

    function addFeedback(newFeedback) {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    function deleteItemHandler(id) {
        if(window.confirm('Are you sure you want to delete this item?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteItemHandler,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;
