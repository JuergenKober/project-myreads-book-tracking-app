import React from 'react';

const ShelfChanger = props => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={event =>
          props.changeShelf(props.book, event.target.value)
        }
        value={props.currentShelf}
      >
        <option value="move" disabled>Move to... {props.currentShelf}</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
};

export default ShelfChanger;
