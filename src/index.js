import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import Home from './containers/Home'
import Movie from './containers/Movie'
import './styles/style.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Link to='/'>
          <h1 className="main-title">YouTube Search API</h1>
        </Link>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movie" component={Movie} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)