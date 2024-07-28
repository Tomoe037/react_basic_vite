import { Drawer } from 'antd';
const DetailUserDrawer = (props) => {

    const { isOpenDetail, setIsOpenDetail, dataDetail, setDataDetail } = props;

    

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
                    <div>
                        <img
                        width={"240px"}
                        height={"240px"}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
                        ></img>
                    </div>
                    <div>
                        <label htmlFor="btnUploadImage"
                        style={{
                            display : "block",
                            background : "#6CB4EE" ,
                            padding: "5px",
                            color: "white",
                            cursor: "pointer",
                            width: "100px",
                            height: "fit-content",
                            borderRadius: "5px",

                        }}
                        > Upload Image</label>
                        <input type="file" id='btnUploadImage' hidden />
                    </div>
                    </>
                    :
                    <p>Không có dữ liệu người dùng </p>
                }

            </Drawer>
        </>
    )
}
export default DetailUserDrawer;