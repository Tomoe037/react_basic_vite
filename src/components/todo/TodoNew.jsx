
const TodoNew = (props) => {
    const {addNewTodo} = props;
    const handleClick = () => {
        alert("click me")
      }
    const handleOnChange = (name) => {
        console.log("handle on change " ,name);
    }  
    return (
        <>
        <div className="todo-add">
            <input id="input" type="text" placeholder='Enter your task' 
            onChange={(event) => {handleOnChange(event.target.value)}}
            />
            <button className="btnAdd"
            onClick={handleClick}
            >Add</button>
        </div>
    </>
    )
}

export default TodoNew;
