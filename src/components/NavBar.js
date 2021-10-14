import React from 'react';
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

const NavBar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    setTheme(!theme);
  }

  return (
    <nav>
      <div className="nav_title_container" >
        <h1 className="nav_title" >Where in the World?</h1>
      </div>
      <div onClick={changeTheme} className="nav_theme_container" >
        { theme ? <BsMoon className="nav_theme_icon" /> : <BsFillMoonFill className="nav_theme_icon" /> }
        <h2 className="nav_theme" >{ theme ? "Light Theme" : "Dark Theme" }</h2>
      </div>
    </nav>
  )
}

export default NavBar;
