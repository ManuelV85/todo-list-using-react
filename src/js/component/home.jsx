import React from "react";
import { useEffect, useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = ()=>{
  const [inputValue, setInputValue] = useState("")


  return (

    <div id="principal" className="Container">
      <h1> TODO LIST</h1>
      <ul>
        <li> 
          <input type="text" 
          placeholder="Add New Task..."
          onChange={(e)=> setInputValue(e.target.value)}
          value={inputValue}></input>
        </li>
        <li> Go to the doctor <i class="fa-regular fa-trash-can"></i></li>
        <li>go to shopping <i class="fa-regular fa-trash-can"></i></li>
      </ul>
      <div>45 task</div>
    </div>
  );
};






/*
const Home = () => {
  const [task, setTask] = useState([])
  const newTask = (e) =>{
    if (e.key === 'Enter'){
      setTask(prev =>[...prev, e.target.value])
      
    }

  }

  return (
    <div className="container">
      <h1>TODO LIST</h1>

      <h3>Add New Task</h3>

      <br />
      <ul>
      <li>
      <input id="newTask" type="text" placeholder="Add New Task..." onKeyDown={e=>newTask(e)}/>
      {task.map((task) =>{return <h3>{task}</h3>})}
      </li>

      <h2>TODO</h2>
      </ul>
      <ul id="incompleteTask">
        <li><input type="checkbox" /><label>Pay Bills</label><input type="text" /><button className="edit">Edit</button>
        <button className="delete">Delete</button></li>
        <li><input type="checkbox" /><label>Go to Shopping</label><input type="text" /><button className="edit">Edit</button>
        <button className="delete">Delete</button></li>
      </ul>

      <h2>Complete</h2>
      <ul id="completedTask">
        <li><input type="checkbox" checked /> <label>Go to Doctor</label><input type="text" /><button className="edit">Edit</button>
        <button className="delete">Delete</button></li>
      </ul>

    </div>
  )

  
}

*/







export default Home;
