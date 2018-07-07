import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
static propType = {
  book: PropTypes.object.isRequired,
  selectedValue: PropTypes.string.isRequired
}
  render() {
    const {selectedValue, book} = this.props
    const {bookCoverImageUrl, title, author} = book
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCoverImageUrl})` }}></div>
            <BookShelfChanger selectedValue={selectedValue}/>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }

}

export default Book
