import React, { Component } from 'react'
import PropTypes from 'prop-types'


const BookShelfChanger = (props) => {
  const {selectedValue} = props;
  return (
    <div className="book-shelf-changer">
      <select defaultValue={selectedValue}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none" >None</option>
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  selectedValue: PropTypes.string.isRequired
}

export default BookShelfChanger
