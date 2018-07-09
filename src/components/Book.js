import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

/**
* @description Represents a book react component
*/
class Book extends Component {
  static propType = {
    book: PropTypes.object.isRequired,
    selectedValue: PropTypes.string.isRequired
  }

  /**
  * @description Attempt to get the book imageURl, or return a not found image.
  * @param {object} book - A book object that contains the image url.
  */
  getImageUrl(book){
      return typeof book.imageLinks === 'undefined' ? 'http://www.azcounties.org/images/pages/N193/No%20found%20photo.png' : book.imageLinks.thumbnail;
  }


  /**
  * @description get the author(s) of the book. If more than 1 will join them.
  * @param {object} book - A book object that contains the image url.
  */
  getAuthors(book){
      return typeof book.authors === 'undefined' ? 'No Author Found' : book.authors.join(', ')
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
