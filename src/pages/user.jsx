import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchUserDataAPI } from "../services/api.service";
const UserPage = () => {
    const [dataUsers , setDataUsers] = useState([]);
    const [ current, setCurrent] = useState(1);
    const [ pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    
    //emty array => run once
    // not emty => next value != prev value
    useEffect(() => {
        console.log("check load 111");
        loadUser();
    }, [current,pageSize]) ; // [] + ddieu kien current

    const loadUser = async () => {
        
        const res = await fetchUserDataAPI(current, pageSize);
        if(res.data){
            setDataUsers(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
       
        
    }
    //lift up state
    return (<div>User Page
        <div style={{padding:"0 20px"}}> 
            <UserForm 
            loadUser= {loadUser}
            />
            <UserTable 
            dataUsers = {dataUsers}
            loadUser = {loadUser}
            current = {current}
            pageSize ={pageSize}
            total = {total}
            setCurrent = {setCurrent}
            setPageSize ={setPageSize}
            />

        </div>
    </div>)
}
export default UserPage;