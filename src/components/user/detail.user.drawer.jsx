import { Drawer } from 'antd';
import { useState } from 'react';
const DetailUserDrawer = (props) => {

    const { isOpenDetail, setIsOpenDetail, dataDetail, setDataDetail } = props;
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
    console.log("check", preview)
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
                        {preview &&
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