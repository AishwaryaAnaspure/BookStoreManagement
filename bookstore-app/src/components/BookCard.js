const BookCard = ({ book }) => {
    return (
        <div>
            <h3> {book.title} </h3>
            <p> {book.category} </p>
            <p> ₹{book.price} </p>
                    
        </div>
    );
};
export default BookCard;
