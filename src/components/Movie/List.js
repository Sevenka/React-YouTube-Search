import React from 'react'
import { Link } from 'react-router-dom'

const List = ({movies}) => {
  const moviesList = movies.list
  if (moviesList.length) {
    const movieItems = moviesList.map((movie) => {
      return(
        <div className="row thumbnail-item" key={movie.id.videoId}>
          <Link to={"/movie/" + movie.id.videoId} className="clearfix">
            <div className="col-xs-4 col-sm-3">
              <img src={movie.snippet.thumbnails.high.url} className="img-responsive" alt="preview" />
            </div>
            <div className="col-xs-8 col-sm-9">
              <h2 className="thumbnail-title">{movie.snippet.title}</h2>
            </div>
          </Link>
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
  } else {
    return (
      <div className="list">
        <h3 className="no-items">Input your request in the field above and click on "Submit" button</h3>
      </div>
    )
  }
}

export default List