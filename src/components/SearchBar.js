import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <form action="#">
        <div className="row">
          <div className="col-sm-10 form-group form-group-lg">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div className="col-sm-2 form-group form-group-lg">
            <button className="btn btn-primary btn-lg" type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
