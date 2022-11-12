import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'


function Header({title, bgColor, textColor} ){
    const headerStyles = {
        backgroundColor:bgColor,
        color: textColor
    }
    return (
    <>
  <Navbar
    color="dark"
    dark
    style={{ margin: '0px !important'}}
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="./img/logo.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
     {title}
    </NavbarBrand>
  </Navbar>
</>
    
    )
}

export default Header