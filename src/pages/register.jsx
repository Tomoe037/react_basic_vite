import { Button, Flex, Form, Input, notification } from "antd"
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log("check: ", values);
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
        <Form
            form={form}
            name="basic"
            layout="vertical"

            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}

        >

            <div className="register-form"
                style={{
                    margin: "40px 80px"
                }}>
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
                <div>
                    <Button onClick={() => form.submit()}>Register</Button>
                </div>




            </div>
        </Form>
    )
}
export default RegisterPage