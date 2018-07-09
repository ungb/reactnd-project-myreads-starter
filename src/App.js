import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import Search from './components/Search'

import './App.css'

class BooksApp extends React.Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read:[]
  }

  componentWillMount()
  {
    this.update();
  }

  update = () => {
    BooksAPI.getAll().then(books => {
        this.setState({
          currentlyReading: books.filter(book=> book.shelf ==='currentlyReading'),
          wantToRead: books.filter(book=> book.shelf ==='wantToRead'),
          read: books.filter(book=> book.shelf ==='read'),
        })
    })
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(shelves => {
      this.update();
    })
  }

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
                  <BookShelf name='Currently Reading' books={this.state.currentlyReading} selectedValue='currentlyReading' updateShelf={this.updateShelf}/>
                  <BookShelf name='Want to Read' books={this.state.wantToRead} selectedValue='wantToRead' updateShelf={this.updateShelf}/>
                  <BookShelf name='Read' books={this.state.read} selectedValue='read' updateShelf={this.updateShelf}/>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )} />
          <Route path="/search" render={(props)=> (
            <div>
            <Search {...props} searchAPI={this.searchForBooks} updateShelf={this.updateShelf}/>
            </div>
          )}/>

      </div>
    )
  }
}

export default BooksApp
