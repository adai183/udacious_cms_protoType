import React, { Component } from 'react'
import Feed from '../../components/Feed'
import { ref } from '../../config/constants'

class FeedContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {articles: false}
    ref.child('articles2').on('value', (snapshot) => {
      const allArticles = snapshot.val()
      const articles = Object.keys(allArticles).map((k) => allArticles[k])
      this.setState({articles})
    })
  }

  render () {
    const { articles } = this.state
    if (!articles) return <div>{'Loading'}</div>
    else return <Feed articles={this.state.articles} />
  }
}

export default FeedContainer
