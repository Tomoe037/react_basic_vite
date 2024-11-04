import { Button, Row, Col, Form, Input, Divider, message, notification, } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate, Link } from "react-router-dom";
import { loginAPI } from '../services/api.service';
import { useContext, useState } from 'react';
import { AuthContext } from '../components/context/auth.context';
const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext);

    const onFinish = async (values) => {
        setLoading(true);
        // console.log(">>> check values:  ", values);
        const res = await loginAPI(values.email, values.password);
        if (res.data) {
            message.success("Dang nhap thanh cong");
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user)// cap nhat thong tin nguoi dung
            navigate("/");                              
        } else {
            notification.error({
                message: "dang nhap that bai",
                description: JSON.stringify(res.message)
            }
            )
        }
        setLoading(false)
    }
    return (
        <>
            <Row justify={"center"} style={{ marginTop: '30px' }}>
                <Col xs={24} md={16} lg={8}>
                    <fieldset
                        style={{
                            margin: "5px",
                            padding: "15px",
                            border: "1px solid #cccc",
                            borderRadius: "5px"

                        }}
                    >
                        <legend>Đăng nhập</legend>
                        <Form
                            form={form}
                            onFinish={onFinish}
                            layout="vertical">
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your fullName!',
                                    },
                                    {
                                        type: "email",
                                        message: 'Please input your fullName!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },

                                ]}
                            >
                                <Input.Password onKeyDown={(event) =>{
                                    if(event.key ==="Enter"){
                                        form.submit()
                                    }
                                }} />
                            </Form.Item>
                            <Form.Item>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <Button
                                        loading={loading}
                                        type="primary" onClick={() => form.submit()}>Login</Button>

                                    <Link to={"/"}>Go to homepage <ArrowRightOutlined /></Link>
                                </div>
                            </Form.Item>
                        </Form>
                        <Divider></Divider>
                        <div style={{ textAlign: "center" }}> Chưa có tài khoản?<Link to={"/register"}>Đăng kí tại đây</Link></div>
                    </fieldset>
                </Col>
            </Row>
        </>

    )
}

export default LoginPage