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
              backgroundImage: `url(${props.book.imageurl})`
            }}></div>
          <ShelfChanger />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.author}</div>
      </div>
    </li>
  )
};

export default Book;
