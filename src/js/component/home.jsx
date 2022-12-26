import React from "react";
import { useEffect, useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[task, setTask] = useState([])
	const newTask = (e) => {
		if(e.key === 'Enter'){
			setTask (prev =>[...prev, e.target.value])
			
		}
	}
	return (
    <div id="container" class="container container fluid">
    <h1>TodoList</h1>
    <input id="input" type="text" placeholder="Add New Task ..." onKeyDown={e => newTask(e)} />
  {task.map((task) => {
  return <h1>{task}</h1>
  })
  }
  </div>
);
};

export default Home;
