import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './containers/Home'
import Movie from './containers/Movie'
import './styles/style.css'

render(
  <Router>
    <div className="container">
      <Link to='/'>
        <h1 className="main-title">YouTube Search API</h1>
      </Link>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:movie" component={Movie} />
    </div>
  </Router>,
  document.getElementById('root')
)
