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
        {
            id: 2,
            text: 'context data 2',
            rating: 5,
        },
    ])

    const [editFeedback, setEditFeedback] =  useState({
        item: {},
        edit: false
    })

    function addFeedback(newFeedback) {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    function updateFeedbackHandler(id, updatedItem) {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        )
        setEditFeedback({
            item: {},
            edit: false
        })
      }  

    function editFeedbackHandler(item) {
        setEditFeedback({
            item,
            edit: true
        })
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
            addFeedback,
            editFeedbackHandler,
            editFeedback,
            updateFeedbackHandler
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;
