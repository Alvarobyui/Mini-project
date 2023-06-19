/* import {Navi} from "./Navi.jsx"; */
import "./Card.css";
import { useEffect, useState } from "react";

export default function Card() {
  const [data, setData] = useState([]);
  // Evento para mostrar las card ya filtradas
  /*    const [cards, setCards] = useState([]);
   */

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

  /*   function filterCard(location) {
    const arrayFiltered = data.filter((element) => {
      return element.city === location;
    })
  } */

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="card-container">
        {data.map((el, index) => {
          return (
            <div className="card-box" key={index}>
              <div className="div-img">
                <img src={el.photo} key={index} alt="imagen" />
              </div>
              <div key={index} className="texto-box">
                {(function cardInfo() {
                  if (el.superHost === true) {
                    return (
                      <div className="for-super-host">
                        <span id="superHost">Super Host</span>
                        <p className="type-text">{el.type}</p>
                        <p>{el.beds == null ? "" : `${el.beds} beds`}</p>
                        <div className="rating-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                          <p className="rating-text">{el.rating}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="no-super-host">
                        <p className="type-text">{el.type}</p>
                        <div className="rating-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                          <p className="rating-text">{el.rating}</p>
                        </div>
                      </div>
                    );
                  }
                })()}
                <h2>{el.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
