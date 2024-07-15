import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";

const UserPage = () => {
    return (<div>User Page
        <div style={{padding:"0 20px"}}> 
            <UserForm />
            <UserTable />

        </div>
    </div>)
}
export default UserPage;