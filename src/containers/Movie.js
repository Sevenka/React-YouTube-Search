import React, { Component } from 'react'

import Player from '../components/Movie/Player'

export default class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <Player />
      </div>
    )
  }
}