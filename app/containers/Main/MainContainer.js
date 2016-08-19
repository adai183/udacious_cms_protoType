import React from 'react'
import { Navigation } from 'components'

const MainContainer = (props) => (
  <div>
    <Navigation />
    <main>
      {props.children}
    </main>
  </div>
)

export default MainContainer
