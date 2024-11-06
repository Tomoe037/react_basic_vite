import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { fetchAllBookDataAPI } from "../../services/api.service";




const BookTable = () => {
    //Sử dụng useState để lưu trữ data của table 
    const [dataBooks, setDataBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(1);
    const [pageSizeBook, setPageSizeBook] = useState(2);
    const [totalBook, setTotalBook] = useState(0);


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
        </>
    )

}

export default BookTable;