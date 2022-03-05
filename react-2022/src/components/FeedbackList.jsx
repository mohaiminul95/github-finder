import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, deleteItemHandler }) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <React.Fragment key={item.id}>
                    <FeedbackItem 
                        item={item} 
                        deleteItemHandler={deleteItemHandler}
                    />
                </React.Fragment>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList