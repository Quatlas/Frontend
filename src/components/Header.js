import React from 'react'

const Header = (props) => {
  
  return (
    <>
    <div className="authorization">
      <a href='/' className="auth">{props.title}</a>
    </div>
    </>
  )
}

export default Header
