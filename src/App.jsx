import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'


const App = () => {
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address: " da nang",
    country: "Viet Nam",
  }
 
  const [todoList, setTodoList] = useState([
    {id: "1",name: "do it"},
    {id: "2",name: "watching tv"},
  ])

  const randomIntFromInterval= (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
   }
  const addNewTodo = (name) => {
    const newTodo = { id: randomIntFromInterval(1,1000000), name: name};
    setTodoList([...todoList,newTodo]);
  }
 
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
          todoList = {todoList}
        />
        <div className="todo-image">
          <img src={reactLogo} className='logo' alt="" />
        </div>
      </div>
    </>
  )
}

export default App
