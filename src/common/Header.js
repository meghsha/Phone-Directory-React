import React from 'react'
import "./Header.css"

const Header = function (props) {
  return (
    <div className="header">
        {props.header}
    </div>
  )
}
export default Header;