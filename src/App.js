import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import Search from './components/Search'

import './App.css'

/**
* @description Book React Application
*/
class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentWillMount()
  {
    BooksAPI.getAll().then(books => {
        this.setState({
          books: books
        })
    })
  }


  /**
  * @description Update the Shelves
  * @param {object} book - book Object to update
  * @param {string} shelf - shelf to add book to.
  */
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat(book),
    }));
  }
  /**
  * @description Search for a book
  * @param {string} text - text to search for
  */
  searchForBooks = (text) => {
    return BooksAPI.search(text)
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf name='Currently Reading' books={this.state.books.filter(book => book.shelf === 'currentlyReading')} updateShelf={this.updateShelf}/>
                  <BookShelf name='Want to Read' books={this.state.books.filter(book => book.shelf === 'wantToRead')} updateShelf={this.updateShelf}/>
                  <BookShelf name='Read' books={this.state.books.filter(book => book.shelf === 'read')} updateShelf={this.updateShelf}/>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )} />
          <Route path="/search" render={(props)=> (
            <div>
            <Search {...props} searchAPI={this.searchForBooks} books={this.state.books} updateShelf={this.updateShelf}/>
            </div>
          )}/>

      </div>
    )
  }
}

export default BooksApp
