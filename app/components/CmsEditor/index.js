import React from 'react'
import styles from './index.module.scss'
import cssModules from 'react-css-modules'
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from 'megadraft'
import { stateToHTML } from 'draft-js-export-html'
import { saveArticle } from '../../helpers/api'

class CmsEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editorState: editorStateFromRaw(null),
      articleTitle: '',
    }

    this.onChange = ::this.onChange
    this.handleInputChange = ::this.handleInputChange

    this.publish = () => {
      const options = {
        blockRenderers: {
          atomic: (block) => {
            const data = block.getData()
            return `<img src="${data._root.entries[0][1]}">`
          },
        },
      }

      const contentState = this.state.editorState.getCurrentContent()
      const content = editorStateToJSON(this.state.editorState)
      const formattedContent = JSON.parse(content).blocks
      const html = stateToHTML(contentState, options)
      const articleTitle = this.state.articleTitle
      /*eslint-disable */
      console.log('%cJSON: \n', 'font-weight: bold', content)
      console.log('%cHTML: \n', 'font-weight: bold', html)
      /*eslint-ensable */

      saveArticle(articleTitle,formattedContent);

      /* Helper function to read block data
      const blockData = contentState.getBlocksAsArray().map(function (block) {
        return block.getData()._root;
      });
      console.log(blockData);
      */

      this.setState({
        editorState: editorStateFromRaw(null) ,
        articleTitle: '',
      });
    };
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
          Publish
        </button>
      </div>
    )
  }
}

export default cssModules(CmsEditor, styles)
