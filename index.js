import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './src/style.css'
import PortfolioSimpleFooter from './src/views/portfolio-simple-footer'
import NotFound from './src/views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={PortfolioSimpleFooter} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
