import React, { Component } from 'react'
import Book from './Book'



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

export default SearchResults;
