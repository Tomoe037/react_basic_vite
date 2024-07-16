import { Button, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    // console.log("check full name " , fullName);
    const [email, setEmail] = useState("");
    // console.log("check email: " , email);
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName : fullName,  // trước dấu 2 chấm là tên key, sau là giá trị từ react
            email : email,
            password : password,
            phone : phone,
        }
        axios.post(URL_BACKEND, data);
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