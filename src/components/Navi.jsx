import "./Navi.css";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";

export default function Navi() {
  const [navOpen, setNavOpen] = useState(true);
  const [hiding, setHiding] = useState(true);

  const handleMouseEnter = () => {
    setNavOpen(true);
    setHiding(false);
  };
  const handleMouseLeave = () => {
    setNavOpen(false);
    setHiding(true);
  };

  return (
    <nav>
      <div className="bg-white p-3">
        <div className={`div-logo ${hiding ? "" : "close"}`}>
          <a href="index.html" className="logo">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div
          className={`search-container ${navOpen ? "open" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="search-box">
            <div className="input-container">
              <label className={`${hiding ? "close" : ""}`} htmlFor="location">
                LOCATION
              </label>
              <input
                placeholder="Add location"
                type="text"
                className="location-input"
              />
            </div>
            <div className="input-container">
              <label className={`${hiding ? "close" : ""}`} htmlFor="location">
                GUESTS
              </label>
              <input
                placeholder="Add guest"
                type="text"
                name="guests"
                className="guests-input"
              />
            </div>
            <div className="button-container">
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <span className={`${hiding ? "close" : ""}`}>Search</span>
              </button>
            </div>
          </div>
          <div className={`${hiding ? "close" : ""}`}>
            <div className="location-result">
              <ul>
                <li>hola</li>
                <li>no me</li>
                <li>sdfhsdf</li>
              </ul>
            </div>
            <div className="guests-result">
              <ul>
                <li>hola</li>
                <li>no me</li>
                <li>sdfhsdf</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
{
  /* <div className="pos-f-t">
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
</div> */
}
