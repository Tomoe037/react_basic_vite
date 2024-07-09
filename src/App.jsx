import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'


const App = () => {
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address: " da nang",
    country: "Viet Nam",
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew />
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
        />
        <div className="todo-image">
          <img src={reactLogo} className='logo' alt="" />
        </div>
      </div>
    </>
  )
}

export default App
