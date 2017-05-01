import React, { Component } from 'react'

import SearchBar from '../components/SearchBar'
import List from '../components/Movie/List'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <SearchBar />
        <List />
      </div>
    );
  }
}
