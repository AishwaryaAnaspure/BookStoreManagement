import{ createContext, useState, useEffect } from "react";
import axios from "axios";
const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://book-store-management.glitch.me/")
        .then((res) => setBooks(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return(
        <BookContext.Provider value={{ books, loading }}>
        {childern}
        </BookContext.Provider>
    );
};

export default BookContext;
