import { Button, Flex, Form, Input } from "antd"
const RegisterPage = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("check: ", values);
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
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>
                <div>
                <Button onClick={()=> form.submit()}>Register</Button>
                </div>
                

                

            </div>
        </Form>
    )
}
export default RegisterPage