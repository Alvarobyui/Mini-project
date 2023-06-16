import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
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

  
  console.log(data);

  
  return (
    <Card />
  )

  function Card() {
    return(
    <>
      {data.map((el, i) => {
        return <h1 key={i}>{el.city}</h1>;
      })}
    </>
    );
  }
}

export default App;
