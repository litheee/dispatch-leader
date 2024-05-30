import { Link } from 'react-router-dom'

import { ROUTE_NAMES } from '@/core/routes'

import classes from './NewsArticle.module.css'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react'

type NewsArticleProps = {
  title: string
  description: string
  previewImage: string
  date: Date
}

export const NewsArticle = ({ title, description, previewImage, date }: NewsArticleProps) => {
  return (
    <article className={classes['news-article']}>
      <div className={classes.preview}>
        <img src={previewImage} alt='image preview' />
      </div>

      <div className={classes.content}>
        <h2>{title}</h2>

        <p>{description}</p>

        <div className={classes.bottom}>
          <time dateTime={date.toString()}>
            {new Intl.DateTimeFormat('en-US', {
              weekday: 'short',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            }).format(date)}
          </time>

          <Link to={ROUTE_NAMES.HOME}>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
