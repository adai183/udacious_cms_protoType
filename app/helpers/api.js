import { ref } from '../config/constants'

export function saveArticle (title, article) {
  const articleId = ref.child('articles').push().key
  const dbData = { ...{ contentBlocks: article }, articleId, title }
  ref.child(`articles/${articleId}`)
    .set(dbData)

  console.log('%cDB: \n', 'font-weight: bold', dbData)
}

export function saveArticle2 (title, editorState, html) {
  const articleId = ref.child('articles2').push().key
  const data = { title, editorState, html }
  ref.child(`articles2/${articleId}`).set(data)
}
