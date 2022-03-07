import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, deleteItemHandler }) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                    {feedback.map((item) => (
                        <React.Fragment key={item.id}>
                            <motion.div
                                key={item.id}
                                initial={{opacity: 0}}
                                animate={{ opacity: 1}}
                                exit={{opacity: 0}}
                            >
                            <FeedbackItem 
                                item={item} 
                                deleteItemHandler={deleteItemHandler}
                            />
                            </motion.div>
                        </React.Fragment>
                    ))}
            </AnimatePresence>
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