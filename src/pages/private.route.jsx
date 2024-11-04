import { useContext } from "react"
import { AuthContext } from "../components/context/auth.context"
import { Navigate } from "react-router-dom";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);
    //neu ton tai nguoi dung thi truyen vo thang con la gi thi se hien ra cai do
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    //neu khong thi..
    return (
        <>
            {/* <Navigate to="/login" replace/> */}
            <Result
                status="403"
                title="Unauthorize!"
                subTitle={"Bạn cần đăng nhập nguồn tài nguyên này"}
                extra={
                    <Button type="primary">
                        <Link to="/">
                            <span>back to home</span>
                        </Link>
                    </Button>}
            />
        </>
    )
}

export default PrivateRoute;