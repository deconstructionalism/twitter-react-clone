import React from 'react'

import Tweet from './Tweet.js'

const TweetList = props => {

  const Tweets = props.tweets.map((tweetData, index) => {
    return <Tweet key={index} tweetData={tweetData}/>
  })
  return (
    <div>
      {Tweets}
    </div>
  )
}

export default TweetList
