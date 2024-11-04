
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './services/api.service'
import { useEffect, useContext } from 'react'
import { AuthContext } from './components/context/auth.context'



const App = () => {
  //để set user lên nút đăng nhập trên header
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo()
  }, []); //chi muon no chay mot lan

  //test do tre khi setuser len nut dang nhap
  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSeconds)
    })
  }


  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(3000);
    if (res.data) {
      //success
      setUser(res.data.user)
      console.log("check user data", res.data)
    }
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
