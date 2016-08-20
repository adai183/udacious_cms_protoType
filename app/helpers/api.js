import { ref } from '../config/constants'

export function saveArticle (title, article) {
  const articleId = ref.child('articles').push().key
  const dbData = { ...{ contentBlocks: article }, articleId, title }
  ref.child(`articles/${articleId}`)
    .set(dbData)

  console.log('%cDB: \n', 'font-weight: bold', dbData)
}
