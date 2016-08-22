import React from 'react'
const contenText = 'William Ford Gibson a speculative fiction writer widely credited with pioneering the science fiction subgenre known as cyberpunk.......'

const linkRanges = [
  {
    href: 'https://en.wikipedia.org/wiki/Speculative_fiction',
    length: 19,
    offset: 23,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Science_fiction',
    length: 15,
    offset: 86,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Cyberpunk',
    length: 9,
    offset: 120,
  },
]

const contentJsx = (<p>
                      William Ford Gibson a
                      <a href='https://en.wikipedia.org/wiki/Speculative_fiction'> speculative fiction </a>
                      writer widely credited with pioneering the
                      <a href='https://en.wikipedia.org/wiki/Science_fiction'> science fiction </a>
                      subgenre known as
                      <a href='https://en.wikipedia.org/wiki/Cyberpunk'> cyberpunk </a>
                      .......
                  </p>)

// We need a function that turns contentText to jsx and add <a> tags
// The output of this function should look like contentJsx
function contentTextToJsx(contenText, linkRanges) {

  .............

}
