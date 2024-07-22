import { useState } from "react";
import { Input, notification, Modal } from 'antd';
const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    // console.log("check full name " , fullName);
    const [email, setEmail] = useState("");
    // console.log("check email: " , email);
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: 'Create User',
                description: 'create user success'
            })
            resetAndCloseModal();
            // await loadUser();

        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }
    return (
        <>
            <Modal
                title="Update user"
                open={isModalOpen}
                onOk={() => { handleSubmitBtn() }}
                onCancel={() => { resetAndCloseModal() }}
                maskClosable={false}
                okText="Save"
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Phone</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value) }}
                        />
                    </div>

                </div>
            </Modal>
        </>
    )
}
export default UpdateUserModal;