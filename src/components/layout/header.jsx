import { Link} from 'react-router-dom';
import { HomeOutlined, UsergroupAddOutlined ,SettingOutlined, BookOutlined , LoadingOutlined, AliwangwangOutlined, LoginOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useState, useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const [current, setCurrent] = useState('home');

    // lay data 
    const {user} = useContext(AuthContext);
    // console.log("check data ", user);

    const onClick = (e) => {
    //   console.log('click ', e);
      setCurrent(e.key);
    };

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
            label:`Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,     
            children: [
                {
                    label: 'Đăng xuất',
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