import React from 'react';
import ShelfCompartment from './ShelfCompartment';
import { Link } from "react-router-dom";

const BookShelf = props => {
  const compartments = {
    currentlyReading : {
      title: 'Currently Reading',
    },
    wantToRead: {
      title: 'Want to Read',
    },
    read: {
      title: 'Read',
    }
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <ShelfCompartment
            compartment={compartments.currentlyReading}
            books={props.books.filter(
              book => book.shelf === "currentlyReading"
            )}
            changeShelf={props.changeShelf}
          />
          <ShelfCompartment
            compartment={compartments.wantToRead}
            books={props.books.filter(
              book => book.shelf === "wantToRead"
            )}
            changeShelf={props.changeShelf}
          />
          <ShelfCompartment
            compartment={compartments.read}
            books={props.books.filter(
              book => book.shelf === "read"
            )}
            changeShelf={props.changeShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default BookShelf;
