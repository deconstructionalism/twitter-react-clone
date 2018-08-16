import React from 'react'
import '../styles/TweetList.css'

import Tweet from './Tweet.js'

const TweetList = props => {

  const Tweets = props.tweets.map((tweetData, index) => {
    // return <Tweet key={index} tweetData={tweetData}/>
    return (
      <Tweet key={index} 
             {...tweetData}/>
    )
  })
  return (
    <div className="TweetList-div">
      {Tweets}
    </div>
  )
}

export default TweetList
