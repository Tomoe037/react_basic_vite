const TodoData = (props) => {
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    const { name, age, data } = props; //viết tắt của thằng trên
    return (
        <>
            <div className="todo-data">
                <div>My name is {name}</div>
                <div>do it</div>
                <div>watching tv</div>
            </div>
        </>
    );
}
export default TodoData;