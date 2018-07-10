import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


/**
* @description Represents a Book Shelf react component
*/
class BookShelf extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }

  render (){
    const { name, books, selectedValue } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book key={book.id} book={book} updateShelf={this.props.updateShelf}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
