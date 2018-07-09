import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @description Represents a Book Shelf changer react component
*/
class BookShelfChanger extends Component {
  static propTypes = {
    selectedValue: PropTypes.string.isRequired
  }

  state ={
    value: 'none'
  }

  componentWillMount()
  {
    this.setState({
      value: this.props.selectedValue
    })
  }

  /**
  * @description Represents a Book Shelf changer react component
  * @param {object} book - Object of a book.
  * @param {string} value - value can be currentlyReading, wantToRead, read, none
  * @param {function} updateShelf - the callback method to update the shelf.
  */
  handleChange(book, value, updateShelf) {
    this.setState({value: value});
    updateShelf(book, value)
  }

  render(){
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={(event) => this.handleChange(this.props.book, event.target.value, this.props.updateShelf)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading" >Currently Reading</option>
          <option value="wantToRead" >Want to Read</option>
          <option value="read" >Read</option>
          <option value="none" >None</option>
        </select>
      </div>
    )
  }

}

export default BookShelfChanger
