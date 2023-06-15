import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div id='contenedor'>
      {data.map((post, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{post.id}</h6>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App