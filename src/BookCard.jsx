function BookCard({ book }) {
    return (
        <div className="card">
            <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="image">
                    <img
                        src={book.image}
                        alt={book.title}
                    />
                </div>
                <div className="title">
                    <h2>{book.title}</h2>
                </div>
                <div className="price">
                    <p>Price: {book.price}</p>
                </div>
            </a>
        </div>
    );
}

export default BookCard;
