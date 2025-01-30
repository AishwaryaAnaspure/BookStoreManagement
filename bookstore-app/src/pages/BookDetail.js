import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://book-store-management.glitch.me/books/${id}')
        .then((res) => {
            setBook(res.data);
            setLoading(false);
        })
        .catch((err) => console.error(err));
    }, [id]);

    if (loading) return
    <h2>Loading...</h2>;
    if(!book) return 
    <h2>Book Not Found</h2>;

    return(
        <div style={{ padding: "20px"}}>
            <h2>{book.title}</h2>
            <p><strong>Category:</strong>{book.catgory}</p>
            <p><strong> Price: </strong>{book.price}</p>
            <p><strong>Description: </strong>{book.description}</p>
        </div>
    );
};
export default BookDetail;