import React, { Component } from 'react'
import '../styles/App.css'

import Header from '../components/Header.js'
import TweetForm from '../components/TweetForm.js'
import TweetList from '../components/TweetList.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "RubyJesus",
      headerImage: "http://www.wallpaperbetter.com/wallpaper/513/91/777/cool-technology-code-1080P-wallpaper-middle-size.jpg",
      tweets: [{
          author: 'Ruby Jesus',
          createdDate: '01/22/1989',
          text: 'Oh my god!'
        },
        {
          author: 'Ruby Jesus',
          createdDate: '12/12/12',
          text: 'Rails is the best'
        },
        {
          author: 'j0nz3n',
          createdDate: '01/01/70',
          text: 'In the beginning there was a big bang'
        },
        {
          author: 'Ruby Jesus',
          createdDate: '08/01/18',
          text: 'Yeah, you could do it that way.'
        },
        {
          author: 'Dante Aligheri',
          createdDate: '31/07/1992',
          text: 'The divine comedy was one of the best books'
        },
        {
          author: 'beatriz',
          createdDate: '05/07/18',
          text: 'I need a nap!! But I love React.'
        },
        {
          author: 'TLE',
          createdDate: '03/07/19',
          text: 'React Twitter FTW'
        },
        {
          author: 'Fausto Vargas',
          createdDate: '01/22/1945',
          text: 'Is chuck norris still alive?'
        },
        {
          author: 'Corey Nash',
          createdDate: '08/16/18',
          text: 'Fist Bumps have ruined celebrations for everyone.'
        },
        {
          author: 'aLeks',
          createdDate: '04/24/1983',
          text: 'tweetAllTheThings'
        },
        {
          author: 'rivermagnetic',
          createdDate: '08/16/18',
          text: 'The bravest thing you can do is be vulnerable.'
        },
        {
          author: "Hello Kitty",
          createdDate: '08/30/18',
          text: "Meeeooowww"
        },
        {
          author: 'Alec',
          createdDate: '08/16/07',
          text: 'What\'s this Twitter thing all about?'
        },
        {
          author: 'kelechi',
          createdDate: '16/08/18',
          text: 'The other day, I got a henna tattoo that says "Forever." (Corey you can borrow that one)'
        }
      ]
    }
    }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username}
                headerImage={this.state.headerImage}/>
        <TweetForm />
        <TweetList tweets={this.state.tweets}/>
      </div>
    )
  }
}

export default App
