import { NewsArticle } from '@/components'

import classes from './News.module.css'

import articlePreviewSrc1 from '@/assets/img/placeholder/news/article-1.png'
import articlePreviewSrc2 from '@/assets/img/placeholder/news/article-2.png'
import articlePreviewSrc3 from '@/assets/img/placeholder/news/article-3.png'

export const NewsPage = () => {
  const articles = [
    {
      title:
        'Sudden container crunch sends ocean freight rates soaring, setting off global trade alarm bells',
      description:
        'A perfect storm in global trade is creating a shipping container  capacity crunch, fueling a sudden and surprise spike in ocean freight  rates.',
      previewImage: articlePreviewSrc1,
      date: new Date()
    },
    {
      title:
        'Norfolk Southern agrees to $310 million federal settlement over Ohio train derailment',
      description:
        'Norfolk Southern has agreed to pay $310 million to settle charges over a toxic train derailment in East Palestine, Ohio, in February 2023, the company announced on Thursday.',
      previewImage: articlePreviewSrc2,
      date: new Date()
    },
    {
      title:
        'Autos giant Peugeot is trialing driverless tech — with a twist — for Amazon-style deliveries',
      description:
        'The idea is to recreate the journey a delivery vehicle typically takes from an order fulfillment center to households or businesses, similar to the widely-known model already offered by Amazon — only this time with remote-controlled cars.',
      previewImage: articlePreviewSrc3,
      date: new Date()
    }
  ]

  return (
    <div className={classes['news -page']}>
      <h1>NEWS</h1>

      <ul className={classes['articles-list']}>
        {articles.map(({ title, description, previewImage, date }) => {
          return (
            <li key={title}>
              <NewsArticle
                title={title}
                description={description}
                previewImage={previewImage}
                date={date}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
