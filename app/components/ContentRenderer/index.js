import React, { Component, PropTypes } from 'react'

class ContentRenderer extends Component { // eslint-disable-line react/prefer-stateless-function

  render () {
    /*
    TODO: complete mapping for all styles
          - render inlineStyles
          [x] render links ---> kratam rocks
    */
    const blocks = this.props.contentBlocks.map((block) => {
      // add inline styling
      let styledTxt = [block.text]
      function addLinkTags () {
        if (block.entityRanges) {
          styledTxt = []
          let pos = 0
          block.entityRanges.forEach(link => {
            let {offset, href, length} = link
            // add the text before the link
            styledTxt.push(block.text.slice(pos, offset))
            // add the link
            styledTxt.push((<a href={href}>{block.text.slice(offset, offset + length)}</a>))
            // update position
            pos = offset + length
          })
          // add string after the last link
          styledTxt.push(block.text.slice(pos))
        }
      }
      addLinkTags()

      // Take care of block styles
      switch (block.type) {

        case 'unstyled':
          return <p key={block.key}>{styledTxt}</p>

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
          return <blockquote key={block.key}>{styledTxt}</blockquote>
        default:
          return <p key={block.key}>{styledTxt}</p>
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
