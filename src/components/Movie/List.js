import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const List = ({movies, onDelete}) => {
  const moviesList = movies.list
  if (moviesList.length) {
    const movieItems = moviesList.map((movie) => {
      return(
        <div className="row thumbnail-item" key={movie.id.videoId}>
          <Link to={"/movie/" + movie.id.videoId}>
            <div className="col-xs-4 col-sm-3">
              <img src={movie.snippet.thumbnails.high.url} className="img-responsive" alt="preview" />
            </div>
            <div className="col-xs-6 col-sm-8">
              <h2 className="thumbnail-title">{movie.snippet.title}</h2>
            </div>
          </Link>
          <div className="col-xs-2 col-sm-1">
            <button className="btn btn-danger delete-movie" onClick={(event) => onDelete(movie.id.videoId)} type="button">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </div>
        </div>
      )
    })
    return (
      <div className="list">{movieItems}</div>
    )
  } else if (movies.noResults) {
    return (
      <div className="list">
        <h3 className="no-items">No results</h3>
      </div>
    )
  } else if (movies.pending) {
    return (
      <div className="list">
        <h3 className="no-items">Loading...</h3>
      </div>
    )
  } else if (movies.error) {
    return (
      <div className="list">
        <h3 className="no-items">Error occured while loading data</h3>
      </div>
    )
  } else {
    return (
      <div className="list">
        <h3 className="no-items">Input your request in the field above and click on "Submit" button</h3>
      </div>
    )
  }
}

List.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default List