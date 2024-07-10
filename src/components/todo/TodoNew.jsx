import { useState } from 'react'
const TodoNew = (props) => {
    const {addNewTodo} = props;
    const [valueInput, setValueInput] = useState("tomoe");
  
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
      }
    const handleOnChange = (name) => {
        setValueInput(name)
    }  
    return (
        <>
        <div className="todo-add">
            <input id="input" type="text" placeholder='Enter your task' 
            onChange={(event) => {handleOnChange(event.target.value)}}
            value={valueInput}
            />
            <button className="btnAdd"
            onClick={handleClick}
            >Add</button>
            <div>my data is  {valueInput}</div>
        </div>
    </>
    )
}

export default TodoNew;
