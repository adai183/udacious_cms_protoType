import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { MainContainer } from 'containers'
import { Feed, CmsEditor } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Feed} />
      <Route path='/cms' component={CmsEditor} />
    </Route>
  </Router>
)

export default routes
