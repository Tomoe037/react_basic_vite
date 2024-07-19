import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchUserDataAPI } from "../services/api.service";
const UserPage = () => {
    const [dataUsers , setDataUsers] = useState([]);
    
    useEffect(() => {
        console.log("check load 111");
        loadUser();
    }, []) ;

    const loadUser = async () => {
        
        const res = await fetchUserDataAPI();
        setDataUsers(res.data);
        console.log("2")  ;
    }
    return (<div>User Page
        <div style={{padding:"0 20px"}}> 
            <UserForm 
            loadUser= {loadUser}
            />
            <UserTable 
            dataUsers = {dataUsers}
            />

        </div>
    </div>)
}
export default UserPage;