import blockContent from './blockContent'
import pressArticle from './pressArticle'
import embedHtml from './embedHtml' // <-- 1. Importa el nuevo archivo

export const schemaTypes = [
  pressArticle, 
  blockContent, 
  embedHtml // <-- 2. Añádelo a la lista
]