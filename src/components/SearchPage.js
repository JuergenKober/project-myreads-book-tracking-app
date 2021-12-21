import React from 'react';
import * as BooksAPI from '../api/BooksAPI';
import { Link } from "react-router-dom";
import Book from './Book';

class SearchPage extends React.Component {
  state = {
    books: []
  };

  searchBooks = event => {
    const query = event.target.value;
    const booksOnShelf = this.props.books;
    //console.log(booksOnShelf);

    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.length > 0) {
          books.forEach((book, index) => {
            //console.log(books[index].id);
            const listedBook = booksOnShelf.find(
              elem => elem.id === book.id
            );
            listedBook
              ? book.shelf = listedBook.shelf
              : book.shelf = 'none';
          })
          this.setState({ books: books })
        } else {
          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };

  render() {
    const { books } = this.state;

    //console.log('books found: ', books.length);
    //console.log(books)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBooks}
            />

          </div>
        </div>
        <div className="search-books-results">
          {books.length > 0 && (
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book
                key={index}
                book={book}
                changeShelf={this.props.changeShelf}
                currentShelf={book.shelf}
              />
            ))}
          </ol>
          )}
        </div>
      </div>
    )
  }
}

export default SearchPage;
