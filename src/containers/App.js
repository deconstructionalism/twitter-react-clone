import React, { Component } from 'react'
import '../styles/App.css'

import Header from '../components/Header.js'
import TweetForm from '../components/TweetForm.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "RubyJesus",
      headerImage: "http://www.wallpaperbetter.com/wallpaper/513/91/777/cool-technology-code-1080P-wallpaper-middle-size.jpg"
    }
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username}
                headerImage={this.state.headerImage}/>
        <TweetForm />
      </div>
    )
  }
}

export default App
