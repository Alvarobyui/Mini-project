import "./Navi.css";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";

export default function Navi() {
  // evento para desplegar navbar
  const [navOpen, setNavOpen] = useState(false);
  // evento para ocultar elementos
  const [hiding, setHiding] = useState(true);
  // evento para hacer petición de "API"
  const [data, setData] = useState([]);
  // Evento para filtrar data
  const [lista, setlista] = useState(data);


  const handleMouseEnter = () => {
    setNavOpen(true);
    setHiding(false);
  };
  const handleMouseLeave = () => {
    setNavOpen(false);
    setHiding(true);
  };

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("../../stays.json");
      const resJson = await res.json();

      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    setlista(data);
  }, [data]);

  function filterData(e) {
    let inputValue = e.target.value.toLowerCase();

    if (inputValue === "") {
      setlista(data);
    } else {
      const arrayFiltered = data.filter((element) => {
        return (
          element.city.toLowerCase().includes(inputValue) ||
          element.country.toLowerCase().includes(inputValue)
        );
      });

      setlista(arrayFiltered);
    }
  }


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
                onKeyUp={filterData}
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
          <div className={`result-box ${hiding ? "close" : ""}`}>
            <div className="location-result">
              <ul className="location-list">
                {lista.map((el, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <a href="#">{`${el.city}, ${el.country}`}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="guests-result">
              <ul className="guests">
                <button>-</button>
                <input type="text" placeholder="0"/>
                <button>+</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
