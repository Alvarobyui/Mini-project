import { useEffect, useState } from "react";

export default function Card() {
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();

      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((el, i) => {
        return (
          <>
            <img src={el.photo} key={i} alt="imagen" />
            <div key={i} className="texto-box">
              {(function cardInfo() {
                if (el.superHost === true) {
                  return (
                    <div className="for-super-host">
                      <span id="superHost">Super Host</span>
                      <p className="type-text">{el.type}</p>
                      <p>{el.beds} beds</p>
                      <div className="rating-box">
                        <img src="star.png" alt="i" />
                        <p className="rating-text">{el.rating}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="no-super-host">
                      <p className="type-text">{el.type}</p>
                      <div className="rating-box">
                        <img src="star.png" alt="i" />
                        <p className="rating-text">{el.rating}</p>
                      </div>
                    </div>
                  );
                }
              })()}
              <h2>{el.title}</h2>
            </div>
          </>
        );
      })}
    </>
  );
}