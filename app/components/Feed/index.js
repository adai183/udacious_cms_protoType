import React, { Component } from 'react'
import styles from './index.module.scss'
import cssModules from 'react-css-modules'
import { ref } from '../../config/constants'
import { Title } from 'components'

class Feed extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)

    this.state = { articles: [] }
    this.renderInnerHtml = ::this.renderInnerHtml
  }

  componentWillMount () {
    ref.child('articles2').on('value', (snapshot) => {
      const allArticles = snapshot.val()
      const arr = Object.keys(allArticles).map((k) => allArticles[k])
      this.setState({ articles: arr })
      console.log(this.state.articles)
    })
  }

  renderInnerHtml (__html) {
    return {__html}
  }

  render () {
    return (
      <div className={styles.feed}>
        {this.state.articles.map((a) => {
          return (
            <div>
              <Title content={a.title} key={a.articleId} />
              <div dangerouslySetInnerHTML={this.renderInnerHtml(a.html)}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default cssModules(Feed, styles)
