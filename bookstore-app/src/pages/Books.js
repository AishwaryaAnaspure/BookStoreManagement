import { useContext, useState } from "react";
import BookContext from "../context/BookContext";
import BookCard from "../components/BookCard";
import pagination from "../components/Pagination";
import Pagination from "../components/Pagination";

const Books = () => {
    const { books, loading } = useContext(BookContext);
    const [sort, setSort] = useState("A-Z");
    const [currentPage, setCurrentPage] =useState(1);
    const booksPerPage = 5;

    if (loading) return 
    <h2> Loading....</h2>;

    const sortedBooks = [...books].sort((a, b) => {
        if(sort === "A-Z") return 
        a.title.localeCompare(b.title);
        if(sort === "Z-A") return
        b.title.localeCompare(a.title);
        if (sort === "Low-High") return 
        a.price - b.price;
        if(sort === "High-Low") return
        b.price - a.price;
        return 0;
    });

    //Pagination logic
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook -booksPerPage;
    const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.cell(sortedBooks.length / booksPerPage);


    return (
        <div>
            <h2> Book Listing </h2>
            <select onChange={(e) => setSort(e.target.value)}>
                <option value="A-Z"> A to Z </option>
                <option value=" Z-A"> Z to A</option>
                <option value="Low-High"> Price: Low to High</option>
                <option value="High-Low"> Price: High to Low</option>
            </select>
            <div>
                {currentBooks.map((book) => ( 
                    <BookCard key={book.id} book={book} />
                ) )}
            </div>
            <Pagination currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage} />
        </div>

    );
};

export default Books;