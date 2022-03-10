import React, { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'context data 1',
            rating: 4,
        },
    ])

    return (
        <FeedbackContext.Provider value={{
            feedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;
