import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  static propType = {
    book: PropTypes.object.isRequired,
    selectedValue: PropTypes.string.isRequired
  }

  getImageUrl(book){
    if(typeof book.author === 'undefined'){
      return typeof book.imageLinks === 'undefined' ? 'http://www.azcounties.org/images/pages/N193/No%20found%20photo.png' : book.imageLinks.thumbnail;
    }
    return book.bookCoverImageUrl
  }
  getAuthors(book){
    if(typeof book.author === 'undefined'){
      return typeof book.authors === 'undefined' ? 'No Author Found' : book.authors.join('\n')
    }
      return book.author
  }
  render() {
    const {selectedValue, book } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.getImageUrl(book)})` }}></div>
            <BookShelfChanger selectedValue={selectedValue} book={book} updateShelf={this.props.updateShelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{this.getAuthors(book)}</div>
        </div>
      </li>
    )
  }
}

export default Book
