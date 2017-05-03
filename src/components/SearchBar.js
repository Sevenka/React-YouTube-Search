import React, { Component } from 'react'

class SearchBar extends Component {
  onSearch(term) {
    this.props.onTermChange(term)
  }
  render() {
    return (
      <form action="#">
        <div className="row">
          <div className="col-sm-10 form-group form-group-lg">
            <input type="text" className="form-control" placeholder="Search..." ref="search" />
          </div>
          <div className="col-sm-2 form-group form-group-lg">
            <button className="btn btn-primary btn-lg" type="button" onClick={(event) => this.onSearch(this.refs.search.value)}>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar