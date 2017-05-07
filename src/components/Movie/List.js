import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const List = ({movies, onDelete}) => {
  const moviesList = movies.list
  var movieItems = []
  if (moviesList.length) {
    movieItems = moviesList.map((movie) => {
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
            <button className="btn btn-danger movie-action" onClick={(event) => onDelete(movie.id.videoId)} title="Delete from list" type="button">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </div>
        </div>
      )
    })  
  }
  return (
    <div className="list">
      {movieItems.length ? movieItems : (
        <h3 className="no-items">
          { movies.noResults ? 'No results' :
          movies.pending ? 'Loading...' :
          movies.error ? 'Error occured while loading data' :
          'Input your request in the field above and click on "Submit" button'}
        </h3>
      )}
    </div>
  )
}

List.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default List