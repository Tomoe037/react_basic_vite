import './style.css';
const MyComponent = () => {
    // const xinchao = "hello";
    // const xinchao = 20;
    // const xinchao = true;
    // const xinchao = undefined;
    // const xinchao = [1,2,3];
    const xinchao = {
        name: "hoidanit",
        age: "20",
    };
    return (
        <>
            <div>{JSON.stringify(xinchao)} my husband</div>
            <div>{console.log("Eric")}</div>
            <div className="child"
                style={{ borderRadius: " 10px" }}
            >child</div>
        </>
    );
}

export default MyComponent;