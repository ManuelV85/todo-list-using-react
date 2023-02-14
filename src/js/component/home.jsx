import React from "react";
import { useEffect, useState } from "react";


// Add into array ->concat
//Delete from array -> filter
//Update -> map


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
              setInputValue(" ");
            }}
          } 
            placeholder= "Add New Task..."></input>
        </li>
        {todos.map((item, index) => (
          <li>
            {item}{""} 
            <i class="fa-regular fa-trash-can"
              onClick={()=>
                setTodos(todos.filter(
                  (t,currentIndex) => index != currentIndex
                ))

              }
                        
              ></i>
          </li>
        ))}
      </ul>
      <div>37 task</div>
    </div>
  )

}

  
    





export default Home;
