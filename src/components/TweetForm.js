import React from 'react'

import '../styles/TweetForm.css'

const TweetForm = props => {

  const tweetSubmit = e => {
    e.preventDefault()
    const message = e.target.querySelector('textarea').value
    props.addTweet(message)
  }

  return (
    <form className="Tweetform-form"
          onSubmit={tweetSubmit}>
        <label>Enter your tweet!</label>
        <textarea maxLength="140"/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default TweetForm
