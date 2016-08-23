import React, { PropTypes } from 'react'
import styles from './index.module.scss'
import cssModules from 'react-css-modules'
import { Title } from 'components'

const renderInnerHtml = (__html) => ({__html})

const Feed = ({articles}) => (
  <div className={styles.feed}>
    {articles.map((a, i) => {
      return (
        <div key={i}>
          <Title content={a.title} key={a.articleId} />
          <div dangerouslySetInnerHTML={renderInnerHtml(a.html)}/>
        </div>
      )
    })}
  </div>
)

Feed.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default cssModules(Feed, styles)
