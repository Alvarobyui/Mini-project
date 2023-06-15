import { useState } from 'react';
import './App.css'

function App() {
  const OPCIONES = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Pedro" },
    { id: 3, nombre: "Maria" },
    { id: 4, nombre: "Luisa" },
    { id: 5, nombre: "Laura" },
    { id: 6, nombre: "Marta" }
  ]

  const [lista, setLista] = useState(OPCIONES)
  
  function myFunction(e) {
    let inputValue = e.target.value.toLowerCase();

    const FILTERED = OPCIONES.filter((el) => {
      return el.nombre.toLowerCase().includes(inputValue);
    })

    setLista(FILTERED);
  }

  return (
    <>
      <input
        type="text"
        id="myInput"
        onKeyUp={myFunction}
        placeholder="Search for names.."
      />
      <ul id="myUL">
        {lista.map((el, index) => (
          <li key={index}>
            <a href="#">{el.nombre}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App