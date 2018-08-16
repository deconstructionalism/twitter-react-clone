import React from 'react'
import '../styles/Header.css'

const Header = props => {

  const styles = {
      backgroundImage: `url(${props.headerImage})`
  }

  return (
    <div className="Header-div"
         style={styles}>
      <div>
        <h1 className="Header-user">{props.username}</h1>
        <p className="Header-quote">{props.quote}</p>
        <span className="Header-quoteAuthor">{`– ${props.quoteAuthor}`}</span>
      </div>
    </div>
  )
}


export default Header
