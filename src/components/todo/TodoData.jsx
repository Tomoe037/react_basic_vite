const TodoData = (props) => {
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    const { todoList } = props; //viết tắt của thằng trên
    console.log(props)
    return (
        <>
            <div className="todo-data">
                {todoList.map((item, index) => {
                    // console.log("check map ", item, index);
                    return (
                        <div className="todo-item">
                            <div>{item.name}</div>
                            <button>Delete</button>
                        </div>
                    );
                })}
                <div>{JSON.stringify(props.todoList)}</div>

            </div>
        </>
    );
}
export default TodoData;