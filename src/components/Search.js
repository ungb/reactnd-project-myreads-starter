import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom'
import QueryString from 'query-string'

class Search extends Component {
  static propTypes = {
    searchAPI: PropTypes.func.isRequired
  }
  state = {
    searchTerm: '',
    searchResults: []
  }
  componentDidMount()
  {
    this.updateSearch(QueryString.parse(this.props.location.search).q)
  }
  updateSearch(text){
    this.setState(prevState => ({
      searchTerm: text
    }))
    if (text === ''){
      this.setState({
        searchResults:[]
      })
    }
    else {
      this.props.searchAPI(text)
        .then(res => this.setState({ searchResults: res }) )
    }
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
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
