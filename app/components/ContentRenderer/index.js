import React, { Component, PropTypes } from 'react'

class ContentRenderer extends Component { // eslint-disable-line react/prefer-stateless-function

  render () {
    /*
    TODO: complete mapping for all styles
          - render inlineStyles
          - render Links
    */
    const blocks = this.props.contentBlocks.map((block) => {
      // add inline styling
      let styledTxt = [block.text]
      function addLinkTags () {
        let currentTxtPosition = 0
        if (block.entityRanges) {
          styledTxt = []
          for (var i = 0; i < block.entityRanges.length; i++) {
            let offset = block.entityRanges[i].offset
            let linkTextLen = block.entityRanges[i].length
            let linkTextEnd = offset + linkTextLen
            let href = block.entityRanges[i].href
            let linkTitle = block.text.substring(offset, linkTextEnd)

            let plainTxt = block.text.substring(currentTxtPosition, offset)
            let link = <a href={href}>{linkTitle}</a>

            styledTxt.push(plainTxt, link)
            currentTxtPosition = offset + linkTextLen

            // add text fragment after last link
            if (i === block.entityRanges.length - 1) {
              let textTail = block.text.substring(linkTextEnd, block.text.length)
              styledTxt.push(textTail)
            }
          }
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
