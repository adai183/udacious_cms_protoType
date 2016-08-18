import React, { Component } from 'react'
import { ref } from '../../config/constants'
import { Title, ContentRenderer } from 'components'

class Feed extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)

    this.state = { articles: [] }
  }

  componentWillMount () {
    ref.child('articles').on('value', (snapshot) => {
      const allArticles = snapshot.val()
      const arr = Object.keys(allArticles).map((k) => allArticles[k])
      this.setState({ articles: arr })
    })
  }

  render () {
    return (
      <div>
        {this.state.articles.map((a) => {
          return (
            <div>
              <Title content={a.title} key={a.articleId} />
              <ContentRenderer contentBlocks={a.contentBlocks} key={a.title} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Feed
