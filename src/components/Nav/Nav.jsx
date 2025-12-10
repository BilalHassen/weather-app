import React from 'react'
import "./Nav.scss"
import logo from "../../../public/assets/images/logo.svg"
import gear from "../../../public/assets/images/icon-units.svg";
import dropdown from "../../../public/assets/images/icon-dropdown.svg"
function Nav() {
  return (
    <nav className='nav'>
        <img className='nav__logo'
        src={logo}
        alt='logo for navbar'
        ></img>

        <div className='nav__dropDown'>
          <img className='nav__gear' src={gear}
          alt="gear icon for nav drop down"
          ></img>
          <p className='nav__units'>Units</p>
          <img className='nav__dropDownIcon' src={dropdown}></img>
        </div>
    </nav>
  )
}

export default Nav