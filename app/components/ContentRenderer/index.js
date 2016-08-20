import React, { Component, PropTypes } from 'react'

class ContentRenderer extends Component { // eslint-disable-line react/prefer-stateless-function

  render () {
    /*
    TODO: complete mapping for all styles
          - render inlineStyles
          - render Links
    */
    const blocks = this.props.contentBlocks.map((block) => {
      switch (block.type) {
        case 'unstyled':
          return <p key={block.key}>{block.text}</p>
        case 'atomic':
          if (block.data.type === 'image') {
            return <p key={block.key}><img src={block.data.src} /></p>
          } else if (block.data.type === 'video') {
            /*
              TODO: - Decide wether to use embed url
                    - Check video style in MegadraftEditor
            */
            return (
              <p key={block.key}>
                <iframe
                src={block.data.src}
                width='640"' height='360'
                frameBorder='0'
                allowFullscreen />
              </p>
            )
          }
        case 'blockquote':
          return <blockquote key={block.key}>{block.text}</blockquote>
        default:
          return <p key={block.key}>{block.text}</p>
      }
    })

    return (
    <div>
      {blocks}
    </div>
    )
  }
}

ContentRenderer.propTypes = {
  contentBlocks: PropTypes.array.isRequired,
}

export default ContentRenderer
