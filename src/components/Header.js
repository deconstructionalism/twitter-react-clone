import React from 'react'
import '../styles/Header.css'

const Header = props => {

  const styles = {
      backgroundImage: `url(${props.headerImage})`
  }

  return (
    <div className="Header-div"
         style={styles}>
        <h1 className="Header-user">{`${props.username}'s twitter feed`}</h1>
        <div className="Header-quote">
        <p className="Header-quoteText">{props.quote}</p>
        <span className="Header-quoteAuthor">{`– ${props.quoteAuthor}`}</span>
        </div>
    </div>
  )
}


export default Header
