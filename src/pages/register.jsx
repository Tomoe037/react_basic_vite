import { Button, Flex, Form, Input, notification, Row, Col, Divider } from "antd"
import { registerUserAPI } from "../services/api.service";
import { useNavigate, Link } from "react-router-dom";
const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        // console.log("check: ", values);
        // call api
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        );
        if (res.data) {
            notification.success(
                {
                    message: " Register user",
                    description: " dang ky nguoi dung thanh cong"
                }
            );
            navigate("/login");
        } else {
            notification.error(
                {
                    message: " Register user",
                    description: JSON.stringify(res.message),
                }
            )
        }
    }
    return (
        <>

            <Form
                form={form}
                name="basic"
                layout="vertical"
                style={{
                    
                    margin: '30px'
                }}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}

            >

                    <h3 style={{textAlign:"center"}}>Đăng ký tài khoản</h3>
                    <Row justify={"center"}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Full Name"
                                name="fullName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your fullName!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row justify={"center"}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} md={12}>
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
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Phone Number"
                                name="phone"
                                rules={[
                                    {
                                        required: true,

                                        pattern: new RegExp(/\d+/g),
                                        message: "Wrong format!"
                                    }

                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} md={12}>
                            <div style={{ color: "blue" }}>
                                <Button
                                    type="primary"
                                    onClick={() => form.submit()}>Register</Button>
                            </div>
                            <Divider></Divider>
                            <div>Đã có tài khoản <Link to={"/login"}>Đăng nhập tại đây</Link></div>
                        </Col>
                    </Row>
            </Form>
        </>
    )
}
export default RegisterPage