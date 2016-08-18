import React, { PropTypes } from 'react'

const Title = ({ content }) => (
  <h1>
    {content}
  </h1>
)

Title.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Title
