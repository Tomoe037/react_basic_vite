import { Table } from 'antd';
import { EditOutlined, DeleteOutlined,  } from '@ant-design/icons'
import {Popconfirm , notification} from 'antd'
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import DetailUserDrawer from './detail.user.drawer';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);



    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a
                            onClick={() => {
                                setDataDetail(record);
                                setIsOpenDetail(true);
                            }}
                        >{record._id}</a>
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
                        <Popconfirm
                            title="Delete user"
                            description="Are you sure to delete this user?"
                            onConfirm={()=> {
                                deleteUser(record._id);
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined style={{ padding: "10px", cursor: "pointer", color: "red", fontSize: "20px" }} />
                        </Popconfirm>
                        
                    </div>
                );
            }

        },

    ];

    const deleteUser = async(id) => {
        const res =  await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: 'Delete User',
                description: 'Delete user success'
            })
            await loadUser();

        } else {
            notification.error({
                message: 'Error delete user',
                description: JSON.stringify(res.message)
            })
        }
    }


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
                loadUser={loadUser}

            />
            <DetailUserDrawer
                isOpenDetail={isOpenDetail}
                setIsOpenDetail={setIsOpenDetail}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                loadUser ={loadUser}
            />
        </>
    );
}
export default UserTable;