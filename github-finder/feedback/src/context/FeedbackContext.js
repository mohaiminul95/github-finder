import React, { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetchFeedbackData()
    }, [])

    const fetchFeedbackData = async () => {
        const response = await fetch(
            `/feedback?_sort=id&_order=desc`
        )
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const [editFeedback, setEditFeedback] =  useState({
        item: {},
        edit: false
    })

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
      }

    const updateFeedbackHandler = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        const data = await response.json()
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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

    const deleteItemHandler = async (id) => {
        if(window.confirm('Are you sure you want to delete this item?')) {
          await fetch(`/feedback/${id}`, { method: 'DELETE' })
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
            updateFeedbackHandler,
            isLoading
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;
