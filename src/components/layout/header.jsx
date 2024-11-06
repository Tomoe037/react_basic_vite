import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, UsergroupAddOutlined, SettingOutlined, BookOutlined, LoadingOutlined, AliwangwangOutlined, LoginOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { Children, useState, useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutAPI } from '../../services/api.service';


const Header = () => {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();

    // lay data 
    const { user, setUser } = useContext(AuthContext);
    // console.log("check data ", user);

    const onClick = (e) => {
        //   console.log('click ', e);
        setCurrent(e.key);
    };
    const handleLogout = async () => {
        const res = await logoutAPI();
        //clear data
        if (res.data) {
            localStorage.removeItem("access_token");
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("logout thanh cong.")

            //redirect to home
            navigate("/");
        }

    }

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"/books"} >Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },
        //cau dieu kien "Conditionally add object to an array while being declared"
        //neu khong co nguoi dung thi hien dang nhap va nguoc lai
        ...(!user.id ? [{
            label: <Link to={"/login"} >Dang nhap</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),

        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Dang xuat</span>,
                    key: 'logout',
                },
            ]
        }] : []),
    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}
export default Header;