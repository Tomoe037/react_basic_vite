import axios from './axios.customize';
const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,  // trước dấu 2 chấm là tên key, sau là giá trị từ react
        email: email,
        password: password,
        phone: phone,
    }
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,  // trước dấu 2 chấm là tên key, sau là giá trị từ react
        phone: phone,
    }
    return axios.put(URL_BACKEND, data);
}

const fetchUserDataAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;

    return axios.get(URL_BACKEND);
}

const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`
    return axios.delete(URL_BACKEND);
}

const handleUploadFile = (file, folder) => {
    const URL_BACKEND = "/api/v1/file/upload"
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data",
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append('fileImg', file);
    return axios.post(URL_BACKEND, bodyFormData, config);
}

const updateAvatarUserAPI = (avatar, _id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,  // trước dấu 2 chấm là tên key, sau là giá trị từ react
        phone: phone,
        avatar: avatar,
    }
    return axios.put(URL_BACKEND, data);
}

const registerUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,  // trước dấu 2 chấm là tên key, sau là giá trị từ react
        email: email,
        password: password,
        phone: phone,
    }
    return axios.post(URL_BACKEND, data);
}

const loginAPI = (email, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        // trước dấu 2 chấm là tên key, sau là giá trị từ react
        username: email,
        password: password,
    }
    return axios.post(URL_BACKEND, data);
}
const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/account";
    return axios.get(URL_BACKEND);
}

const logoutAPI = () => {
    const URL_BACKEND = "/api/v1/auth/logout";
    return axios.post(URL_BACKEND);
}

//1:tao API lay du lieu book
/*phân trang tĩnh
// const fetchAllBookDataAPI = () =>{
//     const URL_BACKEND = "api/v1/book?current=1&pageSize=10";
//     return axios.get(URL_BACKEND);
// } */

//phân trang động
const fetchAllBookDataAPI = (current, pageSize) =>{
    const URL_BACKEND = `api/v1/book?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}
export {
    createUserAPI, updateUserAPI, fetchUserDataAPI, deleteUserAPI, handleUploadFile, updateAvatarUserAPI, registerUserAPI,
    loginAPI, getAccountAPI, logoutAPI,
    fetchAllBookDataAPI
}