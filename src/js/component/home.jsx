import React from "react";
import { useEffect, useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = ()=>{
  const[inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return(
    <div id="principal" className="Container">
      <h1>TODOS LIST</h1>
      <ul>
        <li>
          <input type="text" onChange={(e) => setInputValue(e.target.value) }
          value={inputValue}
          onKeyDown = {(e) =>{
            if (e.key === 'Enter'){
              setTodos(todos.concat(inputValue))
            }}
          } 
            placeholder= "Add New Task..."/>
        </li>
        {todos.map((t) => (
          <li>
            {t} <i class="fa-regular fa-trash-can"></i>
          </li>
        ))}
      </ul>
      <div>37 task</div>
    </div>
  )

}

  
    





export default Home;
