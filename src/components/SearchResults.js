import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {



  render(){
    const { results } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {typeof results != 'undefined' && results.constructor === Array &&
          results.map(book => (
            <Book key={book.id} selectedValue='none' book={book} />
          ))}
        </ol>
      </div>
    )
  }

}

export default SearchResults;
