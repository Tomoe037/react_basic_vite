import BookTable from "../components/book/book.table";
import { Table } from "antd";

const BookPage = () => {
    return (
        <>
            <div style={{
                padding:"20px",
                alignContent:"center",
                fontSize: "30px"
            }}>Book Page</div>
            <BookTable></BookTable>
            
        </>

    )
}
export default BookPage;