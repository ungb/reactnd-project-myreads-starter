import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom'
import QueryString from 'query-string'
import {DebounceInput} from 'react-debounce-input';

/**
* @description Represents the Search react component
*/
class Search extends Component {
  static propTypes = {
    searchAPI: PropTypes.func.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    searchTerm: '',
    searchResults: []
  }

  componentDidMount()
  {
    this.updateSearch(QueryString.parse(this.props.location.search).q)
  }

  /**
  * @description update the search state.
  * @param {string} text - text that is being searched.
  */
  updateSearch = (text) => {
    this.setState(prevState => ({
      searchTerm: text
    }))
    this.props.searchAPI(text)
      .then(res => this.setState({ searchResults: res }))
  }


  render(){

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              debounceTimeout={300}
              placeholder="Search by title or author"
              value={this.state.searchTerm}
              onChange={(event) => this.updateSearch(event.target.value)}
            />
          </div>
        </div>
        <SearchResults results={this.state.searchResults} updateShelf={this.props.updateShelf}/>
      </div>
    )
  }

}

export default Search;
