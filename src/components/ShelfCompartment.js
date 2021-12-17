import React from 'react';
import Book from './Book';

const ShelfCompartment = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.compartment.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.compartment.books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ShelfCompartment;
