import React from 'react'
import '../styles/Tweet.css'

const Tweet = props => {

  const onTweetClick = e => {
    e.target.classList.toggle("compressed");
  }

  return (
    <div className="Tweet-div">
      <div className="Tweet-header">
        <span className="Tweet-author">{props.author.replace(' ','')}</span>
        <span className="Tweet-date">{new Date(props.createdDate).toDateString()}</span>
      </div>
      <p className="Tweet-text compressed"
         onClick={onTweetClick}>{props.text}</p>
    </div>
  )
}

export default Tweet
