import React from 'react'

import '../styles/TweetForm.css'

const TweetForm = props => {

  const tweetSubmit = e => {
    e.preventDefault()
    const message = e.target.querySelector('textarea')
    // logic to add tweet to list of tweets
  }

  return (
    <form className="Tweetform-form"
          onSubmit={tweetSubmit}>
        <label>Enter your tweet!</label>
        <textarea maxlength="140"/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default TweetForm
