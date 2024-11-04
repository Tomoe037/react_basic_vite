import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, updateAvatarUserAPI } from '../../services/api.service';
const DetailUserDrawer = (props) => {

    const { isOpenDetail, setIsOpenDetail, dataDetail, setDataDetail,loadUser } = props;
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }
    // console.log("check", preview)

    const handleUpdateUserAvatar = async () => {
        //step 1: upload file
        // console.log("check file : ", selectedFile);
        const resUpload = await handleUploadFile(selectedFile, "avatar") // avtar laf key trong be
        // console.log("check resUpload ", resUpload);
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            // step 2 update user
            const resUpdateAvatar = await updateAvatarUserAPI(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);
            if (resUpdateAvatar.data) {
                setIsOpenDetail(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: 'Succes update avatar user',
                    description: "cập nhật avt thành công"
                })
            } else {
                notification.error({
                    message: 'Error update avatar user',
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }

        } else {
            notification.error({
                message: 'Error upload avatar user',
                description: JSON.stringify(resUpload.message)
            })

        }
        // step 2 update user

    }
    return (
        <>
            <Drawer
                width={"30vw"}
                title="Detail User"
                open={isOpenDetail}
                onClose={() => {
                    setIsOpenDetail(false)
                    setDataDetail(null)

                }}
            >
                {dataDetail ?
                    <>
                        <p>Id : {dataDetail._id}</p>
                        <p>Full Name : {dataDetail.fullName}</p>
                        <p>Email : {dataDetail.email}</p>
                        <p>Phone : {dataDetail.phone}</p>
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                border: "1px solid #ccc",
                                margin: "10px 0",
                            }}
                        >
                            <img

                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
                            ></img>
                        </div>
                        <div>
                            <label htmlFor="btnUploadImage"
                                style={{
                                    display: "block",
                                    background: "#6CB4EE",
                                    padding: "5px",
                                    color: "white",
                                    cursor: "pointer",
                                    width: "100px",
                                    height: "fit-content",
                                    borderRadius: "5px",

                                }}
                            > Upload Image</label>
                            <input
                                type="file" id='btnUploadImage' hidden
                                // onChange={handleOnChangeFile}
                                onChange={(event) => (handleOnChangeFile(event))}
                            />
                        </div>
                        {/* preview image*/}
                        {preview &&
                            <>
                                <div
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        border: "1px solid #ccc",
                                        margin: "10px 0",
                                    }}
                                >
                                    <img

                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                        src={preview}
                                    ></img>
                                </div>
                                <Button type='primary'
                                    onClick={handleUpdateUserAvatar}
                                >Save</Button>
                            </>
                        }

                    </>
                    :
                    <p>Không có dữ liệu người dùng </p>
                }

            </Drawer>
        </>
    )
}
export default DetailUserDrawer;