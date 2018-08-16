import React from 'react'
import '../styles/Tweet.css'

const Tweet = props => {
  return (
    <div className="Tweet-div">
      <div className="Tweet-header">
        <span className="Tweet-author">{props.author}</span>
        <span className="Tweet-date">{props.createdDate}</span>
      </div>
      <p className="Tweet-text">{props.text}</p>
    </div>
  )
}

export default Tweet
