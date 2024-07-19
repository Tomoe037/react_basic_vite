import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchUserDataAPI } from '../../services/api.service';
const UserTable = () => {
    const [dataUsers , setDataUsers] = useState([
        {
            _id : "10",
            fullName : "tomoe",
            email : "tomoe@gmail.com"
        }
    ]);
    
    useEffect(() => {
        console.log("check load 111");
        loadUser();
    }, []) ;

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
        
        const res = await fetchUserDataAPI();
        setDataUsers(res.data);
        console.log("2")  ;
    }
    console.log("check load 000");
    
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}/>
    );
}
export default UserTable;