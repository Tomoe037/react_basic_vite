import axios from './axios.customize';
const createUserAPI =  (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName : fullName,  // trước dấu 2 chấm là tên key, sau là giá trị từ react
        email : email,
        password : password,
        phone : phone,
    }
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI =  () => {
    
}

const fetchUserDataAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    
    return axios.get(URL_BACKEND);
}

export {
    createUserAPI, updateUserAPI, fetchUserDataAPI
}