import "./Navi.css"
import logo from "../img/logo.png";
import { useState } from "react";

export default function Navi() {
  const [Nav, setNav] = useState([]); 

  function handleClick() {
    return(
      <nav>
        <div className="bg-white p-3">
          <div onClick={handleClick} className="search-container">
            <div type="text" className="location-input">Add location</div>
            <div type="text" name="guests" className="guests-input">Add guests</div>
            <button type="submit"><img src="lupa-icon" alt="icon" /></button>
          </div>  
        </div>
      </nav>
    )
  }

  return (
    <nav>
      <div className="bg-white p-3">
        <a href="index.html" className="logo"><img src={logo} alt="Logo" /></a>
        <div onClick={handleClick} className="search-container">
          <div type="text" className="location-input">Add location</div>
          <div type="text" name="guests" className="guests-input">Add guests</div>
          <button type="submit"><img src="lupa-icon" alt="icon" /></button>
        </div>  
      </div>
    </nav>
  )
}
{/* <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white">Collapsed content</h4>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  </nav>
</div> */}
