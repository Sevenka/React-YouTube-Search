import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import SearchBar from '../components/SearchBar'
import List from '../components/Movie/List'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <SearchBar onTermChange={this.props.actions.getMovies} />
        <List movies={this.props.movies} onOpenMovie={this.props.actions.openMovie} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)