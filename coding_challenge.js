/*
On our Udacious CMS database we save content text as a strings and also metadata
on how to render the content text.
In this challenge we will write some logic to add links to the content text.
To be able to do that we need some link metadata. We need to know where in the text
we have to add <a> tags and with which href.
To determine where to position the link in the text we get the offset and the length
of the link title.
This will become more clear looking at the code tha follows:
*/

const contentTxt = 'William Ford Gibson a speculative fiction writer widely credited with pioneering the science fiction subgenre known as cyberpunk.......'

const linkMetaData = [
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


/*
We are looking for the logic that brings linkMetaData and contentTxt together.
We need a function that creates an array for React to render our content with the
inserted links.
*/

// The array we are looking for should look like this:
const styeldTxtExample = ["William Ford Gibson a ", <a href="https://en.wikipedia.org/wiki/Speculative_fiction">speculative fiction</a>," writer widely credited with pioneering the ", <a href="https://en.wikipedia.org/wiki/Science_fiction">science fiction</a>, " subgenre known as ", <a href="https://en.wikipedia.org/wiki/Cyberpunk">cyberpunk</a>, "......."]


// React component that renders our styled content bringing together text and metadata
class ContentRenderer extends React.Component {

  render () {

    // push your text strings and link jsx in here
    let styledTxt = []

    /*
      write the logic to push the right text strings and link jsx into styledTxt
      array inside the addLinkTags function
    */
    function addLinkTags () {
      // write your code in here

    }
    addLinkTags()
  
    return (
      <div>
        {styledTxt}
      </div>
    )
	}

}

React.render(<ContentRenderer />, document.getElementById('container'));
