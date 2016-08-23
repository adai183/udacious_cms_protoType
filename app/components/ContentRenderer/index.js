import React, { PropTypes } from 'react'

/**
 * Add linkedTxt property to a block object
 * @param  {object} block Block object
 * @return {object}       A block object with
 *                          a linkedTxt prop
 */
const addLinkedTxt = (block) => {
  const { entityRanges, text } = block
  if (!entityRanges) {
    return {...block, linkedTxt: text}
  }
  // store the current position
  let pos = 0
  let linkedTxt = []
  // loop through the entities
  entityRanges.forEach((entity, i) => {
    const { href, length, offset } = entity
    // add the text before the link
    linkedTxt.push(text.slice(pos, offset))
    // add the link
    linkedTxt.push((<a key={i} href={href}>{text.slice(offset, offset + length)}</a>))
    // update position
    pos = offset + length
  })
  // add string after the last link
  linkedTxt.push(text.slice(pos))
  return {...block, linkedTxt}
}

/**
 * Returns a React element from a block object
 * @param  {object} block A block object (w/ linkedTxt prop)
 * @return {object}       A react element
 */
const renderBlock = (block) => {
  switch (block.type) {
    // unstyled block, return a p
    case 'unstyled':
      return <p key={block.key}>{block.linkedTxt}</p>
    // atomic block (image/video)
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
            allowFullScreen={true} />
          </p>
        )
      } else {
        console.error('unknown atomic type')
        return <p key={block.key}>{block.linkedTxt}</p>
      }
    // blockquote block
    case 'blockquote':
      return <blockquote key={block.key}>{block.linkedTxt}</blockquote>
    default:
      return <p key={block.key}>{block.linkedTxt}</p>
  }
}

const ContentRenderer = ({contentBlocks}) => {
  // add linkedTxt to blocks
  const blocks = contentBlocks.map(addLinkedTxt)
  return (<div>{blocks.map(renderBlock)}</div>)
}

ContentRenderer.propTypes = {
  contentBlocks: PropTypes.array.isRequired,
}

export default ContentRenderer
