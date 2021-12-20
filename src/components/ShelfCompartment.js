import React from 'react';
import Book from './Book';

const ShelfCompartment = props => {
  console.log(props.books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.compartment.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book, index) => (
            <Book
              key={index}
              book={book}
              changeShelf={props.changeShelf}
              currentShelf={book.shelf}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ShelfCompartment;
