import React, { Component } from 'react'

export default class Player extends Component {
  render() {
    let id = window.location.pathname.slice(6)
    let url = 'https://www.youtube.com/embed/' + id
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
    )
  }
}
