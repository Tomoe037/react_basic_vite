import './todo.css';
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {
    // const hoidanit = "eric";
    // const age = 25;
    // const data = {
    //   address: " da nang",
    //   country: "Viet Nam",
    // }

    const [todoList, setTodoList] = useState([
        // {id: "1",name: "do it"},
        // {id: "2",name: "watching tv"},
    ])

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const addNewTodo = (name) => {
        const newTodo = { id: randomIntFromInterval(1, 1000000), name: name };
        setTodoList([...todoList, newTodo]);
    }
    const deleteTodo = (id) => {
        const newTodo = todoList.filter((item) => { return (item.id !== id) });
        setTodoList(newTodo);
        // console.log(newTodo);

    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo list</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            {/* <TodoData
          todoList = {todoList}
        /> */}
            {todoList.length === 0 ?
                <div className="todo-image">
                    <img src={reactLogo} className='logo' alt="" />
                </div>
                :
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />}
        </div>
    )
}
export default TodoApp;