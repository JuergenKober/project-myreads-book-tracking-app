import React from 'react';
import ShelfChanger from './ShelfChanger';
const Book = props => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageLinks && props.book.imageLinks.thumbnail})`
            }}></div>
          <ShelfChanger
            currentShelf={props.book.shelf}
            changeShelf={props.changeShelf}
            book={props.book}
          />
        </div>
        <div className="book-title">{props.book.title}</div>
        {props.book.authors &&
          props.book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
        ))}
      </div>
    </li>
  )
};

export default Book;
