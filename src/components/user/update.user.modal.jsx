import { useEffect, useState } from "react";
import { Input, notification, Modal } from 'antd';
import {updateUserAPI} from '../../services/api.service.js'
const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate,loadUser } = props;

    // next dataUpdate != prev dataUpdate => re-render
    useEffect(() => {
        // console.log("check data update props: ", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }

    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id,fullName, phone);
        if (res.data) {
            notification.success({
                message: 'Update User',
                description: 'Update user success'
            })
            resetAndCloseModal();
            await loadUser();

        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("");
        setFullName("");
        setPhone("");
        setDataUpdate(null);

    }
    return (
        <>
            <Modal
                title="Update user"
                open={isModalUpdateOpen}
                onOk={() => { handleSubmitBtn() }}
                onCancel={() => { resetAndCloseModal() }}
                maskClosable={false}
                okText="Save"
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                        <span>Id</span>
                        <Input
                            value={id}
                            disabled
                        />
                    </div>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
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