import { Button, Input } from 'antd';
import { useState } from 'react';
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    // console.log("check full name " , fullName);
    const [email, setEmail] = useState("");
    // console.log("check email: " , email);
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = () => {
        console.log("check state: ", { fullName, email, password, phone })
    }

    return (
        <div className='user-form' style={{ margin: "20px 0" }}>
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
                <div>
                    <Button
                        onClick={handleClickBtn}
                        type="primary"> create user</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;