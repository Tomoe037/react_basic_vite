
const TodoNew = (props) => {
    const {addNewTodo} = props;
    // addNewTodo("tomoe");
    return (
        <>
        <div className="todo-add">
            <input id="input" type="text" placeholder='Enter your task' />
            <button className="btnAdd">Add</button>
        </div>
    </>
    )
}

export default TodoNew;
