import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import '../App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books })
    });
  }

  changeShelf = (book, shelf) => {
    console.log('book :', book);
    console.log('shelf :', shelf);
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      }))

  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <BookShelf
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
