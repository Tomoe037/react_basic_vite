import { Table } from 'antd';
import { EditOutlined, DeleteOutlined,  } from '@ant-design/icons'
import {Popconfirm , notification} from 'antd'
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import DetailUserDrawer from './detail.user.drawer';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser, current,pageSize, total, setCurrent, setPageSize } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);



    const columns = [
        {
            title: 'STT',
            render: (_, record , index) => {
                return (
                    <>
                        {(index + 1) + (current- 1)*pageSize}
                    </>
                )
            }
        },
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

    const onChange = (pagination, filters, sorter, extra) => { 
        // neu thay doi vi tri trang : current
        if(pagination && pagination.current){
            if(+pagination.current != +current){ // dau + la de tu chuyen sang kieu du lieu so "5"=>5
                setCurrent(+pagination.current);
            } 

        }
         // neu thay doi tong so phan tu cua trang : pageSize
         if(pagination && pagination.pageSize){
            if(+pagination.pageSize != +pageSize){ // dau + la de tu chuyen sang kieu du lieu so "5"=>5
                setPageSize(+pagination.pageSize);
            } 

        }
        // console.log("check:  ",{pagination, filters, sorter, extra});
    };
    // console.log("check pagesize :", pageSize);

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
                pagination={
                    {
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    } }
                onChange={onChange}    
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