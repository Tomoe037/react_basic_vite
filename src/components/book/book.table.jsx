import React, { useEffect, useState } from "react";
import { Table, Drawer } from "antd";
import { fetchAllBookDataAPI } from "../../services/api.service";




const BookTable = () => {
    //Sử dụng useState để lưu trữ data của table 
    const [dataBooks, setDataBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(1);
    const [pageSizeBook, setPageSizeBook] = useState(2);
    const [totalBook, setTotalBook] = useState(0);
    const [openDetailBook, setOpenDetailBook] = useState(false);
    const [dataDetailBook, setDataDetailBook] = useState([]);


    //empty array => chay 1 lan
    // [currentBook] = chay 1 lan và chạy lại mỗi khi currentbook thay đổi
    useEffect(() => {
        loadBook();
    }, [currentBook, pageSizeBook])

    const columns = [
        {
            title: 'Stt',
            // phải truyền index đúng vị trí tham số thứ 3,thì nó mới nhận đúng chỉ số của hàng hiện tại
            render: (_, __, index) => {
                return (
                    <>
                        {(index + 1) + (currentBook - 1) * pageSizeBook}
                    </>
                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            key: 'id',
            render: (_, record) => {
                return (<a onClick={
                    () => {
                        setDataDetailBook(record);
                        setOpenDetailBook(true)
                    }
                }>{record._id}</a>)
            },
        },
        {
            title: 'Ảnh',
            dataIndex: 'thumbnail',
            key: 'thumbnail',
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',
            key: 'mainText',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Gía tiền',
            dataIndex: 'price',
            key: 'price',
            render: (price) => {
                return (
                    price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
                )
            }
        },
        {
            title: 'Số lượng bán',
            dataIndex: 'sold',
            key: 'sold',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Thể loại',
            dataIndex: 'category',
            key: 'category',
        },
    ]

    const loadBook = async () => {
        //b2 goi API lay du lieu book
        const res = await fetchAllBookDataAPI(currentBook, pageSizeBook);
        // console.log("checkkk fetchAllBookDataAPI", res.data.result);
        if (res.data) {
            setDataBooks(res.data.result);
            setCurrentBook(res.data.meta.current);
            setPageSizeBook(res.data.meta.pageSize);
            setTotalBook(res.data.meta.total);
        }

    }

    const onChange = (pagination, filters, sorter, extra) => {
        console.log("check pagination", { pagination, filters, sorter, extra });
        if (pagination && pagination.current) {
            if (+pagination.current !== +currentBook) {
                setCurrentBook(+pagination.current);
            }

            if (+pagination.pageSize !== +pageSizeBook) {
                setPageSizeBook(+pagination.pageSize);
            }
        }

    };
    // console.log("check dataDetailBook", dataDetailBook)





    return (
        <>
            <Table
                columns={columns}
                dataSource={dataBooks}
                rowKey={"_id"}
                pagination={
                    {
                        current: currentBook,
                        pageSize: pageSizeBook,
                        showSizeChanger: true,
                        total: totalBook,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}
            />
            <Drawer title="Basic Drawer"
                onClose={() => {
                    setDataDetailBook(null)
                    setOpenDetailBook(false)
                }}
                open={openDetailBook}>

                {dataDetailBook ?
                    <>
                        <p>Id : {dataDetailBook._id}</p>
                        <p>Tiêu đề : {dataDetailBook.mainText}</p>
                        <p>Tác giả : {dataDetailBook.author}</p>
                        <p>Giá : {dataDetailBook.price}</p>
                        <p>Số lượng : {dataDetailBook.quantity}</p>
                        <p>Lượng bán : {dataDetailBook.sold}</p>
                        <p>Loại sách : {dataDetailBook.category}</p>
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
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetailBook.thumbnail}`}
                            ></img>
                        </div>
                    </>
                    :
                    <>
                        <div>not data</div>
                    </>
                }
            </Drawer>
        </>
    )

}

export default BookTable;