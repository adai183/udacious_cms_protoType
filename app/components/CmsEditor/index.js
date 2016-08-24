import React from 'react'
import styles from './index.module.scss'
import cssModules from 'react-css-modules'
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from 'megadraft'
import { stateToHTML } from 'draft-js-export-html'
import { saveArticle2 } from '../../helpers/api'

class CmsEditor extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      editorState: editorStateFromRaw(null),
      articleTitle: '',
    }

    // bindings
    this.onChange = ::this.onChange
    this.handleInputChange = ::this.handleInputChange
    this.publish = ::this.publish

    // editor options
    this.editorOpts = {
      blockRenderers: {
        atomic: (block) => {
          const data = block.getData()
          switch (data._root.entries[1][1]) {
            case 'image':
              return `<img src="${data._root.entries[0][1]}">`
            case 'video':
              return `<iframe width="560" height="315" src="${data._root.entries[0][1]}" frameborder="0" allowfullscreen></iframe>`
          }
        },
      },
    }
  }

  // publish the article to firebase
  publish () {
    const { editorState, articleTitle } = this.state
    const json = editorStateToJSON(editorState)
    const html = stateToHTML(editorState.getCurrentContent(), this.editorOpts)
    const parsedJson = JSON.parse(json)


    // save the article
    saveArticle2(articleTitle, parsedJson, html)

    // clear the editor state
    // TODO: saveArticle2 should return a promise
    // and we should clear the state only if
    // the save was successful
    this.setState({
      editorState: editorStateFromRaw(null),
      articleTitle: '',
    })
  }

  onChange (editorState) {
    this.setState({editorState})
  }

  handleInputChange (event) {
    this.setState({articleTitle: event.target.value})
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
          className={styles.input}
          ref='titleInput'
          type='text'
          value={this.state.articleTitle}
          onChange={this.handleInputChange}
          placeholder='Title'/>
        </div>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder='Tell a story ...'/>
        <button
          className={`button ${styles.button}`}
          onClick={this.publish}>
          {'Publish'}
        </button>
      </div>
    )
  }
}

export default cssModules(CmsEditor, styles)
