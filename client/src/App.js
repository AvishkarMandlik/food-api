import React,{useState} from 'react'

import axios from "axios";
import "./App.css";

function App() {

  const [foodItems, setFooditems] = useState()

  async function loadData() {
    const response = await axios.get(
      "/food-items-by-category?category=breakfast");
      console.log(response.data.data)
      setFooditems(response.data.data)
  }
  return (
    <div>
      <h1>Food Api</h1>
      <button onClick={loadData}>make api call</button>
      {
        foodItems.map((item)=>{
          return (<h1>{item.title}</h1>)
        })
      }
    </div>
  );
}

export default App;
