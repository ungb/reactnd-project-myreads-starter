import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    selectedValue: PropTypes.string.isRequired
  }
  state ={
    value: 'none'
  }
  handleChange(book, value, updateShelf) {
    this.setState({value: value});
    updateShelf(book, value)
  }

  render(){
    const {selectedValue} = this.props;
    return (
      <div className="book-shelf-changer">
        <select defaultValue={selectedValue} onChange={(event) => this.handleChange(this.props.book, event.target.value, this.props.updateShelf)}>
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
