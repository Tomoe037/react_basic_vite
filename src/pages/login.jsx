import { Button, Row, Col, Form, Input, Divider, } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate, Link } from "react-router-dom";
const LoginPage = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(">>> check values:  ", values);
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
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <Button type="primary" onClick={() => form.submit()}>Login</Button>

                                    <Link to={"/"}>Go to homepage <ArrowRightOutlined /></Link>
                                </div>
                            </Form.Item>
                        </Form>
                        <Divider></Divider>
                            <div style={{textAlign:"center"}}> Chưa có tài khoản?<Link to={"/register"}>Đăng kí tại đây</Link></div>
                    </fieldset>
                </Col>
            </Row>
        </>

    )
}

export default LoginPage