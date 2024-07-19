import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { fetchUserDataAPI } from '../../services/api.service';
const UserTable = () => {
    const [dataUsers , setDataUsers] = useState([
        {
            _id : "10",
            fullName : "tomoe",
            email : "tomoe@gmail.com"
        }
    ]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },

    ];

    const loadUser = async () => {
        console.log("check load start ");
        const res = await fetchUserDataAPI();
        console.log("check load end ", res.data);
        
    }
    loadUser();
    
    return (
        <Table columns={columns} dataSource={dataUsers} />
    );
}
export default UserTable;