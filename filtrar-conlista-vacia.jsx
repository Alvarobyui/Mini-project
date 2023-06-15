import { useState } from 'react';
import './App.css'

const OPCIONES = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Maria" },
  { id: 4, nombre: "Luisa" },
  { id: 5, nombre: "Laura" },
  { id: 6, nombre: "Marta" }
]

function App() {
  const [lista, setLista] = useState([]);

  function filterList(e) {
    let inputValue = e.target.value.toLowerCase();

    if (inputValue === "") {
      setLista([]);
    } else {
      const FILTERED = OPCIONES.filter((el) => {
        return el.nombre.toLowerCase().includes(inputValue);
      })

      setLista(FILTERED);
    }
  }

  return (
    <>
      <input
        type="text"
        id="myInput"
        onKeyUp={filterList}
      />
      <ul id="myUL">
        {
          lista.map((el, index) => (
            <li key={index}>
              <a href="#">{el.nombre}</a>
            </li>
          ))}
      </ul>
    </>
  )
}

export default App