import React from 'react';
import * as BooksAPI from '../api/BooksAPI';
import { Link } from "react-router-dom";
import Book from './Book';

class SearchPage extends React.Component {
  state = {
    query: '',
    books: [],
  };

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  searchBooks = (query, booksOnShelf) => {
    //const { query } = this.state;
    //const booksOnShelf = this.props.books;

    if (query.length > 0) {
      BooksAPI.search(query).then(booklist => {
        if (booklist.length > 0) {
          booklist.forEach((book, index) => {

            const listedBook = booksOnShelf.find(
              elem => elem.id === book.id
            );
            listedBook
              ? book.shelf = listedBook.shelf
              : book.shelf = 'none';
          })
          this.setState({ books: booklist });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };

  componentDidUpdate(prevProps, prevState) {

    const { query } = this.state;
    const booksOnShelf = this.props.books;
    console.log(query);

     if(prevState.query !== this.state.query){
       if (query.length > 0) {
         BooksAPI.search(query).then(booklist => {
          if (booklist.length > 0) {
            booklist.forEach((book, index) => {

              const listedBook = booksOnShelf.find(
                elem => elem.id === book.id
              );
              listedBook
                ? book.shelf = listedBook.shelf
                : book.shelf = 'none';
            })
            this.setState({ books: booklist });
          }
        });
      }
      this.setState({ books: [] });
    }
    console.log(this.state.books);
  }

  render() {
    const { books, query } = this.state;

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
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
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
