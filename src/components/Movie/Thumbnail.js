import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Thumbnail extends Component {
  render() {
    return (
      <div className="thumbnail-item">
        <div className="row">
          <div className="col-xs-4 col-sm-3">
            <Link to="/movie/movieId">
              <img src="#" className="img-responsive" alt="preview" />
            </Link>
          </div>
          <div className="col-xs-8 col-sm-9">
            <Link to="/movie/movieId">
              <h2 className="thumbnail-title"></h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
