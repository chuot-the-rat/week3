import BookCard from "./BookCard";
import books from "../data/books.json";
import "./index.css";

function App() {
    return (
        <>
            <div className="app">
                <div className="header">
                    <h1>Book Shop Catalog</h1>
                </div>
                <div className="content">
                    <div className="content-books">
                        {books.map((book) => (
                            <BookCard
                                key={book.isbn13}
                                book={book}
                            />
                        ))}
                    </div>
                    <div className="btn">
                        <button>Load More!</button>
                    </div>
                </div>

                <div className="footer">
                    <div>Leana Le © 2025 Book Shop</div>
                </div>
            </div>
        </>
    );
}

export default App;
