import ArticlePage from './ArticlePage'

import { standard } from 'src/components/ArticleCell/ArticleCell.mock'

export const generated = () => {
  mockGraphQLQuery('ArticleQuery', (res, { ctx: { delay } }) => {
    delay(1200)
    return standard()
  })
  return <ArticlePage id={1} />
}

export default { title: 'Pages/ArticlePage' }
