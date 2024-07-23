import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);


    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a>{record._id}</a>
                    </>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "30px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                            style={{ padding: "10px", cursor: "pointer", color: "blue", fontSize: "20px" }} />
                        <DeleteOutlined style={{ padding: "10px", cursor: "pointer", color: "red", fontSize: "20px" }} />
                    </div>
                );
            }

        },

    ];


    console.log("check load 000");

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser ={loadUser}

            />
        </>
    );
}
export default UserTable;