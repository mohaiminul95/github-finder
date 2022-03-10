import React, { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {

    const { editFeedbackHandler, deleteItemHandler } = useContext(FeedbackContext)
    
  return (
        <Card>
            <div className='num-display'>{ item.rating }</div>
            <button className='edit' onClick={() => editFeedbackHandler(item)}>
                <FaEdit color='purple' />
            </button>
            <button className='close' onClick={() => deleteItemHandler(item.id)}>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>{ item.text }</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem