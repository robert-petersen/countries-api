import React from 'react';
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

const NavBar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    setTheme(!theme);
  }

  return (
    <nav>
      <div>
        <h1>Where in the World?</h1>
      </div>
      <div onClick={changeTheme} >
        { theme ? <BsMoon /> : <BsFillMoonFill /> }
        <h2>{ theme ? "Light Theme" : "Dark Theme" }</h2>
      </div>
    </nav>
  )
}

export default NavBar;
