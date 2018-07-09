import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


/**
* @description Represents the Search react component
* @param {object} props - props that is passed in to react component
*/
const SearchResults = (props) => {
    const { results, updateShelf } = props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {typeof results !== 'undefined' && results.constructor === Array &&
          results.map(book => (
            <Book key={book.id} selectedValue='none' book={book} updateShelf={updateShelf} />
          ))}
        </ol>
      </div>
    )
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default SearchResults;
