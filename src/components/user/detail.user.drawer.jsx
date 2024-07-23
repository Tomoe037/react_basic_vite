import { Drawer } from 'antd';
import { useState, useEffect } from 'react';
const DetailUserDrawer = (props) => {

    const { isOpenDetail, setIsOpenDetail, dataDetail, setDataDetail } = props;

    

    return (
        <>
            <Drawer
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
                    </>
                    :
                    <p>Không có dữ liệu người dùng </p>
                }

            </Drawer>
        </>
    )
}
export default DetailUserDrawer;