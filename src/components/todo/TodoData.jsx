const TodoData = (props) => {
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    const { todoList, deleteTodo } = props; //viết tắt của thằng trên
    console.log(props)
    const handleDelClick = (id) => {
        deleteTodo(id);
        
    }
    
    return (
        <>
            <div className="todo-data">
                {todoList.map((item, index) => {
                    // console.log("check map ", item, index);
                    return (
                        <div className="todo-item" key={item.id}>
                            <div>{item.name}</div>
                            <button
                            onClick={() => handleDelClick(item.id)}
                            >Delete</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default TodoData;