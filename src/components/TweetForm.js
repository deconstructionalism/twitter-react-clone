import React from 'react'

import '../styles/TweetForm.css'

const TweetForm = props => {

  const tweetSubmit = e => {
    e.preventDefault()
    const textarea = e.target.querySelector('textarea')
    const message = textarea.value
    props.addTweet(message)
    textarea.value = ''

  }

  return (
    <form className="Tweetform-form"
          onSubmit={tweetSubmit}>
        <legend htmlFor="tweet-text">compose</legend>
        <div className="Tweetform-inputs">
          <textarea id="tweet-text" 
                    maxLength="140"/>
          <button type="submit">send</button>
        </div>
    </form>
  )
}

export default TweetForm
