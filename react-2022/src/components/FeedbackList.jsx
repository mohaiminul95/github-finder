import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ deleteItemHandler }) {

    const { feedback } = useContext(FeedbackContext)

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


export default FeedbackList