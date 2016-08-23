import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { MainContainer, Feed } from 'containers'
import { CmsEditor } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Feed} />
      <Route path='/cms' component={CmsEditor} />
    </Route>
  </Router>
)

export default routes
